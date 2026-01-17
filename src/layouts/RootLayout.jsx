import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";

const RootLayout = () => (
   <>
      <Navbar />
      <Outlet />
   </>
);

export default RootLayout;
