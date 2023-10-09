import Footer from "../components/footer";
import Login from "../components/login-signup";
import Nav from "../components/nav";
import { useDispatch } from "react-redux";
import { loginAC, signupAC } from "../actions";
import { useNavigate } from "react-router";

function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userSignup = (user) => {
    dispatch(signupAC(user, navigate));
  };

  const userLogin = (user) => {
    dispatch(loginAC(user, navigate));
  };

  return (
    <>
      <Nav></Nav>
      <Login userSignup={userSignup} userLogin={userLogin}></Login>
      <Footer></Footer>
    </>
  );
}

export default LoginPage;
