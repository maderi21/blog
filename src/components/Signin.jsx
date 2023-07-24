import { Col, Row, Container } from "react-bootstrap";
import break1 from "../images/break1.png";

const Signin = () => {
  return (
    <Container className="text-center">
      <Row>
        <Col className="px-0">
          <img src={break1} className="img-fluid" />
        </Col>
      </Row>
      <Row className="py-5 ">
        <Col>
          <h3 className="mx-5 mt-3">Sign up to our NewsLetter</h3>
          <p className="mx-5">
            Stay up tp date with the latest news, annoucements, and articles
          </p>
          <button
            type="button"
            className="btn btn-outline-none px-3 text-white bg-info mx-5"
            data-bs-toggle="modal"
            data-bs-target="#signupModal"
          >
            Join Us
          </button>
        </Col>
      </Row>
    </Container>
  );
};

export default Signin;
