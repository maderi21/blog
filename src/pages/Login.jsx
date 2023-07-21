import { Container } from "react-bootstrap";

const Login = () => {
  return (
    <Container>
      <div className="d-flex justify-content-center ">
        <div className="container mb-5">
          <div className="row">
            <div className="text-center py-4 my-4">
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
                  <label for="exampleFormControlInput1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
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
                  <button type="submit" className="btn btn-primary">
                    Login
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

export default Login;
