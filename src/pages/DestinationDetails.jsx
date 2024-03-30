import {
  BlogSlider,
  Itinerary,
  TourContent,
  TourHeading,
  TourHero,
  TourSideBar,
} from "../components";

const DestinationDetails = () => {
  return (
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
  );
};

export default DestinationDetails;
