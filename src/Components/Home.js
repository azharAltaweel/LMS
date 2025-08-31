import Bg from "../Assets/Images/home-bg.png"; //  background
 import Business from "../Assets/Images/business.svg";
 import DS from "../Assets/Images/DS.svg";
 import Digital from "../Assets/Images/digital.svg";
 import Finance from "../Assets/Images/finance.svg";
 import Physics from "../Assets/Images/physics.svg";
 import Design from "../Assets/Images/design.svg";
import BusinessCourse from "../Assets/Images/business-course.jpg";
import FinanceCourse from "../Assets/Images/finance-course.jpg";
import Design1Course from "../Assets/Images/basicDesign-course.jpg";
import Design2Course from "../Assets/Images/design-course.jpg";
import DSCourse from "../Assets/Images/DS-course.jpg";
import DigitalCourse from "../Assets/Images/digital-course.jpg";
import VideoCover from "../Assets/Images/video.jpg";

import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import TopicCard from "./TopicCard";
import CourseCard from "./CourseCard";
import { FaSmile, FaFileAlt, FaHeadphones, FaUser } from "react-icons/fa";
import { useState } from "react";
import ExploreCards from "./ExploreCards";
import WomanSection from "./WomenSection";
import CardWithIcon from "./CardWithIcon";


function HomePage() {
    
  const topicCardData = [
  { image: Business, title: " Business", description: "1 Courses" },
  { image: DS, title: "Data Science", description: "1 Courses" },
  { image: Digital, title: "Digital Program", description: "2 Courses" },
  { image: Finance, title: "Finance ", description: "2 Courses" },
  { image: Physics, title: "Modern Ohysics", description: "3 Courses" },
  { image: Design, title: "UI/UX Design", description: "3 Courses" },
];

const courses = [
  {
    image: BusinessCourse,
    price: 265,
    category: "Business",
    title: "Financial Security Thinking And Principles Theory",
    lessons: 6,
    hours: 4,
    rating: 4.50,
    level: "All Levels",
  },
  {
    image: FinanceCourse,
    price: 250,
    category: "Finance",
    title: "Professional Ceramic Moulding For Beginners",
    lessons: 15,
    hours: 4,
    rating: 5.00,
    level: "All Levels",
  },
  {
    image: Design1Course,
    price: 0,
    category: "UI/UX Design",
    title: "Basic Fundamentals Of Interior & Graphics Design",
    lessons: 16,
    hours: 22,
    rating: 5.0,
    level: "Intermediate",
  },{
    image: DigitalCourse,
    price: 0,
    category: "Digital Program",
    title: " WordPress For Beginners-Master WordPress",
    lessons: 15,
    hours: 4,
    rating: 5.0,
    level: "Beginner",
  },{
    image: DSCourse,
    price: 300,
    category: "Data Science",
    title: " The Complete python Fore Beginner 2023",
    lessons: 14,
    hours: 18,
    rating: 5.0,
    level: " Intermediate",
  },{
    image: Design2Course,
    price: 0,
    category: "UI/UX Design",
    title: " Ultimate photoshop training: Form ",
    lessons: 14,
    hours: 13,
    rating: 5.0,
    level: "All Levels",
  },
];

    const AchieveData = [
    { icon: <FaSmile color="#4e5bff" />, title: 854, subtitle: "Enrolled Students" },
    { icon: <FaFileAlt color="#ff7f0e" />, title: 521, subtitle: "Academic Programs" },
    { icon: <FaHeadphones color="#2ecc71" />, title: 163, subtitle: "Winning Award" },
    { icon: <FaUser color="#c0392b" />, title: 93, subtitle: "Certified Students" },
  ];

    const [showVideo, setShowVideo] = useState(false);


  return (

    <div className="home-container"  >
      <section className="home-section1"style={{ backgroundImage: `url(${Bg})` }} >

        <h1>
          Get smart <span 
          style={{ color: "#2eca7f", textDecoration:"underline" }}>
            opportunity <br /> for </span>
          your best future
        </h1>

        <p>
          It is a long established fact that reader will be distracted readable
          content of a page when.
        </p>

        <div className="search-input"
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "30px 0",
          }}>
          <input
            type="text"
            placeholder="Search Your Course Here"
            required="required" />
          <button  className="btn1" type="submit"
            style={{
              padding: "15px 30px",
              borderRadius: "0 50px 50px 0", }}>
            Search <i className="bi bi-send"></i>
          </button>
        </div>

        <div className="topic-links-container">
          <span style={{ color:"#888" }}>Popular Topic: </span>
          <a href="#" className="link-to">
            Business
          </a> ,
          <a href="#"  className="link-to">
            Data Science
          </a> ,
          <a href="#" className="link-to">
            Digital Program
          </a> ,
          <a href="#" className="link-to">
            Finance
          </a>
        </div>
      </section>
         <ExploreCards />


        <section className="home-section2" >
            <div className="section-title">
               <div className="small-title-container">
                 <h2 className="small-title">START LEARNING </h2>
                <div className="line"> </div></div>
                <p className="blue-title"> Popular <span className="green-title">Topics To Learn</span> From Today.</p>
            </div>

           <div className="container mt-4">
      <div className="row g-3">
        {topicCardData.map((card, index) => (
          <div key={index} className="col-12 col-md-6 col-lg-4">
            <TopicCard
              image={card.image}
              title={card.title}
              description={card.description}
            />
          </div>
        ))}
      </div>
    </div>
        </section>
        
        <WomanSection/>

<section className="home-section4">
   <div className="section-title">
               <div className="small-title-container">
                 <h2 className="small-title">Popular Courses</h2>
                <div className="line"></div></div>
                <p className="blue-title"> choose our  
                  <span className="green-title"> top courses</span></p>
            </div>

             <Container className="my-5">
      <Row className="g-4">
        {courses.map((course, index) => (
          <Col key={index} lg={4} md={6} sm={12}>
            <CourseCard {...course} />
          </Col>
        ))}
      </Row>
    </Container>
        <div style={{textAlign:"center", marginBottom:"100px"}} ><a href="#" className="btn1">View All Course </a>
        </div> 
</section>

<section className="home-section5">
  <div className="section-title">
    <div className="small-title-container">
      <h2 className="small-title">Some Fun Fact</h2>
      <div className="line"></div></div>
      <p className="blue-title">Our Great 
      <span className="green-title"> Achievement</span></p>
      </div>
      
   <CardWithIcon data={AchieveData}/>
      </section>
  
      
      <section className="home-section6">
      <div className="video-section">
      {/* صورة الغلاف مع انيميشن */}
      <div className="video-cover reveal">
        <img src={VideoCover} alt="Video Cover" className="cover-img" />
        <button className="play-btn" onClick={() => setShowVideo(true)}>▶</button>
      </div>

      {/* Popup للفيديو */}
      {showVideo && (
        <div className="video-popup" onClick={() => setShowVideo(false)}>
          <div className="video-container">
            <iframe
              src="https://www.youtube.com/watch?v=0KYxN1kJSb0"
              title="Video"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

     
    </div>


</section>









  </div>
  );
}
export default HomePage;
