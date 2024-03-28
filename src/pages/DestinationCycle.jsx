import {
  BlogSlider,
  Books,
  Culture,
  DestinationDetailsFinal,
  Hotels,
  Itinerary,
  PaymentForm,
  Progress,
  SkipAndNext,
  Ticket,
  TourContent,
  TourHeading,
  TourHero,
  TourSideBar,
} from "../components";

const DestinationCycle = () => {
  return (
    <div>
      <div className="bg-white">
        <Progress />
        <SkipAndNext />
        <Hotels />
        <Ticket />
        <Culture />
        <Books />
        <DestinationDetailsFinal />
        <PaymentForm />
      </div>
    </div>
  );
};

export default DestinationCycle;
