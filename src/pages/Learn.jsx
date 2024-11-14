import React from "react";
import image from "../assets/image.jpg";

export const Learn = () => {
  return (
    <>
      <div className="py-4">
        <div className="mx-auto text-center">
          <div className="space-x-12 mb-10 mt-5">
            <a
              href=""
              className="
            bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
            >
              Click me!
            </a>

            <a
              href=""
              className="
            bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700
            transition-colors ease-in-out duration-700 delay-1000 animate-pulse"
            >
              Click me!
            </a>
          </div>

          <div class="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
            <div class="animate-pulse flex space-x-4">
              <div class="rounded-full bg-slate-700 h-10 w-10"></div>
              <div class="flex-1 space-y-6 py-1">
                <div class="h-2 bg-slate-700 rounded"></div>
                <div class="space-y-3">
                  <div class="grid grid-cols-3 gap-4">
                    <div class="h-2 bg-slate-700 rounded col-span-2"></div>
                    <div class="h-2 bg-slate-700 rounded col-span-1"></div>
                  </div>
                  <div class="h-2 bg-slate-700 rounded"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-5 border">
            <img
              src={image}
              alt=""
              className="w-1/2 transform hover:scale-110 transition-transform ease-in-out duration-700 delay-1000"
            />
          </div>
        </div>
      </div>
    </>
  );
};
