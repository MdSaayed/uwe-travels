import { MdOutlineFavoriteBorder } from "react-icons/md";

const TourSideBar = () => {
  return (
    <div className="tour-sidebar">
      <div className="tour-receipt">
        <div className="tour-receipt-head">
          <div className="tour-amount">
            <span className="tour-amount-old">$119</span> $109
            <span>/night</span>
          </div>
          <div className="tour-discount">-10%</div>
        </div>
        <div className="tour-receipt-select">
          <div className="tour-receipt-select-top">
            <div className="tour-receipt-select-item">
              <div className="tour-receipt-select-icon">
                <span className="material-icons-outlined">calendar_month</span>
              </div>
              <div className="tour-receipt-select-content">
                <div className="tour-receipt-select-title">07 May</div>
                <div className="tour-receipt-select-text">Check in</div>
              </div>
            </div>
            <div className="tour-receipt-select-item">
              <div className="tour-receipt-select-icon">
                <span className="material-icons-outlined">event_available</span>
              </div>
              <div className="tour-receipt-select-content">
                <div className="tour-receipt-select-title">16 May</div>
                <div className="tour-receipt-select-text">Check out</div>
              </div>
            </div>
          </div>
          <div className="tour-receipt-select-bottom">
            <div className="tour-receipt-select-item">
              <div className="tour-receipt-select-icon">
                <span className="material-icons-outlined">person_outline</span>
              </div>
              <div className="tour-receipt-select-content">
                <div className="tour-receipt-select-title">3 Guests</div>
                <div className="tour-receipt-select-text">Guests</div>
              </div>
            </div>
          </div>
        </div>
        <div className="tour-receipt-detail">
          <div className="tour-receipt-detail-item">
            <div className="tour-receipt-detail-title">$119 x 9 nights</div>
            <div className="tour-receipt-detail-price">$1,071</div>
          </div>
          <div className="tour-receipt-detail-item">
            <div className="tour-receipt-detail-title">
              10% campaign discount
            </div>
            <div className="tour-receipt-detail-price">-$175</div>
          </div>
          <div className="tour-receipt-detail-item">
            <div className="tour-receipt-detail-title">Service fee</div>
            <div className="tour-receipt-detail-price">$0</div>
          </div>
          <div className="tour-receipt-detail-item tour-receipt-detail-total">
            <div className="tour-receipt-detail-title">Total</div>
            <div className="tour-receipt-detail-price">$1,246</div>
          </div>
        </div>
        <div className="tour-receipt-button">
          <button className="tour-favorite">
            <MdOutlineFavoriteBorder className="text-[24px]" />
          </button>
          <button className="tour-reserve">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default TourSideBar;
