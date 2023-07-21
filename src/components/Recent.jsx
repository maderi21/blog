import { Row, Col, Card, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import blog2 from "../images/blog2.jpg";
import blog1 from "../images/blog1.jpg";

const Recent = () => {
  return (
    <Container>
      <Row className="bg-danger">
        <Col sm={7} className="px-5">
          <p className="text-primary fw-bold">Recent blog posts</p>
          <Card className="border-0">
            <Card.Img variant="top" src={blog1} />
            <Card.Body className="bg-danger">
              <Card.Text className="">Marek Kostolansky/20 Jan 2024</Card.Text>
              <Card.Title className="text-primary fw-bold">
                Education is not solely about academics
              </Card.Title>
              <Card.Text>
                It also plays a crucial role in shaping children's character and
                values. In educational settings, children learn to interact with
                peers, collaborate, empathize, and resolve conflicts.
              </Card.Text>
              <Card.Link className="text-decoration-none">Read more</Card.Link>
              <FontAwesomeIcon className="px-2" icon={faArrowRight} />
            </Card.Body>
          </Card>
        </Col>
        <Col sm={5} className="mt-5">
          <div className="card bg-danger border-0 mb-5">
            <div className="row g-0">
              <div className="col-md-4">
                <img src={blog2} className="img-fluid" alt="blog1" />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <small className="card-title text-muted">
                    Marek Kostolansky/20 Jan 2024
                  </small>
                  <p className="card-text text-primary fw-bold">
                    Education is not solely about academics
                  </p>
                  <Card.Link className="text-decoration-none">
                    Read more
                  </Card.Link>
                  <FontAwesomeIcon className="px-2" icon={faArrowRight} />
                </div>
              </div>
            </div>
          </div>
          <div className="card bg-danger border-0 mb-5">
            <div className="row g-0">
              <div className="col-md-4">
                <img src={blog2} className="img-fluid" alt="blog1" />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <small className="card-title text-muted">
                    Marek Kostolansky/20 Jan 2024
                  </small>
                  <p className="card-text text-primary fw-bold">
                    Education is not solely about academics
                  </p>
                  <Card.Link className="text-decoration-none">
                    Read more
                  </Card.Link>
                  <FontAwesomeIcon className="px-2" icon={faArrowRight} />
                </div>
              </div>
            </div>
          </div>
          <div className="card bg-danger border-0 mb-5">
            <div className="row g-0">
              <div className="col-md-4">
                <img src={blog2} className="img-fluid" alt="blog1" />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <small className="card-title text-muted">
                    Marek Kostolansky/20 Jan 2024
                  </small>
                  <p className="card-text text-primary fw-bold">
                    Education is not solely about academics
                  </p>
                  <Card.Link className="text-decoration-none">
                    Read more
                  </Card.Link>
                  <FontAwesomeIcon
                    className="px-2 cursor-pointer"
                    icon={faArrowRight}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="card bg-danger border-0 mb-5">
            <div className="row g-0">
              <div className="col-md-4">
                <img src={blog2} className="img-fluid" alt="blog1" />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <small className="card-title text-muted">
                    Marek Kostolansky/20 Jan 2024
                  </small>
                  <p className="card-text text-primary fw-bold">
                    Education is not solely about academics
                  </p>
                  <Card.Link className="text-decoration-none">
                    Read more
                  </Card.Link>
                  <FontAwesomeIcon className="px-2" icon={faArrowRight} />
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Recent;
