import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
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
import blog3 from "./images/blog3.jpg";
import blog4 from "./images/blog4.jpg";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <div className="bg-secondary">
        <Navbar className="bg-primary container">
          <Container>
            <Navbar.Brand href="#home" className="text-white py-0">
              <p className="fs-3 px-5 fw-bold">kiddos</p>
            </Navbar.Brand>
            <Nav className="mx-auto">
              <Nav.Link href="#home" className="text-white">
                Write
              </Nav.Link>
              <Nav.Link href="#write" className="text-white">
                Contact
              </Nav.Link>
              <Nav.Link href="#contact" className="text-white">
                About
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        {/* header */}
        <Container>
          <Row className="headerimg px-5 py-5" style={styles}>
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
              <Button variant="btn btn-danger ">Join With Us</Button>
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
          <Row>
            <Col sm={6} className="align-items-center">
              <h1>
                Education plays a vital role in shaping the future of our
                children and society as a whole.{" "}
              </h1>
            </Col>
            <Col
              sm={6}
              className="d-flex justify-content-center align-items-center"
            >
              <p>
                Fostering Social and Emotional Development: Education is not
                solely about academics; it also plays a crucial role in shaping
                children's character and values
              </p>
              <Col sm={3}>
                <div className="d-flex justify-content-space-between px-5 mx-5">
                  <FontAwesomeIcon
                    className="text-primary"
                    icon={faSquareCheck}
                  />
                  <p>Building Fundation</p>
                  <FontAwesomeIcon
                    className="text-primary"
                    icon={faSquareCheck}
                  />
                  <p>Promoting Health</p>
                </div>
              </Col>
              <Col sm={3}>
                <div className="d-flex justify-content-space-between px-5 mx-5">
                  <FontAwesomeIcon
                    className="text-primary"
                    icon={faSquareCheck}
                  />
                  <p>Nurturing thinking</p>
                  <FontAwesomeIcon
                    className="text-primary"
                    icon={faSquareCheck}
                  />
                  <p>Changing world</p>
                </div>
              </Col>
            </Col>
          </Row>
          <Row>
            <Col className="px-0">
              <img src={break2} className="img-fluid" />
            </Col>
          </Row>

          {/* Recent block posts */}
          <Row className="bg-danger">
            <Col sm={8}>
              <p>Recent blog posts</p>
              <Card>
                <Card.Img variant="top" src={blog1} />
                <Card.Body>
                  <Card.Text>Marek Kostolansky/20 Jan 2024</Card.Text>
                  <Card.Title className="text-primary">
                    Education is not solely about academics
                  </Card.Title>
                  <Card.Text>
                    It also plays a crucial role in shaping children's character
                    and values. In educational settings, children learn to
                    interact with peers, collaborate, empathize, and resolve
                    conflicts.
                  </Card.Text>
                  <Card.Link>Read more</Card.Link>
                  <FontAwesomeIcon icon={faArrowRight} />
                </Card.Body>
              </Card>
            </Col>
            <Col sm={4}>
              <Card style={{ width: "10rem" }}>
                <Card.Img variant="top" src={blog2} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "10rem" }}>
                <Card.Img variant="top" src={blog3} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
              <Card style={{ width: "10rem" }}>
                <Card.Img variant="top" src={blog4} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* blog posts */}
          <Row>
            <Col className="px-0">
              <img src={break1} className="img-fluid" />
            </Col>
          </Row>
          <Row className="d-flex align-items-center justify-content-center">
            <Card style={{ width: "18rem" }} className="d-flex">
              <Card.Img variant="top" src={blog3} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={blog3} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={blog3} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={blog3} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={blog3} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={blog3} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={blog3} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={blog3} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Row>

          {/* NewsLetter */}
          <Row>
            <Col className="px-0">
              <img src={break2} className="img-fluid" />
            </Col>
          </Row>
          <Row className="bg-danger">
            <Col sm={6}>
              <h3>Sign up to our NewsLetter</h3>
              <p>
                Stay up tp date with the latest news, annoucements, and articles
              </p>
            </Col>
            <Col sm={6}>
              <Form></Form>
            </Col>
          </Row>
        </Container>

        {/* Footer */}
        <footer class="bg-primary container">
          <Container className="text-white">
            <h1>kiddos</h1>
          </Container>
        </footer>
      </div>
    </>
  );
}

export default App;
