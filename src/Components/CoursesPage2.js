import HeaderSection from "./HeaderSection";
import FinanceCourse from "../Assets/Images/finance-course.jpg";
import Design1Course from "../Assets/Images/basicDesign-course.jpg";
import CourseCard from "./CourseCard";
import { Container, Row, Col } from "react-bootstrap";
import PaginationComponent from "./Pagination";
import SortMenu from "./SortMenu";

function CoursesPage(){
    
    const courses = [
      
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
      }
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