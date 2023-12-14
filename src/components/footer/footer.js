import React from "react";

export default function Footer() {
  const experience = [
    "About the Experience",
    "Discover our tours",
    "FaQ`s",
    "Service & Contact",
    "Children & Minors",
    "Rescheduling and refund",
    "Gift card",
  ];
  const event = ["Events", "Discover our spaces", "Our services"];
  return (
    <React.Fragment>
      <div className="bg-[#2F5744] grid lg:grid-cols-4 md:grid-cols-1 py-[30px] xl:px-[100px] px-[25px]">
        <div className="">
          <img
            src="/images/logo-1.png"
            alt=""
            className="w-[151px] h-[90px]  lg:m-0 m-auto"
          />
        </div>
        <div>
          <div className="max-w-[336px] w-[100%]  sm:mt-0 mt-5">
            <p className="text-[#D7F5E7] kadwa text-[16px] font-bold sm:text-start text-center ">
              The experience
            </p>
            {experience.map((item, index) => (
              <div key={index}>
                <p className="text-[#FFFFFF] text-xl kadwa font-bold py-2">
                  {item}
                </p>
              </div>
            ))}
            <div className="flex justify-between">
              <p className="text-[#FFFFFF] text-xl kadwa font-bold py-2">
                Renewed Gold Beer Experience
              </p>
              <div className="cursor-pointer py-[3px] px-[18px] bg-[#26660D] rounded-[52px] h-fit kadwa text-white">
                New
              </div>
            </div>
            <div className="w-[130px] bg-[#26660D] h-[10px] mt-3" />
          </div>
        </div>
        <div>
          <div className="max-w-[197px] w-[100%]  sm:mt-0 mt-5">
            <p className="text-[#D7F5E7] kadwa text-[16px] font-bold sm:text-start text-center ">
              Meetings & Events
            </p>
            {event.map((item, index) => (
              <div key={index}>
                <p className="text-[#FFFFFF] text-xl kadwa font-bold py-2">
                  {item}
                </p>
              </div>
            ))}

            <div className="w-[166px] h-[32px] bg-[#D7F5E7]  mt-3 kadwa font-bold flex justify-center items-center text-white">
              Book your event
            </div>
          </div>
        </div>
        <div>
          <div className=" w-[100%] flex sm:justify-end justify-center sm:mt-0 mt-5 ">
            <div className="sm:max-w-[95px] max-w-[151px] w-[100%]">
              <p className="text-[#FFFFFF] text-xl kadwa font-bold sm:text-start text-center">
                Follow us
              </p>
              <div className="sm:block flex justify-between">
                <div
                  className="w-[70px] h-[70px] rounded-[50%] flex justify-center items-center mt-3"
                  style={{ border: "2px solid #26660D" }}
                >
                  <img src="/images/insta.svg" alt="" />
                </div>
                <div
                  className="w-[70px] h-[70px] rounded-[50%] flex justify-center items-center mt-3"
                  style={{ border: "2px solid #26660D" }}
                >
                  <img src="/images/facebook.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border border-r-0 border-l-0 border-b-0 border-t-[#444942] w-[100%] bg-[#2F5744] xl:h-[130px]  flex items-center px-[100px] ">
        <div className="flex items-center w-[100%]">
          <div className="xl:w-[90%] ">
            <div className="xl:flex hidden justify-between w-full">
              <p className="kadwa font-bold  text-white">© 2023 Copyright</p>
              <p className="text-[#FFFFFF] kadwa font-bold">Cookie Settings</p>
              <p className="text-[#FFFFFF] kadwa font-bold">Privacy Policy</p>
              <p className="text-[#FFFFFF] kadwa font-bold">Cookie Policy</p>
              <p className="text-[#FFFFFF] kadwa font-bold">
                Terms & Conditions
              </p>
              <p className="text-[#FFFFFF] kadwa font-bold">FaQ`s</p>
              <p className="text-[#FFFFFF] kadwa font-bold">House Rules</p>
              <p className="text-[#FFFFFF] kadwa font-bold">Gold Beer Company</p>
            </div>
          </div>
          <div className="xl:w-[10%] xl:flex justify-end hidden ">
            <img src="images/screen.svg" alt="" />
          </div>
        </div>
      </div>
      <div className="bg-[#151C13]  p-[25px] xl:hidden">
        <div className="grid sm:grid-cols-3 grid-cols-1 items-center">
          <p className="kadwa font-bold  text-white sm:block hidden">
            © 2023 Copyright
          </p>
          <div className="sm:flex sm:w-[360px] w-[160px]  m-auto  justify-between">
            <div>
              <p className="text-[#FFFFFF] kadwa font-bold sm:mt-0 mt-3">
                Cookie Settings
              </p>
              <p className="text-[#FFFFFF] kadwa font-bold sm:mt-0 mt-3">
                Privacy Policy
              </p>
              <p className="text-[#FFFFFF] kadwa font-bold sm:mt-0 mt-3">
                Cookie Policy
              </p>
              <p className="text-[#FFFFFF] kadwa font-bold sm:mt-0 mt-3">
                Terms & Conditions
              </p>
            </div>
            <div>
              <p className="text-[#FFFFFF] kadwa font-bold sm:mt-0 mt-3">
                FaQ`s
              </p>
              <p className="text-[#FFFFFF] kadwa font-bold sm:mt-0 mt-3">
                House Rules
              </p>
              <p className="text-[#FFFFFF] kadwa font-bold sm:mt-0 mt-3">
                Gold Beer Company
              </p>
            </div>
          </div>
          <p className="kadwa font-bold  text-white sm:hidden text-center mt-4 ">
            © 2023 Copyright
          </p>
          <div className="flex sm:justify-end justify-center sm:mt-0 mt-4">
            <img src="images/screen.svg" alt="" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
