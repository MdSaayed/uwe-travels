import React from "react";
import TourHeading from "./TourHeading";
import TourHero from "./TourHero";
import TourContent from "./TourContent";
import BlogSlider from "./BlogSlider";
import Itinerary from "./Itinerary";
import TourSideBar from "./TourSideBar";

const DestinationDetailsFinal = () => {
  return (
    <div className="">
      <div className="tour container">
        <TourHeading />
        <div className="tour-wrapper">
          <div className="tour-content">
            <TourHero />
            <TourContent />
            <BlogSlider />
            <Itinerary />
          </div>
          <TourSideBar />
        </div>
      </div>

      <div className="header-menu-overlay"></div>
    </div>
  );
};

export default DestinationDetailsFinal;
