import React from "react";
import "./index.scss";

const RatingStars = ({ rate }) => {
  const totalStars = 5; // Toplam yıldız sayısı
  const filledStars = Math.round(rate); // Puanı yuvarlayarak dolu yıldız sayısını belirle

  return (
    <div className="rating-stars">
      {[...Array(totalStars)].map((_, index) => (
        <span
          key={index}
          className={`star ${index < filledStars ? "filled" : ""}`}
        >
          {index < filledStars ? "★" : "☆"}
        </span>
      ))}
    </div>
  );
};

export default RatingStars;
