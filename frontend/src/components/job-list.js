import "./App.css";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ScheduleOutlinedIcon from "@mui/icons-material/ScheduleOutlined";
import BusinessIcon from "@mui/icons-material/Business";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import { useState } from "react";
function JobList({ jobResult, applyJob, searchJob }) {
  const keywords = { title: "", location: "" };
  const [jobKey, setJobKey] = useState(keywords);
  const handleSubmit = () => {
    console.log(jobKey);
    searchJob(jobKey);
  };
  return (
    <>
      <div className="job-post">
        <p className="text-center">
          Home <KeyboardArrowRightIcon /> Browse Jobs
        </p>

        <div className="container d-flex flex-column justify-content-center align-items-center my-5">
          <h4 className="fw-bold">JOB LISTINGS</h4>
          <form className="d-flex gap-1 my-3">
            <TextField
              id="outlined-basic"
              label="Job Title"
              variant="outlined"
              className="search-input"
              size="small"
              value={jobKey.title}
              onChange={(e) => setJobKey({ ...jobKey, title: e.target.value })}
            />
            <TextField
              id="outlined-basic"
              label="Location"
              variant="outlined"
              className="search-input"
              size="small"
              value={jobKey.location}
              onChange={(e) =>
                setJobKey({ ...jobKey, location: e.target.value })
              }
            />
            <Link
              to="/browsejob"
              className="btn btn-search"
              variant="text"
              type="submit"
              onClick={handleSubmit}
            >
              <SearchIcon />
            </Link>
          </form>
          {jobResult.length > 0 ? (
            jobResult.map((company) => (
              <>
                <div className="col-md-5 py-4 job-list col-sm-12 my-2">
                  <div className="d-flex justify-content-center my-3"></div>
                  <div className="job-list-group">
                    <div className="d-flex flex-column">
                      <div className="d-flex align-items-center">
                        <h5 className="company-title">{company.title}</h5>
                      </div>
                      <div className="job-flex">
                        <p className="job-list-p">
                          <LocationOnIcon className="icon-job" />
                          {""}
                          {""}
                          {""}
                          {company.location}
                        </p>
                        <p className="job-list-p">
                          <ScheduleOutlinedIcon className="icon-job" /> {""}{" "}
                          {""}
                          {""}
                          {company.jobType}
                        </p>
                      </div>
                      <div className="job-flex">
                        <p className="job-list-p">
                          <CurrencyRupeeIcon className="icon-job" />{" "}
                          {company.salary}
                        </p>
                        <p className="job-list-p">
                          <BusinessIcon /> {company.companyName}
                        </p>
                      </div>
                    </div>
                    <div className="mt-5">
                      <Link
                        to="/applyjob"
                        className="apply-btn btn"
                        onClick={() => applyJob(company)}
                      >
                        Apply Now
                      </Link>
                    </div>
                  </div>
                </div>
              </>
            ))
          ) : (
            <>
              <h5 className="mt-5 mb-5 text-danger">Oops! No Job Found</h5>
              {/* <form className="d-flex gap-1">
                <TextField
                  id="outlined-basic"
                  label="Job Title"
                  variant="outlined"
                  className="search-input"
                  size="small"
                  value={jobKey.title}
                  onChange={(e) =>
                    setJobKey({ ...jobKey, title: e.target.value })
                  }
                />
                <TextField
                  id="outlined-basic"
                  label="Location"
                  variant="outlined"
                  className="search-input"
                  size="small"
                  value={jobKey.location}
                  onChange={(e) =>
                    setJobKey({ ...jobKey, location: e.target.value })
                  }
                />
                <Link
                  to="/browsejob"
                  className="btn btn-search"
                  variant="text"
                  type="submit"
                  onClick={handleSubmit}
                >
                  <SearchIcon />
                </Link>
              </form> */}
            </>
          )}
          {/* <div className="col-md-7 job-list col-sm-12 my-2">
            <div className="job-list-group">
              <div className="d-flex flex-column">
                <div className="d-flex align-items-center">
                  <h5>Software Engineer</h5>
                </div>
                <div className="job-flex">
                  <p className="job-list-p">
                    <LocationOnIcon className="icon-job" />
                    {""}
                    {""}
                    {""}
                    New Delhi
                  </p>
                  <p className="job-list-p">
                    <ScheduleOutlinedIcon className="icon-job" /> {""} {""}
                    {""}
                    Full Time
                  </p>
                </div>
                <p className="job-list-p">
                  <CurrencyRupeeIcon className="icon-job" /> 40,000
                </p>
              </div>
              <div className="mt-5">
                <button className="apply-btn btn">Apply Now</button>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}
export default JobList;
