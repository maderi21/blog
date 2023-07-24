import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Blog from "./pages/Blog";
import Write from "./pages/Write";
import About from "./pages/About";
import Settings from "./pages/Settings";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Join from "./components/buttons/Join";
import SinglePost from "./pages/SinglePost";

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
          <Route path="/post" element={<SinglePost />} />
        </Routes>
        <Join />
      </div>
    </>
  );
}

export default App;
