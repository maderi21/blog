import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Row, Col, Container } from "react-bootstrap";
import break2 from "../images/break2.png";

const Text = () => {
  return (
    <>
      <Container className="pt-0 mt-0">
        <Row className="py-5">
          <Col sm={6}>
            <h1 className="mt-4 mx-5 text-primary fs-2 fw-bold">
              Education plays a vital role in shaping the future of our children
              and society as a whole.
            </h1>
          </Col>
          <Col sm={6} className="px-3">
            <p className="mt-3 mx-5 mb-3">
              Fostering Social and Emotional Development: Education is not
              solely about academics; it also plays a crucial role in shaping
              children's character and values
            </p>
            <Row>
              <div className="text-center">
                <div className="col px-5 d-flex text-center">
                  <FontAwesomeIcon
                    className="text-primary"
                    icon={faSquareCheck}
                  />
                  <p className="px-2 mx-1">Building Fundation</p>
                  <FontAwesomeIcon
                    className="text-primary"
                    icon={faSquareCheck}
                  />
                  <p className="px-2 mx-1">Promoting Health</p>
                </div>
                <div className="col px-5 d-flex text-center">
                  <FontAwesomeIcon
                    className="text-primary"
                    icon={faSquareCheck}
                  />
                  <p className="px-2 mx-1">Nurturing thinking</p>
                  <FontAwesomeIcon
                    className="text-primary px-1"
                    icon={faSquareCheck}
                  />
                  <p className="px-2 mx-1">Changing world</p>
                </div>
              </div>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col className="px-0">
            <img src={break2} className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Text;
