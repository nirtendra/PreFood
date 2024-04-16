import React from "react";

export const Rating = ({ rating }) => {
  let ratingNo = Array(5).fill(false);
  for (let i = 0; i < rating; i++) {
    ratingNo[i] = true;
  }

  return (
    <div>
      {ratingNo.map((value, index) => (
       
        <i key={index} className={
            value ? 
            "bi bi-star-fill" 
            : "bi bi-star"}>
                
            </i>
      ))}
    </div>
  );
};
