import React from "react";

export default function Footer() {
  return (
    <React.Fragment>
      <div className="relative">
        <img
          src="/images/image 59.png"
          alt=""
          className="sm:h-[610px] h-[243px] w-[100%]"
        />
        <div className="absolute top-0 xl:px-[100px] px-[16px] pt-[67px] w-[100%]">
          <div className="flex justify-between w-[100%]">
            <div className="max-w-[336px] w-[100%] flex sm:justify-between items-center">
              <div className="">
                <img
                  src="/images/logo3.png"
                  alt=""
                  className="sm:w-auto sm:h-auto w-[47px] h-[51px]"
                />
              </div>
              <div className="sm:hidden justify-between items-center ml-[60px]">
                <div>
                  <img
                    src="/images/social.png"
                    alt=""
                    className="cursor-pointer w-[125px] h-[24px]"
                  />
                </div>
                <div className="flex">
                  <img
                    src="/images/app.png"
                    alt=""
                    className="w-[70px] h-[22px]"
                  />
                  <img
                    src="/images/app1.png"
                    alt=""
                    className="w-[70px] h-[22px]"
                  />
                </div>
              </div>
              <div className=" text-white lg:block hidden">
                <div className="w-[87px] m-auto">
                  <p className="cursor-pointer">Matches</p>
                  <p className="cursor-pointer">Draws</p>
                  <p className="cursor-pointer">Groups</p>
                  <p className="cursor-pointer">Video</p>
                  <p className="cursor-pointer">Gaming</p>
                </div>
              </div>
            </div>
            <div className="w-[64px] text-white lg:block hidden">
              <p className="cursor-pointer">Stats</p>
              <p className="cursor-pointer">Teams</p>
              <p className="cursor-pointer">News</p>
              <p className="cursor-pointer">History</p>
              <p className="cursor-pointer">About</p>
              <p className="cursor-pointer">Store</p>
            </div>
            <div className="w-[150px] text-white lg:block hidden">
              <p className="cursor-pointer text-[20px]">ALSO VISIT</p>
              <div className="mt-2">
                <p className="cursor-pointer">UEFA.com</p>
                <p className="cursor-pointer">inside UEFA</p>
                <p className="cursor-pointer">UEFA Foundation</p>
              </div>
            </div>
            <div className="w-[215px] text-white lg:block hidden">
              <p className="cursor-pointer text-[20px]">CHANGE LANGUAGE</p>
              <div className="mt-2">
                <p className="cursor-pointer">English</p>
                <p className="cursor-pointer">French</p>
                <p className="cursor-pointer">Deutsch</p>
                <p className="cursor-pointer">Pyccnn</p>
                <p className="cursor-pointer">Esponal</p>
                <p className="cursor-pointer">Italiano</p>
                <p className="cursor-pointer">Portuges</p>
              </div>
            </div>
          </div>
          <div className="sm:flex justify-between items-center mt-10 hidden">
            <div>
              <img src="/images/social.png" alt="" className="cursor-pointer" />
            </div>
            <div className="flex">
              <img src="/images/app.png" alt="" />
              <img src="/images/app1.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
