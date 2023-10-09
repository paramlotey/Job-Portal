import "./App.css";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ScheduleOutlinedIcon from "@mui/icons-material/ScheduleOutlined";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import BusinessIcon from "@mui/icons-material/Business";
import axios from "axios";
import { useState } from "react";
function ApplyJob({ job }) {
  const blankApplication = { name: "", email: "", contact: "" };
  const [application, setApplication] = useState(blankApplication);
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/applyJob", { job, application })
      .then(function (res) {
        alert("Application applied!");
        setApplication(blankApplication);
        console.log(res.data.json);
      })
      .catch(function (err) {
        console.log(err);
      });
    console.log(application);
  };
  return (
    <>
      <div className="job">
        <p className="text-center">
          Home <KeyboardArrowRightIcon /> Browse Jobs
        </p>
        <div className="container d-flex justify-content-center">
          <div className="col-md-4 job-list mt-4">
            <div className="job-list-group">
              <div className="d-flex flex-column">
                <div className="d-flex align-items-center">
                  <h5>{job.title}</h5>
                </div>
                <div className="job-flex">
                  <p className="job-list-p">
                    <LocationOnIcon className="icon-job" />
                    {""}
                    {""}
                    {""}
                    {job.location}
                  </p>
                  <p className="job-list-p">
                    <ScheduleOutlinedIcon className="icon-job" /> {""} {""}
                    {""}
                    {job.jobType}
                  </p>
                </div>
                <div className="job-flex">
                  <p className="job-list-p">
                    <CurrencyRupeeIcon className="icon-job" /> {job.salary}
                  </p>
                  <p className="job-list-p">
                    <BusinessIcon /> {job.companyName}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="login-form-area">
          <div className="row justify-content-center">
            <div className="col-md-5">
              <form className="login-form" onSubmit={handleSubmit}>
                <div className="input-box">
                  <div className="input-fields">
                    <label>Name</label>
                    <input
                      type="text"
                      value={application.name}
                      onChange={(e) =>
                        setApplication({ ...application, name: e.target.value })
                      }
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div className="input-fields">
                    <label>email</label>
                    <input
                      type="email"
                      value={application.email}
                      onChange={(e) =>
                        setApplication({
                          ...application,
                          email: e.target.value,
                        })
                      }
                      placeholder="Your Email"
                      required
                    />
                  </div>
                  <div className="input-fields">
                    <label>Contact</label>
                    <input
                      type="text"
                      value={application.contact}
                      onChange={(e) =>
                        setApplication({
                          ...application,
                          contact: e.target.value,
                        })
                      }
                      placeholder="Your Contact"
                      required
                    />
                  </div>
                  <button type="submit" className="btn carousel-btn px-4">
                    Apply Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ApplyJob;
