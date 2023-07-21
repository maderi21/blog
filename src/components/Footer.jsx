const Footer = () => {
  return (
    <footer className="bg-primary pt-5">
      <div className="container text-center text-md-left">
        <div className="row text-center text-md-left">
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 fw-bold text-white">kiddos</h5>
            <hr className="mb-4" />
            <p className="text-white fw-bold">
              the best blog for kids education
            </p>
          </div>
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 fw-bold text-white">contact</h5>
            <hr className="mb-4" />
            <p>Adamiho 24 Bratislava</p>
            <p>maderi@gmail.com</p>
            <p>+421917425220</p>
          </div>
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 fw-bold text-white">legal</h5>
            <hr className="mb-4" />
            <p className="text-white">
              <a href="#" className="text-white text-decoration-none">
                Terms & Conditions
              </a>
            </p>
            <p className="text-white">
              <a href="#" className="text-white text-decoration-none">
                Cookies
              </a>
            </p>
            <p className="text-white">
              <a href="#" className="text-white text-decoration-none">
                Privacy
              </a>
            </p>
          </div>
          <hr className="mb-4" />
          <div className="row d-flex justify-content-center text-muted">
            <div>
              <p>Copyright ©2023, All rights reserved by Maderi </p>
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="text-center">
            <ul className="lins-unstyled list-inline">
              <li className="list-inline-item">
                <a href="#" className="text-dark">
                  <li className="fab fa-facebook"></li>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" className="text-dark">
                  <li className="fab fa-twitter"></li>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" className="text-dark">
                  <li className="fab fa-instagram"></li>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
