require("dotenv").config();
const express = require("express");
const app = express();
const port = 8080;
const mongoose = require("mongoose");
const { Schema } = mongoose;
const cors = require("cors");
const bodyParser = require("body-parser").json;
const session = require("express-session");
const nodemailer = require("nodemailer");

app.use(
  cors({
    origin: "http://localhost:3000",
    // methods: ["GET", "POST", "DELETE"],
    credentials: true,
  })
);
app.use(bodyParser());
app.use(
  session({
    secret: "my-secret-key",
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: false,
      maxAge: 24 * 60 * 60 * 1000, // 1 day
    },
  })
);

// database connection function
main().catch((err) => console.log(`Unable to connect ${err}`));

async function main() {
  await mongoose.connect("mongodb+srv://job3:job3@cluster0.rpxzrxt.mongodb.net/?retryWrites=true&w=majority");
  console.log("Database Connected");
}

// schemas
const companySchema = new Schema({
  title: { type: String, required: true },
  companyName: { type: String, required: true },
  jobType: { type: String, required: true },
  email: { type: String, required: true },
  salary: { type: Number, required: true },
  location: { type: String, required: true },
  description: { type: String, required: true },
  userId: String,
});

const userSchema = new Schema({
  name: { type: String, required: true },
  email: {
    type: String,
    required: [true, "Email address is required."],
    unique: true,
    validate: {
      validator: function (v) {
        return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(v);
      },
      message: (props) => `${props.value} is not a valid email address.`,
    },
  },
  password: { type: String, required: true },

  // userType: {
  //   type: String,
  //   enum: ["employee", "recruiter", "other"],
  //   required: [true, "User type is required."],
  // },
});

const applicationSchema = new Schema({
  job: { type: Schema.Types.ObjectId, ref: "Company" },
  name: String,
  email: String,
  contact: String,
  userId: String,
});

// database models
const Company = new mongoose.model("company", companySchema);
const User = new mongoose.model("user", userSchema);
const Application = new mongoose.model("Application", applicationSchema);

// company job post API

app.get("/company", async (req, res) => {
  try {
    const companies = await Company.find({});
    res.json(companies);
  } catch (err) {
    res.send(err);
  }
});

app.get("/my/postings/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    const companies = await Company.find({ userId });
    res.send(companies);
  } catch (err) {
    res.send(err);
  }
});
app.delete("/delete/:id", async (req, res) => {
  console.log("object");
  try {
    const { id } = req.params;
    await Company.findByIdAndDelete(id);
    res.send({ status: true });
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});
app.post("/postjob/:userId", (req, res) => {
  const { userId } = req.params;
  let company = new Company({ ...req.body.company, userId });
  company
    .save()
    .then((result) => {
      res.status(200).send({ status: true, company: result });
    })
    .catch((err) => res.send(err));
});

// user auth API

app.get("/userauth", (req, res) => {
  if (req.session.user) {
    User.findOne({ email: req.session.user.email }).then((result) => {
      req.session.user = result;
      res.status(200).send({ status: true, user: result });
    });
  } else {
    res.send({ status: false });
  }
});

// login signup API

app.post("/signup", async (req, res) => {
  try {
    const { user } = req.body;
    if (!user || !user.email) {
      return res.status(400).send({ message: "Invalid Body request" });
    }
    const existingUser = await User.findOne({ email: user.email });
    if (existingUser) {
      return res
        .status(400)
        .send({ status: false, message: "User already exist with this email" });
    }
    const newUser = new User({
      name: user.name,
      email: user.email,
      password: user.password,
    });

    const savedUser = await newUser.save();
    req.session.user = savedUser;
    return res.status(200).send({ status: true, user: savedUser });
  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal server error");
  }
});

app.post("/login", async (req, res) => {
  const email = req.body.user.email;
  const password = req.body.user.password;
  if (!email || !password) {
    return res
      .status(400)
      .send({ status: false, message: "Email and Password are required" });
  }
  try {
    const user = await User.findOne({ email: email, password: password });
    if (!user) {
      res.status(400).send({ status: false, message: "User not found" });
      return;
    }
    req.session.user = user;
    res.status(200).send({ status: true, user: user });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .send({ status: false, message: "Internal server error" });
  }
});

// logout
app.post("/logout", (req, res) => {
  req.session.destroy();
  res.send({ status: true });
});
// search job API

app.post("/searchjob", (req, res) => {
  if (!req.body.job.title && !req.body.job.location) {
    res.status(400).send("Invalid request body");
    return;
  }
  console.log(req.body.job);
  const jobTitle = req.body.job.title;
  const location = req.body.job.location;
  let filter = {};
  if (jobTitle && location) {
    filter = {
      $or: [
        { title: { $regex: new RegExp(jobTitle, "gi") } },
        { location: { $regex: new RegExp(location, "gi") } },
      ],
    };
  } else if (jobTitle) {
    filter = { title: { $regex: new RegExp(jobTitle, "gi") } };
  } else if (location) {
    filter = { location: { $regex: new RegExp(location, "gi") } };
  } else {
    res.status(400).send("Invalid request body");
    return;
  }
  Company.find(filter)
    .then((result) => {
      res.status(200).send({ status: true, job: result });
    })
    .catch((err) => res.status(400).send(err));
});

// apply job api

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_ADDRESS,
    pass: process.env.EMAIL_PASSWORD,
  },
});

app.post("/applyJob", async (req, res) => {
  try {
    const post = await Company.findOne({
      _id: req.body.job._id,
      title: req.body.job.title,
    });
    if (!post) {
      return res.status(404).json({ message: "Job not found" });
    }
    const name = req.body.application.name;
    const email = req.body.application.email;
    const contact = req.body.application.contact;
    if (!name || !email || !contact) {
      res.status(404).json({ message: "Name, email and contact are required" });
    }
    let application = new Application({
      job: post._id,
      name: name,
      email: email,
      contact: contact,
    });
    await application.save();
    const mailOptions = {
      from: process.env.EMAIL_ADDRESS,
      to: post.email,
      subject: `New application for ${post.title}`,
      text: `Hi ${post.companyName} \n\nA new application has been submitted for your posting ${post.title}. \n\n Applicant Name: ${name} \n Applicant Email: ${email} \n Applicant Contact: ${contact}`,
    };

    await transporter.sendMail(mailOptions);
    res.json({ message: "Application has been submitted succesfully!" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "server error!" });
  }
});

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
