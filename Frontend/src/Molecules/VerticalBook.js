import React from "react";
// Css
import "./VerticalBook.css";
import "./Books.css";
// Assets
import { FaStar } from "react-icons/fa";
import {BsFillCartPlusFill} from "react-icons/bs";
import { Button } from "../Atoms/Buttons";

const VerticalBook = (props) => {
  
  const {id,rating,thumbnail,discount,author,finalPrice,mrp}=props

  const Buy_Now = (notesId)=>{
    alert(`By Notes of id : ${notesId}`)
  }
  return (
    <div className="VerticalNotesCard Notes">
      {/* rcWrapper : rating  cart Wrapper */}
      <div className="rcWrapper">
        <div className="rating">
          <div className="count">{rating}</div>
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
          src={thumbnail}
          alt="" />
          {discount ? <div className="discount">{discount} off</div>:""}
          
      </div>
      <div className="title">English Classic : The island of doctor Roboto</div>
      <div className="apWrappper">
        <div className="author">
          <div className="key">Writer</div>
          <div className="value">{author.name}</div>
        </div>
        <div className="priceWrapper">
          <div className="price">
            <div className="mrp">{mrp}</div>
            <div className="finalPrice">{finalPrice}</div>
          </div>
          <div>
            <Button size="sm" shape="rectangular"onClick={()=>Buy_Now(id)} >Buy now</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerticalBook;

