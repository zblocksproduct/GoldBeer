import React from "react";

export default function Header() {
  return (
    <div
      className="h-[45px] pl-[5px] pr-[20px] flex justify-between items-center"
      style={{
        background:
          "linear-gradient(90deg, #B8B8B8 13.05%, rgba(184, 184, 184, 0.70) 25.94%, rgba(184, 184, 184, 0.50) 37.28%, rgba(184, 184, 184, 0.40) 51.29%, rgba(184, 184, 184, 0.30) 69.54%, rgba(184, 184, 184, 0.60) 76.47%, rgba(184, 184, 184, 0.80) 82.94%, #B8B8B8 88.94%)",
      }}
    >
      <img src="/images/logo1.svg" alt="" />
      <img
        src="/images/6.png"
        alt=""
        className="cursor-pointer mr-[7px] lg:hidden "
      />

      <div className="lg:flex items-center  hidden">
        <img src="/images/1.png" alt="" className="cursor-pointer mr-[7px] " />
        <img src="/images/2.png" alt="" className="cursor-pointer mr-[7px]" />
        <img src="/images/3.png" alt="" className="cursor-pointer mr-[7px]" />
        <img src="/images/4.png" alt="" className="cursor-pointer mr-[7px]" />
        <img src="/images/5.png" alt="" className="cursor-pointer mr-[7px]" />
        <img src="/images/6.png" alt="" className="cursor-pointer mr-[7px]" />
        <img src="/images/7.png" alt="" className="cursor-pointer" />
      </div>
    </div>
  );
}
