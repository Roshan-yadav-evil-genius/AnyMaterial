import React from "react";
import "./AllComponents.css";
import VerticalBook from "../Molecules/VerticalBook";
import HorizontalBook from "../Molecules/HorizontalBook";
import BundlePack from "../Molecules/BundlePack";
import TopPicksBundle from "../Molecules/TopPicksBundle";
import BestTeacherCard from "../Molecules/BestTeacherCard";
// Buttons
import { Button, LinkButton } from "../Atoms/Buttons";
import { CartTable, AnalyticsTable } from "../Molecules/ProductTable";
import TotalAmount from "../Molecules/TotalAmount";

import Darkside from "../Molecules/Darkside";
import { UploadFormStep1st,UploadFormStep2nd,ViewFormDataStep3rd } from "../Organisms/UploadForm";

const AllComponents = () => {
  return (
    <div className="CompViewcard">
      <h3>Darkside card</h3>
      <div className="compShowcase">
        <Darkside/>
      </div>
      <h3>Upload Form</h3>
      <div className="compShowcase">
        <ViewFormDataStep3rd/>
        <UploadFormStep2nd/>
        <UploadFormStep1st />
      </div>
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
        <Button
          size="sm"
          shape="rectangular">
          Primary
        </Button>
        <Button
          size="sm"
          variant="secondary"
          shape="rectangular">
          Secondary
        </Button>
        <Button
          size="sm"
          variant="success"
          shape="rectangular">
          success
        </Button>
        <Button
          size="sm"
          variant="danger"
          shape="rectangular">
          Danger
        </Button>
        <Button
          size="sm"
          variant="warning"
          shape="rectangular">
          warning
        </Button>
        <Button
          size="sm"
          variant="info"
          shape="rectangular">
          info
        </Button>
        <Button
          size="sm"
          variant="dark"
          shape="rectangular">
          dark
        </Button>
        <Button
          size="sm"
          shape="rectangular"
          disabled>
          disabled
        </Button>
        <Button
          size="sm"
          variant="light"
          shape="rectangular">
          light
        </Button>
        <LinkButton size="sm">Link</LinkButton>
      </div>
      <h3>Cart Table</h3>
      <div className="compShowcase">
        <CartTable />
        <AnalyticsTable />
      </div>
      <h3>Total Amount Card</h3>
      <div className="compShowcase">
        <TotalAmount />
      </div>
    </div>
  );
};

export default AllComponents;
