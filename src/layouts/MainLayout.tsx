import { Outlet } from "react-router";

import Footer from "../components/Footer"
import NavBar from "../components/NavBar";

const MainLayout = () => {
  return (
    <>
      <NavBar/>
      <Outlet />
      <Footer/>
    </>
  );
};

export default MainLayout;
// TDL
