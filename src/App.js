import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Text from "./components/Text";
import Recent from "./components/Recent";
import Signin from "./components/Signin";
import Footer from "./components/Footer";
import Settings from "./pages/Settings";

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
        <Settings />
      </div>
    </>
  );
}

export default App;
