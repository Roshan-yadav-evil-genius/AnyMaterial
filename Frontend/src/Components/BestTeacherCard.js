import React from "react";
import "./BestTeacherCard.css";
import Avatar from "../images/AnyMaterial (11).jpg";
import ReactStars from "react-rating-stars-component";

const BestTeacherCard = () => {
  return (
    <div className="BestTeacherCard">
      <div className="avatarstatus">
        <div className="status offline"></div>
        <div className="avatar">
          <img
            src={Avatar}
            alt=""
          />
        </div>
      </div>
      <div className="details">
        <h6>Rakesh Pandey (Ast Proff)</h6>
        <ReactStars
          count={5}
          size={20}
          activeColor="#ffd700"
        />
        <p className="branch">Electronics Instrumentation Engg</p>
        <p className="experience">Teaching Exp : <span className="experience">4 years</span></p>
      </div>
    </div>
  );
};

export default BestTeacherCard;
