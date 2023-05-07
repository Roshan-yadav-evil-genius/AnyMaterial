import React from "react";
import "./BundlePack.css";
import "./Books.css";
import Thumbnail from "../images/AnyMaterial (5).jpg";

const BundlePack = () => {
  return (
    <div className="BundlePack Notes">
      <div className="details">
        <h5>Semester Bundle</h5>
        <div className="pandd">
          <div className="price">
            <div className="mrp">19.0 $</div>
            <div className="finalPrice">19.0 $</div>
          </div>
          <div className="discount">20% off</div>
        </div>
      </div>
      <div className="thumbnail">
        <img
          src={Thumbnail}
          alt=""
        />
      </div>
    </div>
  );
};

export default BundlePack;
