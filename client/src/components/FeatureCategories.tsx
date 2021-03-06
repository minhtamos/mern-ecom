import React from "react";
import { Link } from "react-router-dom";

export const FeatureCategories = () => {
  return (
    <div className="flex mx-16 mt-8 xs:flex-col">
      <div className="flex-1 photobox relative" style={{}}>
        <img
          src="https://preview.uideck.com/items/shopr-theme/assets/img/feature/img1.jpg"
          alt=""
          // style={{width: '80%'}}
        />
        <div
          className="absolute top-0 left-0 flex flex-col justify-center items-center"
          style={{ top: "40%", width: '80%' }}
        >
          <div
            className="w-3/4 flex flex-col justify-center items-center py-2"
            style={{ backgroundColor: "rgba(255,255,255,0.7)" }}
          >
            <p className=" jo-font font-bold text-3xl md:text-xl text-gray-800 font-black">
              MEN SALE
            </p>
            <p>New Collection</p>
          </div>
          <Link
            to="/category/all"
            className="outline-none py-3 px-8 mt-4 md:py-2 md:px-4 bg-btn hover:bg-btn-hovered cursor-pointer text-white rounded"
          >
            SHOP NOW
          </Link>
        </div>
      </div>
      <div className="flex-1 photobox relative">
        <img
          src="https://preview.uideck.com/items/shopr-theme/assets/img/feature/img3.jpg"
          alt=""
        />
        <div
          className="w-full absolute top-0 left-0 flex flex-col justify-center items-center"
          style={{ top: "40%", width: '80%' }}
        >
          <div
            className="w-3/4 flex flex-col justify-center items-center py-2"
            style={{ backgroundColor: "rgba(255,255,255,0.7)" }}
          >
            <p className=" jo-font font-bold text-3xl md:text-xl font-black text-gray-800">
              WOMEN'S
            </p>
            <p>Up to 40% OFF</p>
          </div>
          <Link
            to="/category/all"
            className="outline-none py-3 px-8 mt-4 md:py-2 md:px-4 bg-btn hover:bg-btn-hovered cursor-pointer text-white rounded"
          >
            SHOP NOW
          </Link>
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-between sm:hidden">
        <div className="flex-1 photobox relative">
          <img
            src="https://preview.uideck.com/items/shopr-theme/assets/img/feature/img2.jpg"
            alt=""
          />
          <div
            className="w-full absolute top-0 left-0 flex flex-col justify-center items-center"
            style={{ top: "40%", width: '80%' }}
          >
            <div
              className="w-3/4 flex flex-col justify-center items-center py-2"
              style={{ backgroundColor: "rgba(255,255,255,0.7)" }}
            >
              <p className=" jo-font font-black text-3xl md:text-base text-gray-800">
                WOMEN'S
              </p>
              <p className="md:text-xs">Up to 40% OFF</p>
            </div>
            <Link
              to="/category/all"
              className="outline-none py-3 px-8 mt-4 md:py-2 md:px-4 bg-btn hover:bg-btn-hovered cursor-pointer text-white rounded"
            >
              SHOP NOW
            </Link>
          </div>
        </div>
        <div
          className="flex-1 photobox relative"
          style={{ marginTop: "0" }}
        >
          <img
            src="https://preview.uideck.com/items/shopr-theme/assets/img/feature/img4.jpg"
            alt=""
          />
          <div
            className="absolute top-0 left-0 flex flex-col justify-center items-center"
            style={{ top: "40%", width: '80%' }}
          >
            <div
              className="w-3/4 flex flex-col font-black justify-center items-center py-2"
              style={{ backgroundColor: "rgba(255,255,255,0.7)" }}
            >
              <p className=" jo-font font-black text-3xl md:text-base text-gray-800">
                WOMEN'S
              </p>
              <p className="md:text-xs">Up to 40% OFF</p>
            </div>
            <Link
              to="/category/all"
              className="outline-none py-3 px-8 mt-4 md:py-2 md:px-4 bg-btn hover:bg-btn-hovered cursor-pointer text-white rounded"
            >SHOP NOW</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
