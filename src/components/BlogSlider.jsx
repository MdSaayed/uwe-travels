import { useEffect, useRef } from "react";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";

import {
  tourCappadocia,
  tourDalyan,
  tourFethiye,
  tourIstanbul,
  tourGallipoli,
  tourKusadasi,
  tourOludeniz,
  tourTroy,
} from "../assets";

const BlogSlider = () => {

  const swiperRef = useRef(null);

  useEffect(() => {
    swiperRef.current = new Swiper(".swiper", {
      slidesPerView: 3,
      spaceBetween: 30,
      navigation: false, // Disable Swiper's built-in navigation
      breakpoints: {
        1024: {
          slidesPerView: 3, // Show 3 slides per view on large screens
        },
        768: {
          slidesPerView: 2, // Show 2 slides per view on tablets
          spaceBetween: 15,
        },
        314: {
          slidesPerView: 2, // Show 2 slides per view on phones
          spaceBetween: 10,
        },
      },
      on: {
        slideChange: () => {
          updateButtonOpacity();
        },
        init: () => {
          updateButtonOpacity();
        },
      },
    });
  }, []);

  const slideNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const slidePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const updateButtonOpacity = () => {
    if (swiperRef.current) {
      const isBeginning = swiperRef.current.isBeginning;
      const isEnd = swiperRef.current.isEnd;

      const prevButton = document.querySelector(".swiper-button-prev");
      const nextButton = document.querySelector(".swiper-button-next");

      if (prevButton) {
        prevButton.style.opacity = isBeginning ? "0.5" : "1";
      }
      if (nextButton) {
        nextButton.style.opacity = isEnd ? "0.5" : "1";
      }
    }
  };

  const tourPlaces = [
  {
    imageName: tourIstanbul,
    title: "Istanbul",
  },
  {
    imageName: tourCappadocia,
    title: "Cappadocia",
  },
  {
    imageName: tourDalyan,
    title: "Dalyan",
  },
  {
    imageName: tourFethiye,
    title: "Fethiye",
  },
  {
    imageName: tourTroy,
    title: "Troy",
  },
  {
    imageName: tourOludeniz,
    title: "Oludeniz",
  },
  {
    imageName: tourKusadasi,
    title: "Kusadasi",
  },
  {
    imageName: tourGallipoli,
    title: "Gallipoli",
  },
];


  return (
    <div className="tour-content-block relative">
      <div className="tour-content-title">Places You’ll See</div>
      <div className="tour-places">
        <div className="swiper">
          <div className="swiper-wrapper">
            {
              tourPlaces?.map((place,idx)=> (<div key={idx} className="swiper-slide">
              <div className="swiper-image">
                <img src={place.imageName} alt="Istanbul" />
              </div>
                <div className="swiper-title">{ place.title}</div>
            </div>))
            }
          </div>
        </div>
        <div className="custom-swiper-buttons absolute w-full flex justify-between">
          <button className="swiper-button-prev" onClick={slidePrev}></button>
          <button className="swiper-button-next" onClick={slideNext}></button>
        </div>
      </div>
    </div>
  );
};

export default BlogSlider;
