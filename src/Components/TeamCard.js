
function TeamCard({ image, name, role, courses, students }) {
  return (
    <div className="team-card">
      <div className="team-card-img">
        <img src={image} alt={name} />
        <div className="social-icons">
          <a href="#"><i className="bi bi-facebook"></i></a>
          <a href="#"><i className="bi bi-twitter"></i></a>
          <a href="#"><i className="bi bi-linkedin"></i></a>
        </div>
      </div>
      <div className="team-card-body">
        <h4>{name}</h4>
        <p>{role}</p>
        <div className="team-card-stats">
          <span><i className="bi bi-file-earmark-text"></i> {courses} Courses</span>
          <span><i className="bi bi-people"></i> {students} Students</span>
        </div>
      </div>
    </div>
  );
}

export default TeamCard;
