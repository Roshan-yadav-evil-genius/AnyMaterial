import React from 'react'
import "./TopPicksBundle.css"
import Thumbnail from "../images/AnyMaterial (8).jpg"
import {BsArrowRight} from "react-icons/bs"
import { Button } from '../Atoms/Buttons'

const TopPicksBundle = () => {
  return (
    <div className='TopPicksBundle Notes'>
        <img src={Thumbnail} alt="" />
        <div className="discountRevert">20% off</div>
        <Button size="sm" variant="light" shape="rectangular">Buy now <BsArrowRight/></Button>

        {/* <button className="buyNow">Shop Now <BsArrowRight/></button> */}
    </div>
  )
}

export default TopPicksBundle