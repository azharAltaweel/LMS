import CustomCard from "./Card1";
import { Row, Col } from "react-bootstrap";

function ExploreCards(){

   const cardData = [
    {
      title: "Quality Education",
      text: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore.",
      link: "#",
      linkText: "EXPLORE COURSES",
    },
    {
      title: "Experienced Teachers",
      text: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore.",
      link: "#",
      linkText: "EXPLORE COURSES",
    },
    {
      title: "Delicious Food",
      text: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore.",
      link: "#",
      linkText: "EXPLORE COURSES",
    },
  ];
return(
    <div className="custom-cards">
          <Row className="g-4 mt-5">
            {cardData.map((item, index) => (
              <Col key={index}  lg={4} xs={12} md={12}>
                <CustomCard
                  title={item.title}
                  text={item.text}
                  link={item.link}
                  linkText={item.linkText}
                />
              </Col>
            ))}
          </Row>
        </div>
);

}export default ExploreCards;