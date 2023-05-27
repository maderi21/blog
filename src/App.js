import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import TopBar from "./components/topbar/TopBar";
import Single from "./pages/home/single/Single";
import Write from "./pages/home/write/Write";
import Setting from "./pages/settings/Setting";
import Login from "./pages/login/Login";
import Register from "./pages/regitester/Register";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";

function App() {
  const user = false;
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
        <Row className="px-4 my-5">
          <Col sm={7}>
            <Image src="https://picsum.photos/700/300" fluid rounded />
          </Col>
          <Col sm={5}>
            <h1 className="font-weigh-light">Tagline</h1>
            <p className="mt-4">
              As network-as-a-service gains traction, enterprisesmust consider
              their deployment models. See how SD-WAN, SASE, SDN and policy
              management play a role in NaaS deployment. Watch Videos. See
              Guides. Meet Our Editors.
            </p>
            <Button variant="outline-primary">Click me Now</Button>
          </Col>
        </Row>
        <Row>
          <Card className="text-center bg-secondary text-white my-5 py-4">
            <Card.Body>
              See how SD-WAN, SASE, SDN and policy management play a role in
              NaaS deployment. Watch Videos. See Guides. Meet Our Editors.
            </Card.Body>
          </Card>
        </Row>
        <Row>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="https://picsum.photos/200/300" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
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
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
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
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
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

      {/* react no bootstrap   */}
      <Row></Row>
      <Router>
        <TopBar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route
            path="/register"
            element={user ? <Home /> : <Register />}
          ></Route>
          <Route path="/single" element={<Single />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/setting" element={<Setting />}></Route>
          <Route path="/write" element={<Write />}></Route>
        </Routes>
      </Router>
      <p>test</p>
    </div>
  );
}

export default App;
