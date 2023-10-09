import "./App.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
// import WorkIcon from "@mui/icons-material/Work";
// import Avatar from "@mui/material/Avatar";
// import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Link } from "react-router-dom";
import ScheduleOutlinedIcon from "@mui/icons-material/ScheduleOutlined";
import BusinessIcon from "@mui/icons-material/Business";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
// import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { applyJobAC } from "../actions";
function Jobs() {
  const [companies, setCompanies] = useState([]);
  const dispatch = useDispatch();
  const applyJob = (job) => {
    dispatch(applyJobAC(job));
  };
  const getJobs = async () => {
    try {
      const response = await axios.get("http://localhost:8080/company");
      const data = response.data;
      setCompanies(data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getJobs();
  }, []);
  return (
    <>
      <div className="job">
        {/* <div className="d-flex flex-wrap category my-5 justify-content-center gap-2">
          <button>All</button>
          <button>Developer & IT</button>
          <button>Corporate</button>
          <button>Accounting</button>
          <button>Medical</button>
          <button>Marketing</button>
          <button>Civil</button>
        </div> */}
        {/* <div className="job-post my-5">
          <div className="container">
            <div className="row justify-content-center gap-5">
              <div className="col-md-3 py-4 px-3">
                <span className="job-role">Developer & IT</span>
                <h6>MERN Stack Developer</h6>
                <div className="d-flex justify-content-between">
                  <p className="detail">
                    <LocationOnIcon className="icon"></LocationOnIcon> New
                    Delhi, India
                  </p>
                  <p className="detail">
                    <WorkIcon className="icon"></WorkIcon> Full Time
                  </p>
                </div>
                <div className="d-flex">
                  <Avatar src="images/company-logo1.svg" />
                  <p className="company-name">Globe Solutions Ltd.</p>
                </div>
              </div>
              <div className="col-md-3 py-4 px-3">
                <span className="job-role2">Developer & IT</span>
                <h6>MERN Stack Developer</h6>
                <div className="d-flex justify-content-between">
                  <p className="detail">
                    <LocationOnIcon className="icon"></LocationOnIcon> New
                    Delhi, India
                  </p>
                  <p className="detail">
                    <WorkIcon className="icon"></WorkIcon> Full Time
                  </p>
                </div>
                <div className="d-flex">
                  <Avatar src="images/company-logo2.svg" />
                  <p className="company-name">Globe Solutions Ltd.</p>
                </div>
              </div>
              <div className="col-md-3 py-4 px-3">
                <span className="job-role3">Developer & IT</span>
                <h6>MERN Stack Developer</h6>
                <div className="d-flex justify-content-between">
                  <p className="detail">
                    <LocationOnIcon className="icon"></LocationOnIcon> New
                    Delhi, India
                  </p>
                  <p className="detail">
                    <WorkIcon className="icon"></WorkIcon> Full Time
                  </p>
                </div>
                <div className="d-flex">
                  <Avatar src="images/company-logo3.svg" />
                  <p className="company-name">Globe Solutions Ltd.</p>
                </div>
              </div>
            </div>
            <div className="row justify-content-center gap-5 mt-5">
              <div className="col-md-3 py-4 px-3">
                <span className="job-role">Developer & IT</span>
                <h6>MERN Stack Developer</h6>
                <div className="d-flex justify-content-between">
                  <p className="detail">
                    <LocationOnIcon className="icon"></LocationOnIcon> New
                    Delhi, India
                  </p>
                  <p className="detail">
                    <WorkIcon className="icon"></WorkIcon> Full Time
                  </p>
                </div>
                <div className="d-flex">
                  <Avatar src="images/company-logo4.svg" />
                  <p className="company-name">Globe Solutions Ltd.</p>
                </div>
              </div>
              <div className="col-md-3 py-4 px-3">
                <span className="job-role4">Developer & IT</span>
                <h6>MERN Stack Developer</h6>
                <div className="d-flex justify-content-between">
                  <p className="detail">
                    <LocationOnIcon className="icon"></LocationOnIcon> New
                    Delhi, India
                  </p>
                  <p className="detail">
                    <WorkIcon className="icon"></WorkIcon> Full Time
                  </p>
                </div>
                <div className="d-flex">
                  <Avatar src="images/company-logo5.svg" />
                  <p className="company-name">Globe Solutions Ltd.</p>
                </div>
              </div>
              <div className="col-md-3 py-4 px-3">
                <span className="job-role5">Developer & IT</span>
                <h6>MERN Stack Developer</h6>
                <div className="d-flex justify-content-between">
                  <p className="detail">
                    <LocationOnIcon className="icon"></LocationOnIcon> New
                    Delhi, India
                  </p>
                  <p className="detail">
                    <WorkIcon className="icon"></WorkIcon> Full Time
                  </p>
                </div>
                <div className="d-flex">
                  <Avatar src="images/company-logo6.svg" />
                  <p className="company-name">Globe Solutions Ltd.</p>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <div className="container">
          <div className="row justify-content-center gap-5">
            {companies.length > 0 ? (
              <>
                <h2 className="job-title">Discover best jobs for you</h2>
                <p className="job-subtitle">
                  Browse 200+ Top jobs in your city
                </p>
                {companies?.map((company) => (
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
                ))}
              </>
            ) : (
              <h3 className="text-center mt-5 fw-bold">No Jobs Available</h3>
            )}
          </div>
        </div>
        {/* <div className="d-flex justify-content-center">
          <button className="carousel-btn btn mb-2">
            Find More <SearchIcon />
          </button>
        </div> */}
      </div>
    </>
  );
}

export default Jobs;
