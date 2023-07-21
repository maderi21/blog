import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import break1 from "./images/break1.png";
import break2 from "./images/break2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import blog1 from "./images/blog1.jpg";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import blog2 from "./images/blog2.jpg";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Text from "./components/Text";
import Recent from "./components/Recent";
import Blog from "./pages/Blog";
import Signin from "./components/Signin";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="bg-secondary">
        <Navbar />
        <Header />
        <Text />
        <Recent />
        <Blog />
        <Signin />
        <Footer />
      </div>
    </>
  );
}

export default App;
