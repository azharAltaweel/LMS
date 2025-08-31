
import Women from "../Assets/Images/women.png";
import { Container, Row, Col } from "react-bootstrap";

function WomanSection(){
           return(
           <section className="home-section3">
     <Container  className="my-5">
      <Row className="align-items-center">
        <Col lg={6} md={12} className="text-center mb-3 mb-lg-0">
          <img src={Women} alt="women" className="img-fluid rounded" />
        </Col>

        <Col lg={6} md={12}>
          <div className="blue-title">
            Learn new skills to go <span className="green-title">ahead for your</span> career.
          </div>
          <p style={{color:"#888" ,marginBottom:"30px"}}>
            Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod tempor
            incididunt ut labore et simply. From blogs to emails to ad copies, auto-generate catchy,
            original, and high-converting copies.
          </p>
          <p style={{color:"#888" ,marginBottom:"30px"}} ><strong>Auto-generate catchy original and high-converting copies in popular tones languages. From blogs to emails to ad copies auto-generate catchy
            </strong></p>
          <a href="#" className="btn1">Explore More</a>
        </Col>
      </Row>
    </Container>
    </section>
    ); 
}export default WomanSection;