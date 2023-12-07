import React, { useState } from "react";
import Header from "../../components/uefa/header";
import MenuBar from "../../components/uefa/menu-bar";
import Footer from "../../components/uefa/footer";
import * as tga from "../../components/tga-verifier.js";

export default function UEFA() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  async function checkTrue() {
    if (await verify()) {
      openModal();
    }
  }

  async function verify() {
    const conf = {
      code: 'Z1699467566545535',
      id: '23d47815-8966-4930-bcba-a7969353b42e',
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
      <Header />
      <MenuBar />
      <div className="relative">
        <img
          src="/images/bg.png"
          alt=""
          className="sm:h-[961px] h-[1190px] w-[100%]"
        />
        <div className="absolute top-0 pt-[120px]">
          <div className="lg:px-[100px] px-[25px]">
            <div className="max-w-[924px] w-[100%] sm:flex justify-between items-center">
              <img src="images/logo2.png" alt="" className="sm:m-0 m-auto" />
              <div className="max-w-[624px] w-[100%] sm:text-[50px] text-[35px] font-bold leading-[52px] text-white">
                Win VIP tickets to the 2023/2024 Champions League Final
              </div>
            </div>
            <p className="max-w-[924px] sm:mt-[50px] mt-[30px] w-[100%] sm:text-[22px] text-[18px] text-white">
              Congratulations! As a Heineken token owner, you qualify to enter
              to our sweepstake for a chance to win tickets to the Champions
              League Final at Wembley Stadium, Saturday June 1, 2024.{" "}
            </p>
            <div className="max-w-[841px] w-[100%] sm:mt-[60px] mt-[30px] sm:flex justify-between">
              <div className="text-white max-w-[583px] w-[100%]">
                <p className="sm:text-[25px] text-[20px] font-bold">
                  Sweepstake Winner
                </p>
                <p className="sm:text-[20px] text-[16px] sm:mt-[15px] mt-[10px]">
                  2x VIP UCL FINAL Tickets including a private box and balcony,
                  3-course dinner, and a 1-night hotel reservation.
                </p>
              </div>
              <div className="text-white max-w-[179px] w-[100%]">
                <p className="sm:text-[25px] text-[20px] font-bold">
                  Runner Up
                </p>
                <p className="sm:text-[20px] text-[16px] sm:mt-[15px] mt-[10px]">
                  2x UCL Final Tickets
                </p>
              </div>
            </div>
            <div
              onClick={checkTrue}
              className="max-w-[393px] w-[100%] cursor-pointer h-[70px] flex justify-center items-center text-[25px] font-semibold text-white bg-[#0D3AFF] hover:bg-[#0728B4] rounded-[10px] sm:mt-[60px] mt-[30px]"
            >
              Enter the Sweepstake
            </div>
          </div>
        </div>
      </div>
      <div className="py-[21px]">
        <p className="text-center text-[#595A8B] font-semibold text-sm">
          Official Global Sponsors
        </p>
        <div className="flex justify-center ">
          <div className="flex flex-wrap justify-center ">
            <img src="/images/21.png" alt="" className="mt-3" />
            <img src="/images/22.png" alt="" className="mt-3" />
            <img src="/images/23.png" alt="" className="mt-3" />
            <img src="/images/24.png" alt="" className="mt-3" />
            <img src="/images/25.png" alt="" className="mt-3" />
            <img src="/images/26.png" alt="" className="mt-3" />
            <img src="/images/27.png" alt="" className="mt-3" />
            <img src="/images/28.png" alt="" className="mt-3" />
          </div>
        </div>
      </div>
      <Footer />
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center ">
          <div className="bg-white p-6 rounded-[24px] shadow-md max-w-[430px] ">
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
              Success!
            </p>
            <p className="text-[#333] text-center">
              You have been entered into the sweepstakes! We will be choosing
              the winner on <b> 25th December</b>. Best of luck!
            </p>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}
