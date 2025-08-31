import React from "react";

function CustomCard({ title, text, link, linkText }) {
  return (
    <div className="card1">
      <h3>{title}</h3>
      <p>{text}</p>
      <a href={link} className="explore-link">
        <span className="circle-bg"></span>
        <span>{linkText} →</span>
      </a>
    </div>
  );
}

export default CustomCard;
