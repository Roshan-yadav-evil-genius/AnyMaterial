import React from "react";
import "./allCards.css";
import VerticalBook from "../Components/VerticalBook";
import HorizontalBook from "../Components/HorizontalBook";
import BundlePack from "../Components/BundlePack";
import TopPicksBundle from "../Components/TopPicksBundle";
import BestTeacherCard from "../Components/BestTeacherCard";

const AllCards = () => {
  return (
    <div className="CompViewcard">
      <h1>Listed In All cards Molecule</h1>
      <div className="vclist">
        <VerticalBook />
        <HorizontalBook />
        <BundlePack />
        <TopPicksBundle />
        <BestTeacherCard />
      </div>
    </div>
  );
};

export default AllCards;
