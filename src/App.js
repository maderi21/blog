import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Text from "./components/Text";
import Recent from "./components/Recent";
import Signin from "./components/Signin";
import Footer from "./components/Footer";
import Blog from "./pages/Blog";
import SinglePost from "./pages/SinglePost";

function App() {
  return (
    <>
      <div className="bg-secondary">
        <Navbar />
        <Header />
        <Text />
        <Recent />
        <Signin />
        <Footer />

        <SinglePost />
      </div>
    </>
  );
}

export default App;
