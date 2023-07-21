import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import styles from "./styles.css";
import headerimg from "./images/headerimg.png";
import break1 from "./images/break1.png";
import break2 from "./images/break2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";
import blog1 from "./images/blog1.jpg";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import blog2 from "./images/blog2.jpg";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="bg-secondary">
        {/* header */}
        <Container>
          <Row className="headerimg px-5 py-5 mt-5" style={styles}>
            <Col sm={6} className="align-self-center">
              <p className="fw-bold text-primary display-3">
                Dive Into The Success of Kid Learning
              </p>
              <p className="mt-1 fw-light">
                As network-as-a-service gains traction, enterprisesmust consider
                their deployment models. See how SD-WAN, SASE, SDN and policy
                management play a role in NaaS deployment. Watch Videos. See
                Guides. Meet Our Editors.
              </p>
              <Button variant="btn btn-info rounded-pill text-white px-3 ">
                Join With Us
              </Button>
            </Col>
            <Col sm={6}>
              <Image src={headerimg} className="container" />
            </Col>
          </Row>
          <Row>
            <Col className="px-0">
              <img src={break1} className="img-fluid" />
            </Col>
          </Row>

          {/* text field */}
          <Row className="py-5">
            <Col sm={6}>
              <h1 className="mt-4 mx-5 text-primary fs-2 fw-bold">
                Education plays a vital role in shaping the future of our
                children and society as a whole.
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

          {/* Recent block posts */}
          <Row className="bg-danger">
            <Col sm={7} className="px-5">
              <p className="text-primary fw-bold">Recent blog posts</p>
              <Card className="border-0">
                <Card.Img variant="top" src={blog1} />
                <Card.Body className="bg-danger">
                  <Card.Text className="">
                    Marek Kostolansky/20 Jan 2024
                  </Card.Text>
                  <Card.Title className="text-primary fw-bold">
                    Education is not solely about academics
                  </Card.Title>
                  <Card.Text>
                    It also plays a crucial role in shaping children's character
                    and values. In educational settings, children learn to
                    interact with peers, collaborate, empathize, and resolve
                    conflicts.
                  </Card.Text>
                  <Card.Link className="text-decoration-none">
                    Read more
                  </Card.Link>
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

          {/* blog posts */}
          <Row>
            <Col className="px-0">
              <img src={break1} className="img-fluid" />
            </Col>
          </Row>
          <p className="text-primary fw-bold">Blog posts</p>
          <Row
            md={4}
            className="d-flex align-items-center justify-content-center"
          >
            <Card className="border-0 bg-secondary ">
              <Card.Img variant="top" src={blog1} />
              <Card.Body>
                <Card.Text>Marek Kostolansky/20 Jan 2024</Card.Text>
                <Card.Title className="text-primary fw-bold">
                  Education is not solely about academics
                </Card.Title>
                <Card.Text>
                  It also plays a crucial role in shaping children's character
                  and values. In educational settings, children learn to
                  interact with peers, collaborate, empathize, and resolve
                  conflicts.
                </Card.Text>
                <Card.Link className="text-decoration-none">
                  Read more
                </Card.Link>
                <FontAwesomeIcon className="px-2" icon={faArrowRight} />
              </Card.Body>
            </Card>
            <Card className="border-0 bg-secondary ">
              <Card.Img variant="top" src={blog1} />
              <Card.Body>
                <Card.Text>Marek Kostolansky/20 Jan 2024</Card.Text>
                <Card.Title className="text-primary fw-bold">
                  Education is not solely about academics
                </Card.Title>
                <Card.Text>
                  It also plays a crucial role in shaping children's character
                  and values. In educational settings, children learn to
                  interact with peers, collaborate, empathize, and resolve
                  conflicts.
                </Card.Text>
                <Card.Link className="text-decoration-none">
                  Read more
                </Card.Link>
                <FontAwesomeIcon className="px-2" icon={faArrowRight} />
              </Card.Body>
            </Card>
            <Card className="border-0 bg-secondary ">
              <Card.Img variant="top" src={blog1} />
              <Card.Body>
                <Card.Text>Marek Kostolansky/20 Jan 2024</Card.Text>
                <Card.Title className="text-primary fw-bold">
                  Education is not solely about academics
                </Card.Title>
                <Card.Text>
                  It also plays a crucial role in shaping children's character
                  and values. In educational settings, children learn to
                  interact with peers, collaborate, empathize, and resolve
                  conflicts.
                </Card.Text>
                <Card.Link className="text-decoration-none">
                  Read more
                </Card.Link>
                <FontAwesomeIcon className="px-2" icon={faArrowRight} />
              </Card.Body>
            </Card>
            <Card className="border-0 bg-secondary ">
              <Card.Img variant="top" src={blog1} />
              <Card.Body>
                <Card.Text>Marek Kostolansky/20 Jan 2024</Card.Text>
                <Card.Title className="text-primary fw-bold">
                  Education is not solely about academics
                </Card.Title>
                <Card.Text>
                  It also plays a crucial role in shaping children's character
                  and values. In educational settings, children learn to
                  interact with peers, collaborate, empathize, and resolve
                  conflicts.
                </Card.Text>
                <Card.Link className="text-decoration-none">
                  Read more
                </Card.Link>
                <FontAwesomeIcon className="px-2" icon={faArrowRight} />
              </Card.Body>
            </Card>
            <Card className="border-0 bg-secondary ">
              <Card.Img variant="top" src={blog1} />
              <Card.Body>
                <Card.Text>Marek Kostolansky/20 Jan 2024</Card.Text>
                <Card.Title className="text-primary fw-bold">
                  Education is not solely about academics
                </Card.Title>
                <Card.Text>
                  It also plays a crucial role in shaping children's character
                  and values. In educational settings, children learn to
                  interact with peers, collaborate, empathize, and resolve
                  conflicts.
                </Card.Text>
                <Card.Link className="text-decoration-none">
                  Read more
                </Card.Link>
                <FontAwesomeIcon className="px-2" icon={faArrowRight} />
              </Card.Body>
            </Card>
            <Card className="border-0 bg-secondary ">
              <Card.Img variant="top" src={blog1} />
              <Card.Body>
                <Card.Text>Marek Kostolansky/20 Jan 2024</Card.Text>
                <Card.Title className="text-primary fw-bold">
                  Education is not solely about academics
                </Card.Title>
                <Card.Text>
                  It also plays a crucial role in shaping children's character
                  and values. In educational settings, children learn to
                  interact with peers, collaborate, empathize, and resolve
                  conflicts.
                </Card.Text>
                <Card.Link className="text-decoration-none">
                  Read more
                </Card.Link>
                <FontAwesomeIcon className="px-2" icon={faArrowRight} />
              </Card.Body>
            </Card>
            <Card className="border-0 bg-secondary ">
              <Card.Img variant="top" src={blog1} />
              <Card.Body>
                <Card.Text>Marek Kostolansky/20 Jan 2024</Card.Text>
                <Card.Title className="text-primary fw-bold">
                  Education is not solely about academics
                </Card.Title>
                <Card.Text>
                  It also plays a crucial role in shaping children's character
                  and values. In educational settings, children learn to
                  interact with peers, collaborate, empathize, and resolve
                  conflicts.
                </Card.Text>
                <Card.Link className="text-decoration-none">
                  Read more
                </Card.Link>
                <FontAwesomeIcon className="px-2" icon={faArrowRight} />
              </Card.Body>
            </Card>
            <Card className="border-0 bg-secondary ">
              <Card.Img variant="top" src={blog1} />
              <Card.Body>
                <Card.Text>Marek Kostolansky/20 Jan 2024</Card.Text>
                <Card.Title className="text-primary fw-bold">
                  Education is not solely about academics
                </Card.Title>
                <Card.Text>
                  It also plays a crucial role in shaping children's character
                  and values. In educational settings, children learn to
                  interact with peers, collaborate, empathize, and resolve
                  conflicts.
                </Card.Text>
                <Card.Link className="text-decoration-none">
                  Read more
                </Card.Link>
                <FontAwesomeIcon className="px-2" icon={faArrowRight} />
              </Card.Body>
            </Card>
          </Row>

          {/* NewsLetter */}
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

        {/* Footer */}
        <footer class="bg-primary container pt-5">
          <div className="container text-center text-md-left">
            <div className="row text-center text-md-left">
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                <h5 className="text-uppercase mb-4 fw-bold text-white">
                  kiddos
                </h5>
                <hr className="mb-4" />
                <p className="text-white fw-bold">
                  the best blog for kids education
                </p>
              </div>
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                <h5 className="text-uppercase mb-4 fw-bold text-white">
                  contact
                </h5>
                <hr className="mb-4" />
                <p>Adamiho 24 Bratislava</p>
                <p>maderi@gmail.com</p>
                <p>+421917425220</p>
              </div>
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                <h5 className="text-uppercase mb-4 fw-bold text-white">
                  legal
                </h5>
                <hr className="mb-4" />
                <p className="text-white">
                  <a href="#" className="text-white text-decoration-none">
                    Terms & Conditions
                  </a>
                </p>
                <p className="text-white">
                  <a href="#" className="text-white text-decoration-none">
                    Cookies
                  </a>
                </p>
                <p className="text-white">
                  <a href="#" className="text-white text-decoration-none">
                    Privacy
                  </a>
                </p>
              </div>
              <hr className="mb-4" />
              <div className="row d-flex justify-content-center text-muted">
                <div>
                  <p>Copyright ©2023, All rights reserved by Maderi </p>
                </div>
              </div>
            </div>
            <div className="row d-flex justify-content-center">
              <div className="text-center">
                <ul className="lins-unstyled list-inline">
                  <li className="list-inline-item">
                    <a href="#" className="text-dark">
                      <li className="fab fa-facebook"></li>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="text-dark">
                      <li className="fab fa-twitter"></li>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="text-dark">
                      <li className="fab fa-instagram"></li>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
