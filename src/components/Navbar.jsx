import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import login from "../images/login.jpg";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-primary fixed-top">
        <div className="container">
          <a className="navbar-brand text-white container-fluid" href="#">
            kiddos
          </a>
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
                <a className="nav-link text-white" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  Write
                </a>
              </li>
            </ul>
            <div>
              <img
                className="rounded-circle mx-3"
                src={login}
                alt="login"
                width="50"
                height="50"
              />
            </div>
            <span className="text-white mx-3">Logout</span>
            <FontAwesomeIcon className="text-white" icon={faRightFromBracket} />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
