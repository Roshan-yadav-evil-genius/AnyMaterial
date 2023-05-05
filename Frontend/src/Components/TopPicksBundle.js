import React from 'react'
import "./TopPicksBundle.css"
import Thumbnail from "../images/AnyMaterial (8).jpg"
import {BsArrowRight} from "react-icons/bs"

const TopPicksBundle = () => {
  return (
    <div className='TopPicksBundle Notes'>
        <img src={Thumbnail} alt="" />
        <div className="discountRevert">20% off</div>
        <button className="buyNow">Shop Now <BsArrowRight/></button>
    </div>
  )
}

export default TopPicksBundle