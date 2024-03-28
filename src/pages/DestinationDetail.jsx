import {
  BlogSlider,
  Itinerary,
  TourContent,
  TourHeading,
  TourHero,
  TourSideBar,
} from "../components";

const DistinationDetail = () => {
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

export default DistinationDetail;
