import { Container } from "react-bootstrap";
import Footer from "../components/Footer";
import log from "../images/log.jpg";

const Login = () => {
  return (
    <>
      <Container className="mt-5 pt-5">
        <img src={log} className="img-fluid post" />
        <div className="d-flex justify-content-center ">
          <div className="container mb-5">
            <div className="row">
              <div className="text-center my-4 ">
                <h1>Login</h1>
              </div>
            </div>
            <div className="row d-flex justify-content-center">
              <div className="col-md-6">
                <form className="pb-5">
                  <div className="mb-3"></div>
                  <div className="mb-3">
                    <label for="exampleForm" className="form-label">
                      Username
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleForm"
                    />
                  </div>
                  <p className="mt-3">Or</p>
                  <div className="mb-3">
                    <label
                      for="exampleFormControlInput1"
                      className="form-label"
                    >
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleFormControlInput1"
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleInputPassword1"
                      className="form-label"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"
                    />
                  </div>
                  <div className="text-center">
                    <button type="submit" className="btn btn-info">
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Login;
