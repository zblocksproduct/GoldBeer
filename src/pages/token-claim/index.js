import React from "react";
import Header from "../../components/header/header";

export default function TokenClaim() {
  return (
    <React.Fragment>
      <Header />
      <div className="sm:mt-[120px] mt-[80px] ">
        <p className="text-center text-[#979494] sm:text-[20px] text-[18px] font-semibold">
          REWARDS CAMPAIGN
        </p>
        <p className="text-[#163113] kadwa font-bold sm:text-[60px] text-[35px] text-center mt-[30px] sm:px-0 px-[25px]">
          The Gold Beer Odyssey{" "}
        </p>
        <p className="text-[#979494] poppins font-medium sm:text-base text-sm leading-[28px] xl:max-w-[967px] max-w-[910px] w-[100%] m-auto text-center mt-[15px] xl:px-0 px-[25px]">
          We're not just beer enthusiasts; we're embarking on an epic beer journey, and we invite you to join us on this adventure.
          Whether we're delving into the craft of intricate brews or savoring the timeless classics, we're your reliable companions in the world of beer.{" "}
        </p>
      </div>
      <div className="bg-[#163113] sm:mt-[120px] mt-[80px] sm:pt-[120px] pt-[80px] xl:px-0 px-[25px]">
        <div className="max-w-[924px] w-[100%] m-auto">
          <p className="sm:text-[60px] text-[35px] kadwa font-bold text-[#F7F7F7] text-center uppercase">
            Claim your Gold Beer
            <br /> Token Below
          </p>
          <div className="sm:flex items-center justify-between sm:mt-[50px] mt-[30px]">
            <div className="max-w-[547px] w-[100%]  sm:hidden ">
              <p className="font-bold text-[30px] text-[#F7F7F7]">
                Congratulations!{" "}
              </p>
              <p className="text-[#F7F7F7] sm:mt-[30px] mt-[20px] leading-[28px]">
                Claim this Gold Beer reward to unlock beer-related discounts and
                prizes with our brand and other Gold Beer-owned brands.
                <br />
                <br />The more tokens you claim, the more we will personalize our rewards to suit your taste in beer!{" "}
              </p>
            </div>
            <img
              src="images/image 18.png"
              alt=""
              className="w-[328px] h-[340px] sm:mt-0 mt-[20px]"
            />
            <div className="max-w-[547px] w-[100%] ml-[35px] sm:block hidden">
              <p className="font-bold text-[30px] text-[#F7F7F7]">
                Congratulations!{" "}
              </p>
              <p className="text-[#F7F7F7] mt-[30px] leading-[28px]">
                Claim this Heineken Original reward to unlock discounts and
                prizes with Heineken and Heineken-owned brands.
                <br /> Earn prizes with our partners too, such as entering into
                a Sweepstake for VIP tickets to the 2024 UEFA Champions League
                Final.{" "}
              </p>
            </div>
          </div>
          <div className="sm:flex justify-center sm:mt-20 mt-[60px]">
            <div
              className="sm:w-[317px] cursor-pointer w-[100%] h-[68px] rounded-[6px] flex justify-center items-center"
              style={{ background: "rgba(255, 255, 255, 0.30)" }} onClick={() => {
            window.location.href =
              "https://wallettest.zblocks.io?gift=41c7c0fe169c55ed434682429989&hint=google";
          }}
            >
              <img src="/images/google.svg" alt="" />
              <p className="ml-[10px] text-[20px] font-semibold text-[#FFFFFF]" >
                Claim with Google
              </p>
            </div>
            <div
              className="sm:w-[317px] cursor-pointer w-[100%] h-[68px] rounded-[6px] flex justify-center items-center sm:ml-[30px] sm:mt-0 mt-[21px]"
              style={{ background: "rgba(255, 255, 255, 0.30)" }} onClick={() => {
            window.location.href =
              "https://wallettest.zblocks.io?gift=41c7c0fe169c55ed434682429989&hint=microsoft";
          }}
            >
              <img src="/images/microsoft.svg" alt="" />
              <p className="ml-[10px] text-[20px] font-semibold text-[#FFFFFF]" >
                Claim with Microsoft
              </p>
            </div>
          </div>
          <div className="sm:mt-[120px] mt-[80px]">
            <p className="font-bold kadwa sm:text-[45px] text-[35px] text-[#F7F7F7] uppercase text-center">
              Claim them all...
            </p>
            <div className="sm:mt-[50px] mt-[35px] flex overflow-x-auto max-w-[100%]">
              <img src="/images/image 19.png" alt="" className="w-[283px]" />
              <img
                src="/images/Group 8.png"
                alt=""
                className="sm:ml-[30px] ml-[10px] w-[283px]"
              />
              <img
                src="/images/image 20.png"
                alt=""
                className="sm:ml-[30px] ml-[10px] w-[283px]"
              />
            </div>
          </div>
          <div className="sm:mt-[120px] mt-[80px] py-[45px]">
            <img src="/images/logo.svg" alt="" className="m-auto" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
