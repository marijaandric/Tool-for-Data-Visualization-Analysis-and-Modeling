import "./Navbar.css";
import useAppInfo from "../../../globalInfo/AppInfo.tsx";

const Navbar = () => {
  return (
    <div className="navbar-content">
      <h1>Home</h1>
      <div>
        <p>Notifications</p>
        <p>Name Lastname</p>
      </div>
    </div>
  );
};

export default Navbar;
