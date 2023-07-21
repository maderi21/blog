import { Row, Col, Card, Container } from "react-bootstrap";
import blog1 from "../images/blog1.jpg";
import break1 from "../images/break1.png";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Blog = () => {
  return (
    <>
      <Container>
        <Row>
          <Col className="px-0">
            <img src={break1} className="img-fluid" />
          </Col>
        </Row>
        <p className="text-primary fw-bold mt-5">Blog posts</p>
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
                It also plays a crucial role in shaping children's character and
                values. In educational settings, children learn to interact with
                peers, collaborate, empathize, and resolve conflicts.
              </Card.Text>
              <Card.Link className="text-decoration-none">Read more</Card.Link>
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
                It also plays a crucial role in shaping children's character and
                values. In educational settings, children learn to interact with
                peers, collaborate, empathize, and resolve conflicts.
              </Card.Text>
              <Card.Link className="text-decoration-none">Read more</Card.Link>
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
                It also plays a crucial role in shaping children's character and
                values. In educational settings, children learn to interact with
                peers, collaborate, empathize, and resolve conflicts.
              </Card.Text>
              <Card.Link className="text-decoration-none">Read more</Card.Link>
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
                It also plays a crucial role in shaping children's character and
                values. In educational settings, children learn to interact with
                peers, collaborate, empathize, and resolve conflicts.
              </Card.Text>
              <Card.Link className="text-decoration-none">Read more</Card.Link>
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
                It also plays a crucial role in shaping children's character and
                values. In educational settings, children learn to interact with
                peers, collaborate, empathize, and resolve conflicts.
              </Card.Text>
              <Card.Link className="text-decoration-none">Read more</Card.Link>
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
                It also plays a crucial role in shaping children's character and
                values. In educational settings, children learn to interact with
                peers, collaborate, empathize, and resolve conflicts.
              </Card.Text>
              <Card.Link className="text-decoration-none">Read more</Card.Link>
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
                It also plays a crucial role in shaping children's character and
                values. In educational settings, children learn to interact with
                peers, collaborate, empathize, and resolve conflicts.
              </Card.Text>
              <Card.Link className="text-decoration-none">Read more</Card.Link>
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
                It also plays a crucial role in shaping children's character and
                values. In educational settings, children learn to interact with
                peers, collaborate, empathize, and resolve conflicts.
              </Card.Text>
              <Card.Link className="text-decoration-none">Read more</Card.Link>
              <FontAwesomeIcon className="px-2" icon={faArrowRight} />
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </>
  );
};

export default Blog;
