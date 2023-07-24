import Header from "../components/Header";
import Text from "../components/Text";
import Recent from "../components/Recent";
import Signin from "../components/Signin";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="container">
      <Header />
      <Text />
      <Recent />
      <Signin />
      <Footer />
    </div>
  );
};

export default Home;
