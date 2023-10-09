import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import LoginPage from "./pages/login-signupPage";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { applicationReducer, jobReducer, userReducer } from "./reducer";
import JobSearchPage from "./pages/jobearchPage";
import JobListPage from "./pages/jobListPage";
import ApplyJobPage from "./pages/applyJobPage";
import MyPosting from "./components/myPosting";

const store = configureStore({
  reducer: {
    jobPost: jobReducer,
    user: userReducer,
    application: applicationReducer,
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route index element={<Home />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="searchjob" element={<JobSearchPage />} />
          <Route path="browsejob" element={<JobListPage />} />
          <Route path="applyjob" element={<ApplyJobPage />} />
          <Route path="postings" element={<MyPosting />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
