import { Link } from "react-router-dom";
import login from "../images/login.jpg";

const Navbar = () => {
  const user = true;
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-primary fixed-top">
        <div className="container">
          <Link
            className="navbar-brand text-white container-fluid"
            exact
            to="/"
          >
            kiddos
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link text-white" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/write">
                  Write
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/blog">
                  Blog
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item">
                {user ? (
                  <img
                    className="rounded-circle mx-3"
                    src={login}
                    alt="login"
                    width="50"
                    height="50"
                  />
                ) : (
                  <>
                    <Link
                      className="nav-item text-white mx-2"
                      to="/login"
                      style={{ textDecoration: "none" }}
                    >
                      Login
                    </Link>

                    <Link
                      className="nav-item text-white"
                      to="/register"
                      style={{ textDecoration: "none" }}
                    >
                      Register
                    </Link>
                  </>
                )}
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className=" btn btn-none text-white mx-1">
                {user && "Logout"}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
