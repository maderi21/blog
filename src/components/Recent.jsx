import { Row, Col, Card, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import one from "../images/1.jpg";
import two from "../images/2.jpg";
import three from "../images/3.jpg";
import four from "../images/4.jpg";
import five from "../images/5.jpg";
import { Link } from "react-router-dom";

const Recent = () => {
  return (
    <Container>
      <Row className="bg-danger">
        <Col sm={7} className="px-5">
          <p className="text-primary fw-bold mt-5">Recent blog posts</p>
          <Card className="border-0">
            <Card.Img src={one} className="img-fluid" />
            <Card.Body className="bg-danger">
              <Card.Text className="">Marek Kostolansky/20 Jan 2023</Card.Text>
              <Card.Title className="text-primary fw-bold">
                Fun and Engaging Learning Activities: Igniting the Spark of
                Education for Kids!
              </Card.Title>
              <Card.Text>
                It also plays a crucial role in shaping children's character and
                values. In educational settings, children learn to interact with
                peers, collaborate, empathize, and resolve conflicts.
              </Card.Text>
              <Link className="text-decoration-none" to="/post">
                Read more
              </Link>
              <FontAwesomeIcon className="px-2" icon={faArrowRight} />
            </Card.Body>
          </Card>
        </Col>
        <Col sm={5} className="mt-5">
          <div className="card bg-danger border-0 mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  variant="top"
                  src={two}
                  className="img-fluid pt-3"
                  alt="blog1"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <small className="card-title text-muted">
                    Peter Pan/23 Jan 2023
                  </small>
                  <p className="card-text text-primary fw-bold">
                    The Power of Play: How Play-based Learning Enhances
                    Education for Children
                  </p>
                  <Link className="text-decoration-none" to="/post">
                    Read more
                  </Link>
                  <FontAwesomeIcon className="px-2" icon={faArrowRight} />
                </div>
              </div>
            </div>
          </div>
          <div className="card bg-danger border-0 mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img src={three} className="img-fluid pt-3" alt="blogpost1" />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <small className="card-title text-muted">
                    John Doe/25 Jan 2023
                  </small>
                  <p className="card-text text-primary fw-bold">
                    Unlocking Creativity: Nurturing Imagination in Kids'
                    Educational Journey
                  </p>
                  <Link className="text-decoration-none" to="/post">
                    Read more
                  </Link>
                  <FontAwesomeIcon className="px-2" icon={faArrowRight} />
                </div>
              </div>
            </div>
          </div>
          <div className="card bg-danger border-0 mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img src={four} className="img-fluid pt-3" alt="blogpost1" />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <small className="card-title text-muted">
                    Peter Pan/12 Feb 2023
                  </small>
                  <p className="card-text text-primary fw-bold">
                    Building a Strong Foundation: The Importance of Early
                    Childhood Education
                  </p>
                  <Link className="text-decoration-none" to="/post">
                    Read more
                  </Link>
                  <FontAwesomeIcon
                    className="px-2 cursor-pointer"
                    icon={faArrowRight}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="card bg-danger border-0 mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img src={five} className="img-fluid pt-3" alt="blogpost1" />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <small className="card-title text-muted">
                    Marek Kostolansky/01 Mar 2023
                  </small>
                  <p className="card-text text-primary fw-bold">
                    From Screen Time to Green Time: Balancing Technology and
                    Nature in Kids' Learning
                  </p>
                  <Link className="text-decoration-none" to="/post">
                    Read more
                  </Link>
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
