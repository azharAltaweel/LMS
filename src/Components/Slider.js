import React, { useState, useEffect } from "react";
import img1 from "../Assets/Images/company1.png"; 
import img2 from "../Assets/Images/company2.png"; 
import img3 from "../Assets/Images/company3.png"; 
import img4 from "../Assets/Images/company4.png"; 
import img5 from "../Assets/Images/company5.png"; 

function Slider() {
  const images = [img1, img2, img3, img4, img5];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3);

  useEffect(() => {
    const updateItemsToShow = () => {
      setItemsToShow(window.innerWidth < 768 ? 1 : 3);
    };
    updateItemsToShow();
    window.addEventListener("resize", updateItemsToShow);
    return () => window.removeEventListener("resize", updateItemsToShow);
  }, []);

  useEffect(() => {
    let timeout;

    const slideNext = () => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
      timeout = setTimeout(slideNext, 3000); // 1s حركة + 2s توقف
    };

    timeout = setTimeout(slideNext, 2000);

    return () => clearTimeout(timeout);
  }, [images.length]);

  return (
    <div className="slider-container">
      <div
        className="slider-track"
        style={{
          transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)`,
          width: `${(images.length * 100) / itemsToShow}%`,
        }}
      >
        {images.map((src, index) => (
          <div
            key={index}
            className="slide"
            style={{ width: `${100 / images.length}%` }}
          >
            <img src={src} alt={`Slide ${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slider;
