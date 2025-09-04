import { Navbar, Container, Button } from "react-bootstrap";
import logo from "../Assets/Images/envato-logo.png"; 
function Nav1() {
  return (
    <Navbar expand="lg" className="bg-dark fixed-top top-navbar">
      <Container fluid style={{
        display:"flex",
        justifyContent:"space-between",
        padding:"2px 15px"
      }}>
        <Navbar.Brand href="https://themeforest.net/item/edusion-education-lms-wordpress-theme/49120881?_gl=1*lp0x40*_gcl_au*MjUxMTg2NjQ2LjE3NTU5MzQwMjU.*_ga*MjE1MjU4OTM5LjE3NTU4OTUyNDE.*_ga_ZKBVC1X78F*czE3NTYwNzcxNjQkbzUkZzEkdDE3NTYwNzc0ODYkajYwJGwwJGgw">
          <div style={{color:"white", display:"flex"}}>
            <img src={logo} alt="Logo" height="30" />
            <b>envato </b>market
          </div>
        </Navbar.Brand>

        <div className="ms-auto">
          <Button 
            variant="primary" 
            style={{
              backgroundColor: "#82b440", 
              boxShadow:"0 2px 0 #6f9a37",
              border: "none", 
              height:"30px",
              fontSize: "14px",
              padding:"5px 20px",
              alignItems:"center",
            }}
          >
            Buy Now
          </Button>
        </div>
      </Container>
    </Navbar>
  );
} export default Nav1;
