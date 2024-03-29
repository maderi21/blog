import React from "react";
import { Container, Col, Row, Button, Image } from "react-bootstrap";
import styles from "../styles.css";
import headerimg from "../images/headerimg.png";

const Header = () => {
  return (
    <Container>
      <Row className="bg-danger pt-5 pt-5" style={styles}>
        <Col sm={6} className="align-self-center p-5">
          <p className="fw-bold text-primary display-3 p-5">
            Dive Into The Success of Kid Learning
          </p>
          <p className="mt-1 fw-light mx-5">
            As network-as-a-service gains traction, enterprisesmust consider
            their deployment models. See how SD-WAN, SASE, SDN and policy
            management play a role in NaaS deployment. Watch Videos. See Guides.
            Meet Our Editors.
          </p>

          <button
            type="button"
            className="btn btn-outline-none px-5 mx-5 text-white bg-info"
            data-bs-toggle="modal"
            data-bs-target="#signupModal"
          >
            Join Us
          </button>
        </Col>
        <Col sm={6}>
          <Image src={headerimg} className="container pt-5" />
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
