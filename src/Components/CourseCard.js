import { Card, Badge } from "react-bootstrap";
import { FaFileAlt, FaClock, FaStar, FaSignal } from "react-icons/fa";

function CourseCard({ image, price, category, title, lessons, hours, rating, level }) {
  return (
    <Card className="course-card h-100">
      <div className="position-relative">
        <Card.Img variant="top" src={image} />
        <Badge
          bg="success"
          className="position-absolute"
          style={{ top: "10px", left: "10px", fontSize: "1rem", padding: "0.5rem 0.75rem" }}
        >
          ${price}
        </Badge>
      </div>
      <Card.Body>
        <Card.Subtitle className="mb-1 text-primary">{category}</Card.Subtitle>
        <Card.Title>{title}</Card.Title>
        <div className="d-flex flex-wrap gap-3 mt-3 text-muted">
          <div className="d-flex align-items-center gap-1">
            <FaFileAlt /> {lessons} Lessons
          </div>
          <div className="d-flex align-items-center gap-1">
            <FaClock /> {hours} hours
          </div>
          <div className="d-flex align-items-center gap-1">
            <FaStar /> {rating.toFixed(1)}
          </div>
          <div className="d-flex align-items-center gap-1">
            <FaSignal /> {level}
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default CourseCard;
