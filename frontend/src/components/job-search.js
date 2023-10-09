import "./App.css";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useState } from "react";
import { useSelector } from "react-redux";
function Jobsearch({ postJob }) {
  const blank_form = {
    title: "",
    companyName: "",
    jobType: "",
    email: "",
    location: "",
    salary: 0,
    description: "",
  };
  const [form, setForm] = useState(blank_form);
  const user = useSelector((state) => state.user);
  const userId = user?._id;
  console.log(user);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !form.title ||
      !form.companyName ||
      !form.jobType ||
      !form.email ||
      !form.location ||
      !form.salary ||
      !form.description
    ) {
      alert("Please enter all details");
    } else {
      console.log(form);
      postJob(form, userId);
      setForm(blank_form);
    }
  };
  return (
    <>
      <div className="job-post">
        <p className="text-center">
          Home <KeyboardArrowRightIcon /> Post Job
        </p>
        <h1 className="text-center title">Largest Job Site in the world</h1>
        {/* <h1 className="text-center subtitle"></h1> */}
        <div className="container login-form-area">
          <div className="row justify-content-center">
            <div className="col-md-7">
              <form className="login-form" onSubmit={(e) => handleSubmit(e)}>
                <div className="input-box">
                  <div className="input-fields">
                    <label>Job Title</label>
                    <input
                      type="text"
                      placeholder="eg. UX Designer"
                      value={form.title}
                      onChange={(e) =>
                        setForm({ ...form, title: e.target.value })
                      }
                    />
                  </div>
                  <div className="input-fields">
                    <label>Company Name</label>
                    <input
                      type="text"
                      placeholder="eg. Facebook"
                      value={form.companyName}
                      onChange={(e) =>
                        setForm({ ...form, companyName: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="input-fields">
                    <label>Email</label>
                    <input
                      type="email"
                      placeholder="Your Company Email"
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="input-fields">
                    <label>Job Type</label>
                    <input
                      type="text"
                      placeholder="eg. Full Time"
                      value={form.jobType}
                      onChange={(e) =>
                        setForm({ ...form, jobType: e.target.value })
                      }
                    />
                  </div>
                  <div className="input-fields">
                    <label>Location</label>
                    <input
                      type="text"
                      placeholder="eg. New Delhi, India"
                      value={form.location}
                      onChange={(e) =>
                        setForm({ ...form, location: e.target.value })
                      }
                    />
                  </div>
                  <div className="input-fields">
                    <label>Salary</label>
                    <input
                      type="number"
                      value={form.salary}
                      onChange={(e) =>
                        setForm({ ...form, salary: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="input-fields">
                    <label>Job Description</label>
                    <textarea
                      value={form.description}
                      onChange={(e) =>
                        setForm({ ...form, description: e.target.value })
                      }
                    ></textarea>
                  </div>
                  <button type="submit" className="btn carousel-btn px-4">
                    Post
                  </button>
                </div>
              </form>
            </div>
            <div className="col-md-4 mt-5 ">
              <img src="images/job-post.png" className="img-fluid" alt="icon" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Jobsearch;
