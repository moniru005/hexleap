import React from "react";
import Image from "next/image";
import "./Sports.css";

const Sports = () => {
  return (
    <div className="max-w-6xl mx-auto py-16">
      <div className="px-4 lg:px-0 mb-8">
        <h1 className="text-2xl font-[700]">Sports</h1>
        <hr className="w-20 border-[#738FFF]" />
      </div>
      {/* cards */}
      <div className="flex flex-col lg:flex-row justify-between gap-4">
        {/* card-1 */}
        <div className="w-full lg:w-[238px] bg-white p-2">
          <div className="card1 w-full h-[385px]"></div>
          <div className="font-inter">
            <h1 className="my-3 text-[17px] font-[500]">
              Sacramento River Cats
            </h1>
            <div className="flex flex-row justify-between bg-[#F7F7F8] p-2">
              <div className="space-y-1">
                <p className="text-[12px] text-[#525965] font-[400]">
                  Total Events
                </p>
                <h2 className="text-[14px] font-[500]">48 Events</h2>
              </div>
              <div className="space-y-1">
                <p className="text-[12px] text-[#525965] font-[400]">Sport</p>
                <h2 className="text-[14px] font-[500]">Baseball</h2>
              </div>
            </div>
          </div>
        </div>
        {/* card-2 */}
        <div className="w-full lg:w-[238px] bg-white p-2">
          <div className="card2 w-full h-[385px]"></div>
          <div className="font-inter">
            <h1 className="my-3 text-[17px] font-[500]">Las Vegas Aviators </h1>
            <div className="flex flex-row justify-between bg-[#F7F7F8] p-2">
              <div className="space-y-1">
                <p className="text-[12px] text-[#525965] font-[400]">
                  Total Events
                </p>
                <h2 className="text-[14px] font-[500]">48 Events</h2>
              </div>
              <div className="space-y-1">
                <p className="text-[12px] text-[#525965] font-[400]">Sport</p>
                <h2 className="text-[14px] font-[500]">Baseball</h2>
              </div>
            </div>
          </div>
        </div>
        {/* card-3 */}
        <div className="w-full lg:w-[238px] bg-white p-2">
          <div className="card3 w-full h-[385px]"></div>
          <div className="font-inter">
            <h1 className="my-3 text-[17px] font-[500] capitalize">
              new jersey devils{" "}
            </h1>
            <div className="flex flex-row justify-between bg-[#F7F7F8] p-2">
              <div className="space-y-1">
                <p className="text-[12px] text-[#525965] font-[400]">
                  Total Events
                </p>
                <h2 className="text-[14px] font-[500]">48 Events</h2>
              </div>
              <div className="space-y-1">
                <p className="text-[12px] text-[#525965] font-[400]">Sport</p>
                <h2 className="text-[14px] font-[500]">Baseball</h2>
              </div>
            </div>
          </div>
        </div>
        {/* card-4 */}
        <div className="w-full lg:w-[238px] bg-white p-2">
          <div className="card2 w-full h-[385px]"></div>
          <div className="font-inter">
            <h1 className="my-3 text-[17px] font-[500] capitalize">Las Vegas Aviators </h1>
            <div className="flex flex-row justify-between bg-[#F7F7F8] p-2">
              <div className="space-y-1">
                <p className="text-[12px] text-[#525965] font-[400]">
                  Total Events
                </p>
                <h2 className="text-[14px] font-[500]">48 Events</h2>
              </div>
              <div className="space-y-1">
                <p className="text-[12px] text-[#525965] font-[400]">Sport</p>
                <h2 className="text-[14px] font-[500]">Baseball</h2>
              </div>
            </div>
          </div>
        </div>
        {/* card-5 */}
        <div className="w-full lg:w-[238px] bg-white p-2">
          <div className="border border-[#006555]">
            <div className="card5 relative w-full h-[218px]">
              <p className="absolute top-0 right-0 bg-black text-white px-3 ">
                Ad
              </p>
            </div>
            <div className="font-inter p-4">
              <h1 className="my-3 text-[17px] font-[500]">
                Advertisement title
              </h1>
              <p className="text-[12px] text-[#525965] font-[400]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* See More Button */}
      <div className="py-10 flex justify-center">
        <button className="bg-[#2C9CF0] text-white px-6 py-2">See More</button>
      </div>
    </div>
  );
};

export default Sports;
