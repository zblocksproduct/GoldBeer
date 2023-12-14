import React, { useState } from "react";
import Footer from "../../components/footer/footer";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import * as tga from "../../components/tga-verifier.js";
import "react-datepicker/dist/react-datepicker.css";
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

export default function HeinekenExperience() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

    const [startDate, setStartDate] = useState(new Date());
  
  async function checkTrue() {
    if (await verify()) {
      openModal();
    }
  }

  async function verify() {
    const conf = {
      code: 'Z1702050243842476',
      id: 'f49652b1-a5c5-40cc-b699-b258401cd797',
    };
    const response = await tga.GatedVerifier.verify(conf);
    if (response.status) {
      // response.data.verified true means user has required NFT.
      return response.data.verified;
    } else {
      console.error(response.data.errorMessage);
      return false;
    }
  }
  return (
    <React.Fragment>
      <div className="bg-[#2F5744] h-[130px] w-[100%] flex justify-center items-center">
        <img
          src="/images/logo-1.png"
          alt=""
          onClick={() => navigate("/")}
          className="cursor-pointer"
        />
      </div>
      <div className="relative">
        <img
          src="/images/image 32.png"
          alt=""
          className=" w-[100%] zoom-75 xl:block hidden"
        />
        <img
          src="/images/image 32 (1).png"
          alt=""
          className=" w-[100%] zoom-75 xl:hidden sm:block hidden"
        />
        <img
          src="/images/image 32 (2).png"
          alt=""
          className=" w-[100%] zoom-75  sm:hidden "
        />
        <div className="absolute h-[100%] w-[100%] text-center sm:leading-[86px] leading-[46px] top-0 flex justify-center flex-col items-center">
          <p className="text-white max-w-[1050px] w-[100%] m-x-auto xl:px-0 px-[25px] font-bold koh sm:text-[70px] text-[40px] mt-[-100px]">
            Welcome to the Gold Beer Experience
          </p>
          <p className="text-center text-[20px] leading-[30px] text-white mt-[49px] xl:px-0 px-[25px]">
            Taste the story of Europe's most famous beer
          </p>
        </div>
        <div className="absolute sm:bottom-0 bottom-[-120px] w-[100%] sm:flex justify-center items-center xl:px-0 px-[25px]">
          <DatePicker className="bg-[#FFFFFF] h-[90px] cursor-pointer sm:w-[287px] w-[100%] flex justify-center items-center text-[#979494] text-[25px]" selected={startDate} onChange={(date) => setStartDate(date)} />
          <div
            onClick={checkTrue}
            className="text-[#FFFFFF] sm:ml-[30px] cursor-pointer h-[90px] sm:w-[291px] w-[100%] sm:mt-0 mt-[10px] flex justify-center items-center bg-[#337B2C] hover:bg-[#1E4A19] text-[25px]"
          >
            Claim your ticket
          </div>
        </div>
      </div>
      <div className="bg-[#2F5744] ">
        <div className="xl:px-0 px-[25px]">
          <p className="sm:text-[55px] text-[30px] xl:max-w-[1200px] m-auto kadwa font-bold text-center text-white uppercase sm:pt-[100px] pt-[220px]">
            In the heart of Prague, you will find the home of Gold Beer.
          </p>
          <p className="font-bold sm:text-[40px] text-[25px] text-[#F7F7F7] text-center sm:mt-[50px] mt-[40px]">
            What do you get?{" "}
          </p>
          <div className="flex items-center justify-center sm:mt-[30px] mt-[20px]">
            <img src="/images/check.svg" alt="" />
            <p className="sm:text-[25px] text-[18px] text-white ml-3">
              Access to the first built Gold Beer brewery (1.5hrs)
            </p>
          </div>
          <div className="flex items-center justify-center mt-[10px]">
            <img src="/images/check.svg" alt="" />
            <p className="sm:text-[25px] text-[18px] text-white ml-3">
              Two perfectly chilled beers at Pilsner's Palace, our rooftop bar where you can Czech the views
            </p>
          </div>
          <div className="flex items-center justify-center mt-[10px]">
            <img src="/images/check.svg" alt="" />
            <p className="sm:text-[25px] text-[18px] text-white ml-3">
              Have a peek inside the original brew room
            </p>
          </div>
        </div>
        <div className="mt-[120px] grid grid-cols-3 m-auto">
          <img src="/images/home.png" alt="" className="w-[100%]" />
          <img src="/images/member.png" alt="" className="w-[100%]" />
          <img src="/images/person.png" alt="" className="w-[100%]" />
        </div>
      </div>
      <Footer />
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center mx-3 ">
          <div className="bg-white p-6 rounded-[24px] shadow-md max-w-[614px] ">
            <div className="flex justify-end">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 cursor-pointer"
                onClick={closeModal}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
            <div className="flex justify-center">
              <img src="/images/motivation 2.png" alt="" />
            </div>
            <p className="text-[#333] text-[24px] font-bold text-center">
              Thank you!
            </p>
            <p className="text-[#333] text-center sm:text-[28px] text-[26px]">
              As a loyal customer, click <a href="https://zblocks.io/heineken-experience-ticket/" class="text-blue-600/100">here</a> to
              download your free Gold Beer Experience Ticket.
            </p>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}
