import React from "react";
import "./AllComponents.css";
import VerticalBook from "../Components/VerticalBook";
import HorizontalBook from "../Components/HorizontalBook";
import BundlePack from "../Components/BundlePack";
import TopPicksBundle from "../Components/TopPicksBundle";
import BestTeacherCard from "../Components/BestTeacherCard";
// Buttons
import { Button } from "../Atoms/Buttons";

const AllComponents = () => {
  return (
    <div className="CompViewcard">
      <h3>Cards</h3>
      <div className="compShowcase">
        <VerticalBook />
        <HorizontalBook />
        <BundlePack />
        <TopPicksBundle />
        <BestTeacherCard />
      </div>
      <h3>Buttons</h3>
      <div className="compShowcase">
        <Button size="sm" shape="rectangular">Primary</Button>
        <Button size="sm" variant="secondary" shape="rectangular">Secondary</Button>
        <Button size="sm" variant="success" shape="rectangular">success</Button>
        <Button size="sm" variant="danger" shape="rectangular">Danger</Button>
        <Button size="sm" variant="warning" shape="rectangular">warning</Button>
        <Button size="sm" variant="info" shape="rectangular">info</Button>
        <Button size="sm" variant="dark" shape="rectangular" >dark</Button>
        <Button size="sm"  shape="rectangular" disabled>disabled</Button>
        <Button size="sm" variant="light" shape="rectangular">light</Button>
      </div>
    </div>
  );
};

export default AllComponents;
