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

function App() {
  return (
    <>
      <div className="bg-secondary">
        <Navbar className="bg-primary container">
          <Container>
            <Navbar.Brand href="#home" className="text-white">
              kiddos
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">About</Nav.Link>
              <Nav.Link href="#write">Write</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
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
            <Col sm={6}>
              <h1>
                Education plays a vital role in shaping the future of our
                children and society as a whole.{" "}
              </h1>
            </Col>
            <Col sm={6}>
              <p>
                Fostering Social and Emotional Development: Education is not
                solely about academics; it also plays a crucial role in shaping
                children's character and values
              </p>
              <Col sm={1}>
                <div className="d-flex justify-content-space-between">
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
              <Col sm={1}>
                <div className="d-flex justify-content-space-between">
                  <p>Promoting Health</p>
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

          <Row>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="https://picsum.photos/200/300" />
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
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="https://picsum.photos/200/300" />
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
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="https://picsum.photos/200/300" />
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
        </Container>
        <footer class="py-5 my-5 bg-dark">
          <Container className="px-4">
            <p className="text-center text-white">
              Copyright &copy; Your website 2023
            </p>
          </Container>
        </footer>
      </div>
    </>
  );
}

export default App;
