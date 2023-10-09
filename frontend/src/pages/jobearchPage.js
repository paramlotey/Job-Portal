import Footer from "../components/footer";
import Jobsearch from "../components/job-search";
import Nav from "../components/nav";
import { useDispatch } from "react-redux";
import { postJobAC } from "../actions";

function JobSearchPage() {
  const dispatch = useDispatch();
  const postJob = (jobDetail, id) => {
    dispatch(postJobAC(jobDetail, id));
  };
  return (
    <>
      <Nav />
      <Jobsearch postJob={postJob}></Jobsearch>
      <Footer />
    </>
  );
}
export default JobSearchPage;
