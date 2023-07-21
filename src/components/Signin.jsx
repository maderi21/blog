import { Col, Row, Container, Button, Form } from "react-bootstrap";
import break2 from "../images/break2.png";

const Signin = () => {
  return (
    <Container>
      <Row>
        <Col className="px-0">
          <img src={break2} className="img-fluid" />
        </Col>
      </Row>
      <Row className="bg-danger py-5">
        <Col sm={6}>
          <h3 className="mx-5 mt-3">Sign up to our NewsLetter</h3>
          <p className="mx-5">
            Stay up tp date with the latest news, annoucements, and articles
          </p>
        </Col>
        <Col sm={6}>
          <Form className="fs-5">
            <div className="d-flex col-xs-4 justify-content-center p-4">
              <Form.Group className="mx-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>
              <Button variant="btn btn-info rounded-pill text-white col-xs-">
                Join With Us
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Signin;
