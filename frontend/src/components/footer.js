import "./App.css";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FavoriteIcon from "@mui/icons-material/Favorite";
function Footer() {
  return (
    <>
      <footer className="py-5">
        <div className="container-fluid">
          <div className="row justify-content-center my-5">
            <div className="col-md-3">
              <h4 className="footer-logo">npmJobs</h4>
              <p className="about-p mt-4">
                We collect reviews from our users so you can get an honest
                opinion of what an experience with our website.
              </p>
              <FacebookRoundedIcon className="footer-icon"></FacebookRoundedIcon>
              <InstagramIcon className="mx-1 footer-icon"></InstagramIcon>
              <TwitterIcon className="footer-icon"></TwitterIcon>
            </div>
            <div className="col-md-2">
              <h4>Quick Links</h4>
              <ul className="list-unstyled mt-4">
                <li className="footer-link">
                  <a href="#">Work</a>
                </li>
                <li className="footer-link">
                  <a href="#">Service</a>
                </li>
                <li className="footer-link">
                  <a href="#">Products</a>
                </li>
                <li className="footer-link">
                  <a href="#">Tips & Tricks</a>
                </li>
              </ul>
            </div>
            <div className="col-md-2">
              <h4>For Employers</h4>
              <ul className="list-unstyled mt-4">
                <li className="footer-link">
                  <a href="#">Air frieght</a>
                </li>
                <li className="footer-link">
                  <a href="#">Ocean frieght</a>
                </li>
                <li className="footer-link">
                  <a href="#">Large projects</a>
                </li>
                <li className="footer-link">
                  <a href="#">Job packages</a>
                </li>
              </ul>
            </div>
            <div className="col-md-2">
              <h4>For Candidates</h4>
              <ul className="list-unstyled mt-4">
                <li className="footer-link">
                  <a href="#">Browse Jobs</a>
                </li>
                <li className="footer-link">
                  <a href="#">Ocean frieght</a>
                </li>
                <li className="footer-link">
                  <a href="#">Candidate Dashboard</a>
                </li>
                <li className="footer-link">
                  <a href="#">Job alerts</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <p className="text-center about-p">
          Copyright ©2023 All rights reserved | This template is made with{" "}
          <FavoriteIcon /> by Sahil Arora
        </p>
      </footer>
    </>
  );
}
export default Footer;
