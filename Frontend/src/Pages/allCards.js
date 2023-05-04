import React from 'react'
import VerticalBook from '../Components/VerticalBook'
import HorizontalBook from '../Components/HorizontalBook'
import  "./allCards.css"
const AllCards = () => {
  return (
    <div>AllCards
    <div className="vclist">
        <VerticalBook/>
        <HorizontalBook/>
    </div>
    </div>
  )
}

export default AllCards