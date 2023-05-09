import React from 'react'
import "./Darkside.css";
import {BiMath} from "react-icons/bi";

function Darkside() {
  return (
    <div className="Darskide">
        <div className="header">
        <div className="mathicon"><BiMath/></div>
        <div className="dept">For B.tech</div>
        </div>
        <div className="sub">Mathematics </div>
        <div className="content">
          <p>Matrix, Integrals, Diffrentiation,Matrix, Integrals, Diffrentiation </p>
          <h5>Prefered Notes Of Teacher :</h5>
          <p id='teacher'>VRam Sharma, Rahul Prakash,
            Rakesh Pandey, Vijay Kumar</p>
        </div>
    </div>
  )
}

export default Darkside