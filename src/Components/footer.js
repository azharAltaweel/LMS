import { Container, Row, Col } from "react-bootstrap";
import logo3 from "../Assets/Images/edusion-white.png";

function Footer() {
  return (
    <footer  className="footer" style={{ backgroundColor: "#1a2d62", color: "white", padding: "80px 0" }}>
      <Container fluid >
        <Row>
          <Col  lg={3} md={12} sm={6} className="mb-4">
            <div style={{ display: "flex", alignItems: "center", marginBottom: "30px", flexWrap:"wrap" }}>
              <img src={logo3} alt="Logo"  max-width="100%" height="auto" style={{ marginRight: "10px" }} />
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Fusce vitae risus nec dui venenatis dignissim.
            </p>
            <div className="footer-social" >
                <span>CONNECT WITH:</span>
                <a href="#"><i className="bi bi-instagram me-2"></i></a>
                <a href="#"><i className="bi bi-facebook me-2"></i></a>
                <a href="#"><i className="bi bi-youtube me-2"></i></a>
                <a href="#"><i className="bi bi-pinterest"></i></a>
            </div>
          </Col>

          <Col  lg={3} md={4} sm={6} className="mb-4">
            <h5>Courses</h5>
            <ul style={{ listStyle: "none", padding: 0, marginTop: "25px", fontSize:"16px"}}>
              <a href=""><li>Creative Writing</li></a>
              <a href=""><li>Digital Marketing</li></a>
              <a href=""><li>SEO Business</li></a>
              <a href=""><li>Social Marketing</li></a>
              <a href=""><li>Graphic Design</li></a>
              <a href=""><li>Website Development</li></a>
            </ul>
          </Col>

          <Col  lg={3} md={4} sm={6} className="mb-4">
            <h5>Company</h5>
            <ul style={{ listStyle: "none", padding: 0, marginTop: "15px" }}>
              <a href=""><li>About Us</li></a>
              <a href=""><li>Knowledge Base</li></a>
              <a href=""><li>Affiliate Program</li></a>
              <a href=""><li>Community</li></a>
              <a href=""><li>Market API</li></a>
              <a href=""><li>Support Team</li></a>
            </ul>
          </Col>

          <Col  lg={3} md={3} sm={6} className="mb-4">
            <h4>Contact Info</h4>
            <p><i className="bi bi-telephone-fill me-2"></i> <strong>Phone Number:</strong><br/> +88 457 845 695</p>
            <p><i className="bi bi-envelope-fill me-2"></i> <strong>Email Address:</strong><br/> example@yourmail.com</p>
            <p><i className="bi bi-geo-alt-fill me-2"></i> <strong>Location:</strong><br/> California, USA</p>
          </Col>
        </Row>

        <hr style={{ borderColor: "rgba(255,255,255,0.2)" }} />

        <Row className="pt-3">
          <Col md={6} className="text-center text-md-start">
            © 2025 Edusion. All Rights Reserved
          </Col>
          <Col md={6} className="text-center text-md-end">
            <a href="#" style={{ color: "white", textDecoration: "none", marginRight: "15px" }}>Terms & Conditions</a>
            <a href="#" style={{ color: "white", textDecoration: "none", marginRight: "15px" }}>Special</a>
            <a href="#" style={{ color: "white", textDecoration: "none" }}>Privacy Policy</a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
