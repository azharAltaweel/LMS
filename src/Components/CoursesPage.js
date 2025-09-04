import HeaderSection from "./HeaderSection";
import BusinessCourse from "../Assets/Images/business-course.jpg";
import FinanceCourse from "../Assets/Images/finance-course.jpg";
import Design1Course from "../Assets/Images/basicDesign-course.jpg";
import Design2Course from "../Assets/Images/design-course.jpg";
import DSCourse from "../Assets/Images/DS-course.jpg";
import DigitalCourse from "../Assets/Images/digital-course.jpg";
import CourseCard from "./CourseCard";
import { Container, Row, Col } from "react-bootstrap";
import PaginationComponent from "./Pagination";
import SortMenu from "./SortMenu";

function CoursesPage(){
    
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
      },{
        image: BusinessCourse,
        price: 265,
        category: "Business",
        title: "Financial Security Thinking And Principles Theory",
        lessons: 6,
        hours: 4,
        rating: 4.50,
        level: "All Levels",
      },
    ];
    return(
        <div className="courses-container">
            <section className="courses-page-container">
            <HeaderSection pageName="Courses"/>
            <SortMenu/>
             <Container className="my-5">
      <Row className="g-4">
        {courses.map((course, index) => (
          <Col key={index} lg={4} md={6} sm={12}>
            <CourseCard {...course} />
          </Col>
        ))}
      </Row>
    </Container>
    <PaginationComponent totalPages={2} />

            </section>
        </div>




    );



}export default CoursesPage;