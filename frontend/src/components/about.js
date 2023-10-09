import "./App.css";
import TextField from "@mui/material/TextField";
function About() {
  return (
    <>
      <div className="container about py-5 mb-5">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <img src="images/about2.png" className="img-fluid" alt="icon" />
          </div>
          <div className="col-md-5 mt-5">
            <h1 className="about-title">Why we are different</h1>
            <p className="about-p">
              We collect reviews from our users so you can get an honest opinion
              of what an experience with our website.
            </p>
            <div className="d-flex justify-content-around gap-3 mt-4">
              <img
                src="images/wikis-icon.png"
                className="col-1 img-fluid"
                alt="icon"
              />
              <p className="about-p">
                Keep your cool. Get on-demand help to on-demand make the best
                offer.
              </p>
            </div>
            <div className="d-flex justify-content-around gap-3 mt-4">
              <img
                src="images/docs-icon.png"
                className="col-1 img-fluid"
                alt="icon"
              />
              <p className="about-p">
                Keep your cool. Get on-demand help to on-demand make the best
                offer.
              </p>
            </div>
            <div className="d-flex justify-content-around gap-3 mt-4">
              <img
                src="images/projects-icon.png"
                className="col-1 img-fluid"
                alt="icon"
              />
              <p className="about-p">
                Keep your cool. Get on-demand help to on-demand make the best
                offer.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container mb-5">
        <h1 className="title-about">
          Subscribe to our newsletter to get <br /> updates about latest jobs
        </h1>
        <p className="about-p text-center mt-3">
          Go house hunting with confidence thanks to all the information that
          experts normally keep to themselves. <br /> Check the facts and
          figures whenever you want, from wherever you want.
        </p>
        <div className="d-flex justify-content-center gap-2">
          <TextField
            id="outlined-basic"
            label="Enter your email"
            variant="outlined"
            size="small"
          />
          <button className="carousel-btn btn">Subscribe</button>
        </div>
      </div>
    </>
  );
}
export default About;
