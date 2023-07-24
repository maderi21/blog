import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Text from "./components/Text";
import Recent from "./components/Recent";
import Signin from "./components/Signin";
import Footer from "./components/Footer";
import Blog from "./pages/Blog";
import SinglePost from "./pages/SinglePost";
import Write from "./pages/Write";
import About from "./pages/About";
import Settings from "./pages/Settings";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  const user = true;
  return (
    <>
      <div className="bg-secondary">
        <Navbar />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/write" element={user ? <Write /> : <Register />} />
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/login" element={user ? <Home /> : <Login />} />
          <Route
            path="/settings"
            element={user ? <Settings /> : <Register />}
          />
          <Route path="/register" element={user ? <Home /> : <Register />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
