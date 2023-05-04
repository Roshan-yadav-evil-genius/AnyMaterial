import React from "react";
// Css
import "./VerticalBook.css";
import "./Books.css";
// Assets
import Thumbnail from "../images/notesCovers/AnyMaterial (2).jpg";
import { FaStar } from "react-icons/fa";
import {BsFillCartPlusFill} from "react-icons/bs";

const VerticalBook = () => {
  return (
    <div className="VerticalNotesCard Notes">
      {/* rcWrapper : rating  cart Wrapper */}
      <div className="rcWrapper">
        <div className="rating">
          <div className="count">4.5</div>
          <div className="star">
            <FaStar />
          </div>
        </div>
        <div className="CartIcon">
          <BsFillCartPlusFill />
        </div>
      </div>
      <div className="cover">
        <img
          src={Thumbnail}
          alt="" />
          <div className="discount">20% off</div>
      </div>
      <div className="title">English Classic : The island of doctor Roboto</div>
      <div className="apWrappper">
        <div className="author">
          <div className="key">Writer</div>
          <div className="value">HG Wells</div>
        </div>
        <div className="priceWrapper">
          <div className="price">
            <div className="mrp">19.0 $</div>
            <div className="finalPrice">19.0 $</div>
          </div>
          <div>
            <button className="buyNow">Buy now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerticalBook;

