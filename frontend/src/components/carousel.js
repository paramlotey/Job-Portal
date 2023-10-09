import "./App.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { Link } from "react-router-dom";

function Carousel({ searchJob }) {
  const keywords = { title: "", location: "" };
  const [jobKey, setJobKey] = useState(keywords);
  const handleSubmit = (jobKey) => {
    searchJob(jobKey);
    console.log(jobKey);
  };
  return (
    <>
      <div className="container carousel">
        <h5 className="text-center subtitle">
          Easiest way to find a persfect job
        </h5>
        <h1 className="title">
          Find the best and your dream <br /> job that fits you.
        </h1>
        <div className="d-flex justify-content-center my-3">
          <form className="d-flex gap-1">
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
              onClick={() => handleSubmit(jobKey)}
              type="submit"
            >
              <SearchIcon />
            </Link>
          </form>
        </div>
        <div className="d-flex justify-content-center">
          <button className="carousel-btn btn">
            Get started free <ArrowForwardIcon />
          </button>
        </div>
        <div className="d-flex justify-content-center my-4">
          <img
            src="images/home-hero.png"
            className="img-fluid col-md-8"
            alt="icon"
          ></img>
        </div>
      </div>
      <div className="container browse">
        <h1 className="browse-title">1000+</h1>
        <h1 className="browse-title2">Browse from our top jobs</h1>
        <div className="d-flex justify-content-center">
          <p className="browse-caption col-md-8">
            The automated process starts as soon as your clothes go into the
            machine. The outcome is gleaming clothes. Placeholder text commonly
            used.
          </p>
        </div>
      </div>
    </>
  );
}
export default Carousel;
