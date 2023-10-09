import { APPLY_JOB, INIT_USER, JOB_RESULT, UPLOAD_JOB } from "../actions";

const initialStateJob = {
  companies: [],
  searchedJob: [],
};

const initialStateUser = {
  name: "",
  email: "",
  appliedJobs: [],
};

const initialStateApplication = {
  job: [],
};

const jobReducer = (state = initialStateJob, action) => {
  switch (action.type) {
    case UPLOAD_JOB:
      return { ...state, companies: action.payload };
    case JOB_RESULT:
      return { ...state, searchedJob: action.payload };
    default:
      return state;
  }
};

const userReducer = (state = initialStateUser, action) => {
  switch (action.type) {
    case INIT_USER:
      return action.payload;
    default:
      return state;
  }
};

const applicationReducer = (state = initialStateApplication, action) => {
  switch (action.type) {
    case APPLY_JOB:
      return { ...state, job: action.payload };
    default:
      return state;
  }
};

export { jobReducer, userReducer, applicationReducer };
