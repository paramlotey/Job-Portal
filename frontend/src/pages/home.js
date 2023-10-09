import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { searchJobAC, userAuthAC } from "../actions";
import About from "../components/about";
import Carousel from "../components/carousel";
import Footer from "../components/footer";
import Jobs from "../components/job-section";
import Nav from "../components/nav";

function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  const checkAuth = () => {
    dispatch(userAuthAC(navigate));
  };

  const searchJob = (jobKey) => {
    dispatch(searchJobAC(jobKey, navigate));
  };

  console.log("user", user);
  return (
    <>
      <Nav user={user} checkAuth={checkAuth}></Nav>
      <Carousel searchJob={searchJob}></Carousel>
      <Jobs />
      <About />
      <Footer />
    </>
  );
}
export default Home;
