import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import login from "../images/login.jpg";

const Settings = () => {
  return (
    <Container>
      <div className="d-flex justify-content-center ">
        <div className="container mb-5">
          <div className="row">
            <div className="text-center py-4 my-4">
              <h1>Personal Profile</h1>
            </div>
          </div>
          <div className="row d-flex justify-content-center">
            <div className="col-md-6">
              <form className="pb-5">
                <div className="mb-3">
                  <img
                    className="rounded-circle mx-3"
                    src={login}
                    alt="login"
                    width="50"
                    height="50"
                  />
                  <label htmlFor="fileInput" className="form-label">
                    <FontAwesomeIcon
                      className="text-primary mx-3"
                      icon={faUser}
                    />
                    Upload Image
                  </label>
                  <input
                    type="file"
                    id="fileInput"
                    style={{ display: "none" }}
                  />
                </div>
                <div className="mb-3">
                  <label for="exampleForm" className="form-label">
                    Username
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleForm"
                    placeholder="Joe Doe"
                  />
                </div>
                <div className="mb-3">
                  <label for="exampleFormControlInput1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-outline-dark">
                    Update
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Settings;
