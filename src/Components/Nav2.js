import { Navbar, Container } from "react-bootstrap";

function Nav2(){
return(
<Navbar expand="lg" style={{ backgroundColor: "#20c997", fontWeight: "bold" }}>
      <Container  className="navContainer"  >
        <div className="navContact">
            <i className="bi bi-telephone-fill" ></i>
            <span>+(354) 6800 37849</span>
        </div>
        <div className="navContact">
            <i class="bi bi-envelope-fill"></i>
            <a href="mailto:hello@edusion.com" style={{textDecoration:"none", color:"white"}}>hello@edusion.com</a>
        </div>
        <div className="navContact">
            <i class="bi bi-clock"></i>
            <span>Mon to sat Open: 9am - 6pm</span>
        </div>
        <div className="socialIconsContainer">
            <a href="#" className="socialIcon"><i class="bi bi-twitter"></i></a>
            <a href="#" className="socialIcon"><i class="bi bi-facebook"></i></a>
            <a href="#" className="socialIcon"><i class="bi bi-youtube"></i></a>
            <a href="#" className="socialIcon"><i class="bi bi-pinterest"></i></a>

        </div>
      </Container>
    </Navbar>
);

}
export default Nav2;