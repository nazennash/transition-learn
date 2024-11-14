import React from "react";
import image from "../assets/image.jpg";

export const Learn = () => {
  return (
    <div className="py-4">
      <div className="mx-auto text-center">
        {/* Button with Conic Gradient Border */}
        <div className="mb-10 mt-5 relative flex justify-center">
          {/* <div
            className="p-1 rounded-lg"
            style={{
              background:
                "conic-gradient(from 180deg, #ff4545, #00ff99, #006aff, #ff00ff, #ff4545)",
            }}
          > */}
          <a
            href=""
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 
                         transition-colors ease-in-out duration-300 border-4"
            style={{
              borderImage:
                "conic-gradient(#ff4545, #00ff99, #006aff, #ff00ff, #ff4545) 1",
              borderImageSlice: 1,
            }}
          >
            Click me!
          </a>
          {/* </div> */}
        </div>

        {/* Pulsing Button */}
        <a
          href=""
          className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 
                     transition-colors ease-in-out duration-700 delay-1000 animate-pulse"
        >
          Click me!
        </a>

        {/* Loading Skeleton */}
        <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto mt-5">
          <div className="animate-pulse flex space-x-4">
            <div className="rounded-full bg-slate-700 h-10 w-10"></div>
            <div className="flex-1 space-y-6 py-1">
              <div className="h-2 bg-slate-700 rounded"></div>
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                  <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                </div>
                <div className="h-2 bg-slate-700 rounded"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Image with Hover Scaling Effect */}
        <div className="flex justify-center mt-5 border">
          <img
            src={image}
            alt="Sample"
            className="w-1/2 transform hover:scale-110 transition-transform ease-in-out duration-700 delay-1000"
          />
        </div>
      </div>
    </div>
  );
};
