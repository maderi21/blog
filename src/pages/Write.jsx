import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import write from "../images/write.jpg";
import Footer from "../components/Footer";

const Write = () => {
  return (
    <div>
      <Container>
        <div className="d-flex justify-content-center mt-5 p-5">
          <div className="container mb-5">
            <div className="row ">
              <div className="text-center py-4 my-4 ">
                <img src={write} className="img-fluid p-3" />
                <h1>Share Your Experience!</h1>
              </div>
            </div>
            <div className="row d-flex justify-content-center">
              <div className="col-md-6">
                <form className="pb-5">
                  <div className="mb-3">
                    <label htmlFor="fileInput" className="form-label">
                      <FontAwesomeIcon
                        className="text-primary mx-3"
                        icon={faSquarePlus}
                      />
                      Upload Image
                    </label>
                    <input
                      type="file"
                      id="fileInput"
                      style={{ display: "none" }}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Title"
                    />
                  </div>
                  <div className="mb-3">
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows="5"
                      placeholder="Tell Us Yourour Story..."
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-outline-dark">
                    Publish
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default Write;
