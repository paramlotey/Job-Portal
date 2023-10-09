import { Outlet } from "react-router-dom";
import Nav from "./components/nav";
const App = () => {
  return (
    <>
      <Nav />
      <Outlet></Outlet>
    </>
  );
};

export default App;
