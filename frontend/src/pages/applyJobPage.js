import { useSelector } from "react-redux";
const { default: ApplyJob } = require("../components/applyJob");
const { default: Footer } = require("../components/footer");
const { default: Nav } = require("../components/nav");

function ApplyJobPage() {
  const job = useSelector((state) => state.application.job);
  console.log(job);
  return (
    <>
      <Nav />
      <ApplyJob job={job}></ApplyJob>
      <Footer />
    </>
  );
}

export default ApplyJobPage;
