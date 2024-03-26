import React from "react";
import "./Collection.css";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const Collection = () => {
  return (
    <div className="max-w-6xl mx-auto py-16">
      <div className="px-4 lg:px-0 mb-8 flex flex-col items-center text-center">
        <h1 className="text-[50px] font-[700]">Collection Spotlight</h1>
        <p className="py-2 w-full lg:w-[917px] text-[14px] font-[400] font-inter">
          Discover extraordinary moments with our Spotlight Collection
          metatickets—exclusive access to premium events for an unforgettable
          experience. Grab yours today!
        </p>
      </div>
      {/* cards */}
      <div className="lg:relative z-20 flex flex-col lg:flex-row justify-around items-center gap-4 px-4 lg:px-32">
        <div className="absolute top-[250px] z-50 w-full lg:flex hidden">
          <div className="absolute left-10 border py-3 px-0.5 border-[#2C9CF0]">
            <MdKeyboardArrowLeft className="text-5xl text-[#2C9CF0]" />
          </div>
          <div className="absolute right-10 border py-3 px-0.5 border-[#2C9CF0]">
            <MdKeyboardArrowRight className="text-5xl text-[#2C9CF0]" />
          </div>
        </div>

        {/* card-1 */}
        <div className="relative w-full lg:w-[238px] bg-white p-2 border">
          {/* dotted */}
          <div className="absolute top-[400px] left-0 py-4  w-full flex flex-row justify-between">
            <div className="absolute top-1 -left-3 bg-[#F7F7F8] size-6 rounded-full"></div>

            <svg
              className="absolute left-6 xxs:w-[230px] xs:w-[335px] lg:w-[185px]"
              height="2"
              viewBox="0 0 211 1"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                y1="0.520078"
                x2="211"
                y2="0.520078"
                stroke="#A9ACB2"
                stroke-width="0.959843"
                stroke-dasharray="5.76 5.76"
              />
            </svg>

            <div className="absolute top-1 -right-3 bg-[#F7F7F8] size-6 rounded-full"></div>
          </div>

          {/* image */}
          <div className="card-c-1 w-full h-[385px]"></div>

          {/* content */}
          <div className="font-inter mt-12">
            <h1 className="my-3 text-[17px] font-[500] text-center">
              Las Vegas Aviators
            </h1>
            <div className="w-full">
              <p className="text-[14px] font-[400] uppercase text-center">
                Oct 15 | Sun | 4:30 PM
              </p>
              <p className="py-2 text-[14px] text-[#525965] font-[400] uppercase text-center">
                Las Vegas Ballpark, Las Vegas, Nevada
              </p>
              {/* button */}
              <div className="w-full flex justify-center py-2">
                <button className="w-full bg-[#1D1D1F] text-[13px] font-[500] font-inter text-white px-6 py-2">
                  Take Flight Collection
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* card-2 */}
        <div className="relative w-full lg:w-[238px] bg-white p-2 border">
          {/* dotted */}
          <div className="absolute top-[400px] left-0 py-4  w-full flex flex-row justify-between">
            <div className="absolute top-1 -left-3 bg-[#F7F7F8] size-6 rounded-full"></div>

            <svg
              className="absolute left-6 xxs:w-[230px] xs:w-[335px] lg:w-[185px]"
              width="185"
              height="2"
              viewBox="0 0 211 1"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                y1="0.520078"
                x2="211"
                y2="0.520078"
                stroke="#A9ACB2"
                stroke-width="0.959843"
                stroke-dasharray="5.76 5.76"
              />
            </svg>

            <div className="absolute top-1 -right-3 bg-[#F7F7F8] size-6 rounded-full"></div>
          </div>

          {/* image */}
          <div className="card-c-2 w-full h-[385px]"></div>

          {/* content */}
          <div className="font-inter mt-12">
            <h1 className="my-3 text-[17px] font-[500] text-center">
              Las Vegas Aviators
            </h1>
            <div className="w-full">
              <p className="text-[14px] font-[400] uppercase text-center">
                Oct 15 | Sun | 4:30 PM
              </p>
              <p className="py-2 text-[14px] text-[#525965] font-[400] uppercase text-center">
                Sutter Health Park, Sacramento, California
              </p>
              {/* button */}
              <div className="w-full flex justify-center py-2">
                <button className="w-full bg-[#1D1D1F] text-[13px] font-[500] font-inter text-white px-6 py-2">
                  Orange Collection
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* card-3 */}
        <div className="relative w-full lg:w-[238px] bg-white p-2 border">
          {/* dotted */}
          <div className="absolute top-[400px] left-0 py-4  w-full flex flex-row justify-between">
            <div className="absolute top-1 -left-3 bg-[#F7F7F8] size-6 rounded-full"></div>

            <svg
              className="absolute left-6 xxs:w-[230px] xs:w-[335px] lg:w-[185px]"
              width="185"
              height="2"
              viewBox="0 0 211 1"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                y1="0.520078"
                x2="211"
                y2="0.520078"
                stroke="#A9ACB2"
                stroke-width="0.959843"
                stroke-dasharray="5.76 5.76"
              />
            </svg>

            <div className="absolute top-1 -right-3 bg-[#F7F7F8] size-6 rounded-full"></div>
          </div>

          {/* image */}
          <div className="card-c-3 w-full h-[385px]"></div>

          {/* content */}
          <div className="font-inter mt-12">
            <h1 className="my-3 text-[17px] font-[500] text-center">
              Las Vegas Aviators
            </h1>
            <div className="w-full">
              <p className="text-[14px] font-[400] uppercase text-center">
                Oct 15 | Sun | 4:30 PM
              </p>
              <p className="py-2 text-[14px] text-[#525965] font-[400] uppercase text-center">
                Las Vegas Ballpark, Las Vegas, Nevada
              </p>
              {/* button */}
              <div className="w-full flex justify-center py-2">
                <button className="w-full bg-[#1D1D1F] text-[13px] font-[500] font-inter text-white px-6 py-2">
                  Take Flight Collection
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
