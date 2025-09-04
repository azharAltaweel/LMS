import React from "react";

function BlogCard({ image, date, category, title, link }) {
  return (
    <div className="blog-card p-3 border rounded shadow-sm h-100">
      {/* لو في صورة */}
      {image && (
        <img
          src={image}
          alt={title}
          className="img-fluid mb-3 rounded"
          style={{ maxHeight: "200px", objectFit: "cover", width: "100%" }}
        />
      )}

      {/* التاريخ + التصنيف */}
      <p className="text-muted mb-1 "style={{color:"#888"}}>
        {date} |<span style={{color:"#2eca7f"}}>{category}</span> 
      </p>

      {/* العنوان */}
      <h5 className="mb-2"style={{color:"#1a2d62"}}>{title}</h5>

      {/* الرابط */}
      <a href={link} className="explore-link">
        <span className="circle-bg"></span>
        <span>Read More →</span>
      </a>
    </div>
  );
}

export default BlogCard;
