import React from 'react'
import VerticalBook from '../Components/VerticalBook'
import HorizontalBook from '../Components/HorizontalBook'
import  "./allCards.css"
import BundlePack from '../Components/BundlePack'

const AllCards = () => {
  return (
    <div>
    <h1>Listed In All cards Molecule</h1>
    <div className="vclist">
        <VerticalBook/>
        <HorizontalBook/>
        <BundlePack/>
    </div>
    </div>
  )
}

export default AllCards