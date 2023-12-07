import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const headerArray = [
    "OUR STORY",
    "SUSTAINABILITY",
    "OUR PRODUCTS",
    "ENJOY RESPONSIBLY",
    "SPONSORSHIPS",
    "CAMPAIGNS",
    "PLAYER 0.0",
  ];
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  return (
    <React.Fragment>
      <div className="h-[140px] flex items-center bg-[#163113] w-[100%] ">
        <div className="max-w-[1600px] m-auto w-[100%] flex items-center justify-between xl:px-0 px-[25px]">
          <div className="xl:max-w-[200px] xl:w-[100%]">
            <img
              src="/images/image 32.svg"
              alt=""
              className="m-auto w-[126px] h-[70px]"
            />
          </div>
          <div className="xl:flex hidden items-center justify-between max-w-[1040px] w-[100%]">
            {headerArray.map((item, index) => (
              <p
                className="font-bold text-white cursor-pointer"
                onClick={() => navigate("/heineken-experience")}
              >
                {item}
              </p>
            ))}
          </div>
          <div className="flex xl:w-[150px] w-[109px] justify-between">
            <div className="max-w-[150px] w-[100%]">
              <img src="/images/Vector.svg" alt="" className="m-auto" />
            </div>
            <div className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-[38px] h-6 text-white cursor-pointer xl:hidden"
                onClick={() => setShow(!show)}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              {show ? (
                <div
                  className="absolute px-[78px] py-[50px] bg-white right-2 w-[300px] text-[12px]"
                  style={{
                    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                  }}
                >
                  <p
                    className="text-[#142212] font-bold"
                    onClick={() => setShow(!show)}
                  >
                    OUR STORY
                  </p>
                  <p
                    className="text-[#142212] font-bold mt-[29px]"
                    onClick={() => setShow(!show)}
                  >
                    SUSTAINABILITY
                  </p>
                  <p
                    className="text-[#142212] font-bold mt-[29px]"
                    onClick={() => setShow(!show)}
                  >
                    OUR PRODUCTS
                  </p>
                  <p
                    className="text-[#142212] font-bold mt-[29px]"
                    onClick={() => setShow(!show)}
                  >
                    ENJOY RESPONSIBLY
                  </p>
                  <p
                    className="text-[#142212] font-bold mt-[29px]"
                    onClick={() => setShow(!show)}
                  >
                    SPONSORSHIPS
                  </p>
                  <p
                    className="text-[#142212] font-bold mt-[29px]"
                    onClick={() => setShow(!show)}
                  >
                    CAMPAIGNS
                  </p>
                  <p
                    className="text-[#142212] font-bold mt-[29px]"
                    onClick={() => setShow(!show)}
                  >
                    PLAYER 0.0
                  </p>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
