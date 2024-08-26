import { Outlet } from "react-router-dom";
import Navbar from "../../components/shared/navbar";

export default function Root() {
  return (
    <>
      <Navbar />
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
