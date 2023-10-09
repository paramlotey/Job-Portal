import { useEffect, useState } from "react";
import axios from "axios";
import Nav from "./nav";
import { useSelector } from "react-redux";
export default function MyPosting() {
  const [posting, setPostings] = useState([]);
  async function getPostings() {
    const userId = localStorage.getItem("userId");
    try {
      const res = await axios.get(
        `http://localhost:8080/my/postings/${userId}`
      );
      console.log(res);
      setPostings(res.data);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getPostings();
    console.log("post", posting);
  }, []);
  async function handleDeleteJob(id) {
    console.log(id);
    try {
      const res = await axios.delete(`http://localhost:8080/delete/${id}`);
      console.log(res);
      if (res.data.status) {
        window.location.reload();
      }
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <>
      <Nav></Nav>

      {posting.length > 0 ? (
        <div className="mt-5 container">
          <h4 className="text-info fw-bold">Your Postings</h4>
          <table className="table border">
            <thead>
              <tr>
                <th scope="col">Ttile</th>
                <th scope="col">Salary</th>
                <th scope="col">Company Name</th>
                <th scope="col">Description</th>
                <th scope="col">Location</th>
              </tr>
            </thead>
            <tbody>
              {posting.map((job) => {
                return (
                  <>
                    <tr>
                      <th scope="row" className="text-capitalize">
                        {job.title}
                      </th>
                      <td className="text-capitalize">{job.salary}</td>
                      <td className="text-capitalize">{job.companyName}</td>
                      <td className="text-capitalize">{job.description}</td>
                      <td className="text-capitalize">{job.location}</td>
                      <td>
                        <button
                          className="btn py-0 btn-outline-danger"
                          onClick={() => handleDeleteJob(job._id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <h4 className="text-center text-danger mt-5">
          You have not posted anything
        </h4>
      )}
    </>
  );
}
