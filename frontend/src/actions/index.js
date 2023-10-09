import axios from "axios";
axios.defaults.withCredentials = true;
export const INIT_USER = "INIT_USER";
export const UPLOAD_JOB = "UPLOAD_JOB";
export const SEARCH_JOB = "SEARCH_JOB";
export const JOB_RESULT = "JOB_RESULT";
export const APPLY_JOB = "APPLY_JOB";

export const signupAC = (user, navigate) => {
  return async function (dispatch) {
    try {
      const res = await axios.post("http://localhost:8080/signup", { user });
      if (res.data.status) {
        dispatch({ type: INIT_USER, payload: res.data.user });
        navigate("/");
        console.log(res.data.status);
        console.log(res.data.user);
      }
    } catch (error) {
      console.log(error);
      alert("something went wrong");
    }
  };
};

export const loginAC = (user, navigate) => {
  return async function (dispatch) {
    try {
      const res = await axios.post("http://localhost:8080/login", { user });
      if (res.data.status) {
        dispatch({ type: INIT_USER, payload: res.data.user });
        localStorage.setItem("userId", res.data.user._id);
        navigate("/");
        console.log(res.data.user);
      }
    } catch (error) {
      console.log(error);
      alert("Email or password is incorrect");
    }
  };
};

export const userAuthAC = (navigate) => {
  return async function (dispatch) {
    console.log("authentication");
    try {
      const res = await axios.get("http://localhost:8080/userauth");
      if (res.data.status) {
        dispatch({ type: INIT_USER, payload: res.data.user });
        console.log(res.data.user);
        console.log(res.status);
      } else {
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const logoutAC = () => {
  return async function (dispatch) {
    try {
      const res = await axios.post("http://localhost:8080/logout");
      if (res.data.status) {
        dispatch({ type: INIT_USER, payload: {} });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const postJobAC = (company, userId) => {
  return async function (dispatch) {
    console.log(company);
    try {
      const res = await axios.post(`http://localhost:8080/postjob/${userId}`, {
        company,
      });
      dispatch({ type: UPLOAD_JOB, payload: res.data.company });
      console.log(res.data.company);
      alert("Job Posted Successfully!");
    } catch (error) {
      console.log(error);
    }
  };
};

export const searchJobAC = (job) => {
  return function (dispatch) {
    axios
      .post("http://localhost:8080/searchjob", { job: job })
      .then((res) => {
        dispatch({ type: JOB_RESULT, payload: res.data.job });
        console.log(res.data.job);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const applyJobAC = (job) => {
  return function (dispatch) {
    dispatch({ type: APPLY_JOB, payload: job });
  };
};
