import Logo2 from "../Assets/Images/edusion-black.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // For the toggle functionality

function Nav3() {
  return (
    <nav className="navbar navbar-expand-lg bg-light custom-navbar fixed-top"style={{ top: "55px" }} >
      <div className="container-fluid">
        <a className="navbar-brand" href="#home">
          <img src={Logo2} alt="Logo" height="40" />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="/home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/courses">Courses</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">Contact</a>
            </li>
          </ul>
        </div>
        
        <div className="nav-extra-container">
        <div className="icons-container ">
            <i className="bi bi-search me-3"></i>
            <i className="bi bi-cart4 me-3"></i>
          </div>

          <div className="btns-container">
            <button className="btn1 me-2">Contact</button>
            <button className="btn2">Acount</button>
          </div>
          </div>

      </div>
    </nav>
  );
}

export default Nav3;
