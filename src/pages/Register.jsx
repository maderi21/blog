import { Container } from "react-bootstrap";

const Register = () => {
  return (
    <Container>
      <div className="d-flex justify-content-center ">
        <div className="container mb-5">
          <div className="row">
            <div className="text-center py-4 my-4">
              <h1 className="bg-danger">Register</h1>
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
                    Create Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Repeat Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-primary">
                    Register
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

export default Register;
