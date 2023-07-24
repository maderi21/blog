import Footer from "../components/Footer";
import one from "../images/1.jpg";
import two from "../images/2.jpg";
import three from "../images/3.jpg";
import four from "../images/4.jpg";
import five from "../images/5.jpg";
import six from "../images/6.jpg";
import seven from "../images/7.jpg";
import eight from "../images/8.jpg";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <>
      <div className="container mt-5 pt-5">
        <div class="row row-cols-1 row-cols-md-4 row-cols-sm-2 g-4 mb-5 pb-5">
          <div class="col-md-4">
            <div class="card h-100 bg-secondary border-0 ">
              <img src={one} class="card-img-top" alt="..." />
              <div class="card-body ">
                <h5 class="card-title">
                  Fun and Engaging Learning Activities: Igniting the Spark of
                  Education for Kids!
                </h5>
                <p class="card-text">
                  Discover exciting and interactive learning activities that
                  make education a joyride for kids. From science experiments to
                  creative projects, watch their curiosity soar!
                </p>
                <div className="text-decoration-none">
                  <Link className="text-decoration-none" to="/post">
                    Read more
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card h-100 bg-secondary border-0">
              <img src={two} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">
                  The Power of Play: How Play-based Learning Enhances Education
                  for Children
                </h5>
                <p class="card-text">
                  Learn why play is more than just fun and games—it's an
                  essential component of education. Uncover how play-based
                  learning fuels children's development.
                </p>
                <div className="text-decoration-none">
                  <Link className="text-decoration-none" to="/post">
                    Read more
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card h-100 bg-secondary border-0">
              <img src={three} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">
                  Unlocking Creativity: Nurturing Imagination in Kids'
                  Educational Journey
                </h5>
                <p class="card-text">
                  Imagination knows no bounds! Delve into the world of
                  creativity and see how nurturing a child's imagination fuels
                  their learning potential and sparks endless possibilities
                </p>
                <div className="text-decoration-none d-flex">
                  <Link className="text-decoration-none" to="/post">
                    Read more
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card h-100 bg-secondary border-0">
              <img src={four} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">
                  Building a Strong Foundation: The Importance of Early
                  Childhood Education
                </h5>
                <p class="card-text">
                  The early years matter! Explore the significance of early
                  childhood education in laying the groundwork for a lifetime of
                  learning and success, to see whats possible.
                </p>
                <div className="text-decoration-none d-flex">
                  <Link className="text-decoration-none" to="/post">
                    Read more
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card h-100 bg-secondary border-0">
              <img src={five} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">
                  From Screen Time to Green Time: Balancing Technology and
                  Nature in Kids' Learning
                </h5>
                <p class="card-text">
                  From screens to green, find the perfect balance for your
                  child's education.Learn how to take them out and play wisely,
                  while educating them.
                </p>
                <div className="text-decoration-none d-flex">
                  <Link className="text-decoration-none" to="/post">
                    Read more
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card h-100 bg-secondary border-0">
              <img src={six} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">
                  {" "}
                  Empowering Young Minds: Fostering Critical Thinking in
                  Children's Education
                </h5>
                <p class="card-text">
                  Empower young minds to think critically and explore the world
                  around them. Unravel the secrets of cultivating sharp
                  intellect in kids' educational experiences
                </p>
                <div className="text-decoration-none d-flex">
                  <Link className="text-decoration-none" to="/post">
                    Read more
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card h-100 bg-secondary border-0">
              <img src={seven} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">
                  Inclusive Classrooms: Creating Supportive Learning
                  Environments for All Kids
                </h5>
                <p class="card-text">
                  Education is for all! Dive into the realm of inclusive
                  classrooms that embrace diversity and create a supportive
                  space for every child to thrive.
                </p>
                <div className="text-decoration-none d-flex">
                  <Link className="text-decoration-none" to="/post">
                    Read more
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card h-100 bg-secondary border-0">
              <img src={eight} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">
                  The Art of Encouragement: Boosting Confidence and Motivation
                  in Kids' Education
                </h5>
                <p class="card-text">
                  Believe, achieve, succeed! Learn how encouragement and
                  motivation play a pivotal role in shaping confident learners
                  who fearlessly pursue knowledge.
                </p>
                <div className="text-decoration-none d-flex">
                  <Link className="text-decoration-none" to="/post">
                    Read more
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blog;
