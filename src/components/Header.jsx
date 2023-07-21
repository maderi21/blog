import React from "react";
import { Container, Col, Row, Button, Image } from "react-bootstrap";
import styles from "../styles.css";
import headerimg from "../images/headerimg.png";
import break1 from "../images/break1.png";

const Header = () => {
  return (
    <Container>
      <img src="./images/headerback.png" alt="Image" />
      <Row className="headerimg px-5 py-5 mt-5" style={styles}>
        <Col sm={6} className="align-self-center">
          <p className="fw-bold text-primary display-3">
            Dive Into The Success of Kid Learning
          </p>
          <p className="mt-1 fw-light">
            As network-as-a-service gains traction, enterprisesmust consider
            their deployment models. See how SD-WAN, SASE, SDN and policy
            management play a role in NaaS deployment. Watch Videos. See Guides.
            Meet Our Editors.
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
    </Container>
  );
};

export default Header;
