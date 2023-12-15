// import React from 'react';
"use client"
import React from 'react';

export default function Article({category, heading, subheading, imgsrc  }) {
  return (
    <div><div className="relative w-[43.25rem] h-[28.38rem] shrink-0">
    <div className="absolute top-[0rem] left-[0rem] shrink-0 flex flex-col items-start justify-start gap-[0.88rem]">
      <img
        className="relative rounded-t rounded-b-none w-[43.25rem] h-[13.75rem] object-cover"
        alt=""
        // src="/rectangle-5@2x.png"
        src={imgsrc}
      />
      <div className="shrink-0 flex flex-col items-start justify-start py-[0rem] pr-[0rem] pl-[1.25rem] gap-[0.88rem]">
        <div className="relative font-medium">{category}</div> 
        {/* ✍️ Article */}
        <div className="w-[42rem] flex flex-col items-start justify-start relative gap-[0.63rem] text-[1.38rem]">
          <div className="flex flex-row items-start justify-start z-[0]">
            <h3 className="m-0 relative text-inherit leading-[134.17%] font-semibold font-inherit inline-block w-[37.5rem] shrink-0">
              {heading}
              {/* What if famous brands had regular fonts? Meet
              RegulaBrands! */}
            </h3>
          </div>
          <img
            className="absolute my-0 mx-[!important] top-[0.06rem] left-[39rem] w-[1.75rem] h-[1.75rem] z-[1]"
            alt=""
            src="/group-3.svg"
          />
        </div>
        <div className="shrink-0 flex flex-row items-center justify-center p-[0.63rem] text-[1.19rem] text-dimgray-100">
          <h3 className="m-0 relative text-inherit leading-[134.17%] font-normal font-inherit">
            {subheading}
            {/* I’ve worked in UX for the better part of a decade.
            From now on, I plan to rei… */}
          </h3>
        </div>
        <div className="shrink-0 flex flex-row items-center justify-start gap-[18.25rem]">
          <div className="shrink-0 flex flex-row items-center justify-start gap-[0.63rem]">
            <img
              className="relative rounded-3xl w-[3rem] h-[3rem] object-cover"
              alt=""
              src="/rectangle-3@2x.png"
            />
            <div className="relative font-semibold">
              Sarthak Kamra
            </div>
          </div>
          <div className="shrink-0 flex flex-row items-center justify-start gap-[2.5rem] text-right text-[0.88rem] text-dimgray-200">
            <div className="relative w-[5.94rem] h-[1.13rem]">
              <img
                className="absolute top-[0rem] left-[0rem] w-[1.13rem] h-[1.13rem] object-cover"
                alt=""
                src="/iconactionvisibility-24px@2x.png"
              />
              <div className="absolute top-[0rem] left-[1.63rem] font-medium">
                1.4k views
              </div>
            </div>
            <img
              className="relative w-[2.63rem] h-[2.25rem] object-cover"
              alt=""
              src="/group-2@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  </div></div>
  )
}
