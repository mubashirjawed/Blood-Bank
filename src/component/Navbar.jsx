import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userID");
    navigate("/login");
  };

  return (
    <div className="w-full mb-10">
      {/* Mobile Navbar */}
      <nav className="navbar navbar-dark text-lg flex items-center justify-between font-medium bg-gradient-to-r from-red-500 to-red-400 hover:to-red-500 hover:from-red-400 w-full px-3 py-2 text-white fixed top-0 sm:hidden">
        <div className="container-fluid flex justify-between items-center">
          <h1 className="text-white text-base whitespace-nowrap">
            Free Blood Bank
          </h1>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasDarkNavbar"
            aria-controls="offcanvasDarkNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end bg-gradient-to-r from-blue-500 to-purple-500 hover:to-blue-500 hover:from-purple-500"
            id="offcanvasDarkNavbar"
            aria-labelledby="offcanvasDarkNavbarLabel"
          >
            <div className="offcanvas-header text-white font-bold">
              <h1 className="text-base">React-SMIT</h1>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body font-thin text-lg space-y-4">
              <ul className="navbar-nav flex-grow-1 text-white mb-6 pe-3">
                <li className="nav-item">
                  <Link to={"/home"}>Home</Link>
                </li>
                <li className="nav-item">
                  <Link to={"/information"}>Information</Link>
                </li>
                <li className="nav-item">
                  <Link to={"/dataInfo"}>DataInfo</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      {/* Desktop Navbar */}
      <div className="hidden sm:flex w-full text-lg items-center justify-between font-medium bg-gradient-to-r from-red-700 to-red-500 hover:to-red-700 hover:from-red-500 px-6 py-3 text-white">
        <h1 className="text-2xl text-white font-serif whitespace-nowrap">
          Free Blood Bank
        </h1>
        <div className="font-thin text-lg space-x-4">
          <Link to={"/home"} className="whitespace-nowrap">
            Home
          </Link>
          <Link to={"/information"} className="whitespace-nowrap">
            Information
          </Link>
          <Link to={"/dataInfo"} className="whitespace-nowrap">
            DataInfo
          </Link>
          <Link to={"/doctor"} className="whitespace-nowrap">
            Doctor
          </Link>
        </div>
        <button
          className="py-1 px-2 bg-white text-red-700 rounded"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Navbar;
