import React from "react";
// Css
import "./HorizontalBook.css";
import "./Books.css";
// Assets
import { FaStar } from "react-icons/fa";
import Thumbnail from "../images/notesCovers/AnyMaterial (2).jpg";

const HorizontalBook = () => {
  return (
    <div className="HorizontalBook Notes">
      <div className="top">
        <div className="coverWrapper">
          <div className="cover">
            <img
              src={Thumbnail}
              alt=""
            />
            <div className="discount">20% off</div>
          </div>
        </div>

        <div className="details">
          <div className="ratingWrapper">
            <div className="rating">
              <div className="count">4.5</div>
              <div className="star">
                <FaStar />
              </div>
            </div>
          </div>
          <div className="title">
            English Classic : The island of doctor Roboto
          </div>
          <div className="dictData">
            <div className="key">By</div><span> : </span>
            <div className="value">HG Wells</div>
          </div>
          <div className="dictData">
            <div className="key">Branch</div><span> : </span>
            <div className="value">EI, EC, ME</div>
          </div>
          <div className="info">
            <div className="dictData">
              <div className="value">270</div>
              <div className="key">Page</div>
            </div>
            <div className="dictData">
              <div className="value">74</div>
              <div className="key">Reviews</div>
            </div>
            <div className="dictData">
              <div className="value">8</div>
              <div className="key">Chapter</div>
            </div>
          </div>
        </div>
      </div>
      <div className="priceWrapper">
        <div className="price">
          <div className="mrp">19.0 $</div>
          <div className="finalPrice">19.0 $</div>
        </div>
        <div className="operations">
          <button className="AddToCart">Add to Cart</button>
          <button className="buyNow">Buy now</button>
        </div>
      </div>
    </div>
  );
};

export default HorizontalBook;
