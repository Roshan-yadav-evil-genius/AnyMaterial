import "./TotalAmount.css";
import React from "react";
import { Button } from "../Atoms/Buttons";

const TotalAmount = () => {
  return (
    <div className="TotalAmount">
      <div className="allprices">
        <div className="field">
          <div className="name">Subtotal</div>
          <div className="price"><span className="finalPrice">25$</span></div>
        </div>
        <div className="field">
          <div className="name">Discount</div>
          <div className="price"><span className="finalPrice">25$</span></div>

        </div>
      </div>
      <div className="total">
        <div className="field">
          <div className="name">Total</div>
          <div className="price">
            <div className="mrp">19.0 $</div>
            <div className="finalPrice">19.0 $</div>
          </div>
        </div>
        <Button size="sm" shape="rectangular" fluid="h">Buy Now</Button>
      </div>
    </div>
  );
};

export default TotalAmount;
