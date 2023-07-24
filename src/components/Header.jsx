import React from "react";
import { Container, Col, Row, Button, Image } from "react-bootstrap";
import styles from "../styles.css";
import headerimg from "../images/headerimg.png";
import break1 from "../images/break1.png";

const Header = () => {
  return (
    <Container>
      <Row className="bg-danger pt-5 pt-5" style={styles}>
        <Col sm={6} className="align-self-center p-5">
          <p className="fw-bold text-primary display-3 p-4">
            Dive Into The Success of Kid Learning
          </p>
          <p className="mt-1 fw-light">
            As network-as-a-service gains traction, enterprisesmust consider
            their deployment models. See how SD-WAN, SASE, SDN and policy
            management play a role in NaaS deployment. Watch Videos. See Guides.
            Meet Our Editors.
          </p>

          <button
            type="button"
            className="btn btn-outline-none px-3 text-white bg-info"
            data-bs-toggle="modal"
            data-bs-target="#signupModal"
          >
            Join Us
          </button>
        </Col>
        <Col sm={6}>
          <Image src={headerimg} className="container p-5" />
        </Col>
      </Row>
      <Row>
        <Col className="p-0 m-0">
          <img src={break1} className="img-fluid" />
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
