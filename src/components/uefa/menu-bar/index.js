import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function MenuBar() {
  const sliderRef = useRef(null);
  var settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 3,
    speed: 500,
    arrows: false,
    responsive: [
      {
        breakpoint: 1760,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1460,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1290,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };
  const goToNext = () => {
    sliderRef.current.slickNext();
  };

  const goToPrev = () => {
    sliderRef.current.slickPrev();
  };
  return (
    <React.Fragment>
      <div className="bg-[#000040]">
        <div className="max-w-[1600px] w-[100%] lg:pl-[105px] sm:pl-[24px] pl-[15px] lg:pr-[64px] pr-[11px] pt-[13px] flex justify-between items-center">
          <img src="images/8.png" alt="" className="cursor-pointer" />
          <img src="images/9.png" alt="" className="cursor-pointer " />
          <img
            src="images/10.png"
            alt=""
            className="cursor-pointer lg:block hidden"
          />
          <img src="images/11.png" alt="" className="cursor-pointer " />
          <img
            src="images/12.png"
            alt=""
            className="cursor-pointer lg:block hidden"
          />
          <img
            src="images/13.png"
            alt=""
            className="cursor-pointer lg:block hidden"
          />
          <img
            src="images/14.png"
            alt=""
            className="cursor-pointer lg:block hidden"
          />
          <img
            src="images/15.png"
            alt=""
            className="cursor-pointer lg:block hidden"
          />
          <img src="images/16.png" alt="" className="cursor-pointer" />
          <img
            src="images/17.png"
            alt=""
            className="cursor-pointer lg:block hidden"
          />
        </div>
        <div className="flex items-center lg:pl-[100px] sm:pl-[24px] pl-[15px] lg:pr-[65px]">
          <div>
            <img
              onClick={goToPrev}
              src="/images/left.png"
              alt=""
              className="cursor-pointer mr-2 sm:block hidden"
            />
          </div>
          <div className="xl:max-w-[1050px] max-w-[600px] w-[100%]  py-4">
            <Slider {...settings} ref={sliderRef}>
              {[1, 2, 3, 4, 5, 6, 7].map((item) => (
                <div className="slider-card flex mx-2 gap-3">
                  <div className="swiper-slide   sm:max-w-[183px] max-w-[110px]     rounded-2xl sm:px-4 px-2 py-2  bg-[#071060] ">
                    <div className=" ">
                      <p className="text-[#7c80ab] text-[14px]">
                        28 Nov, 17:45
                      </p>
                      <p className="text-[#7c80ab] text-[14px]">Group E</p>
                      <div className="flex py-1">
                        <img
                          src="/images/my.png"
                          alt=""
                          className="w-[25px] h-[25px]"
                        />
                        <p className="text-white text-[16px] ml-2">Lazio</p>
                      </div>
                      <div className="flex">
                        <img
                          src="/images/my1.png"
                          alt=""
                          className="w-[25px] h-[25px]"
                        />
                        <p className="text-white text-[16px] ml-2">Celtic</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          <div className="sm:flex hidden">
            <img
              src="/images/image 56 (1).png"
              alt=""
              className="cursor-pointer"
              onClick={goToNext}
            />
          </div>
          <div className="ml-5">
            <img src="/images/image 56.png" alt="" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
