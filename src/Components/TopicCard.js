import React from "react";

function TopicCard({ image, title, description }) {
  return (
    <div className="topic-card d-flex flex-row align-items-center p-2">
      <img src={image} className="card-img-left me-3" alt={title} />
      <div>
        <h2 className="topic-card-title mb-1"><a href="#">{title}</a></h2>
        <span className="topic-card-text mb-0">{description}</span>
      </div>
    </div>
  );
}

export default TopicCard;
