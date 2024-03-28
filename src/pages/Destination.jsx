import { SeparatorWithText, TravelType } from "../components";
import BookingForm from "../components/BookingForm";

const Destination = () => {
  return (
    <div>
      <TravelType />
      <SeparatorWithText text={"Enter your info"} />
      <BookingForm />
      <SeparatorWithText text={"END"} />
    </div>
  );
};

{
  /* $ git push origin sayed */
}
export default Destination;
