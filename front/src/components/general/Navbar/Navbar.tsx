import "./Navbar.css";
import useAppInfo from "../../../globalInfo/AppInfo.tsx";

const Navbar = () => {
  const { randomWelcomeMessage } = useAppInfo();

  return (
    <div className="navbar-content">
      <div className="flex-col">
        <h1>Home</h1>
        <p className="subtitle">{randomWelcomeMessage}</p>
      </div>
      <div>
        <p>Name Lastname</p>
      </div>
    </div>
  );
};

export default Navbar;
