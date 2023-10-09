import { useDispatch, useSelector } from "react-redux";
import { applyJobAC, searchJobAC } from "../actions";
import Footer from "../components/footer";
import JobList from "../components/job-list";
import Nav from "../components/nav";

function JobListPage() {
  const jobResult = useSelector((state) => state.jobPost.searchedJob);
  const dispatch = useDispatch();
  const applyJob = (job) => {
    dispatch(applyJobAC(job));
  };
  const searchJob = (jobKey) => {
    dispatch(searchJobAC(jobKey));
  };
  return (
    <>
      <Nav />
      <JobList
        jobResult={jobResult}
        applyJob={applyJob}
        searchJob={searchJob}
      ></JobList>
      <Footer />
    </>
  );
}
export default JobListPage;
