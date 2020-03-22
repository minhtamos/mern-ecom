import React from "react";
import { FooterTitle } from "./Footer/FooterTitle";
import { FooterInfo } from "./Footer/FooterInfo";
import { faHome, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FooterCopyRight } from "./Footer/FooterCopyRight";

export const Footer = () => {
  return (
    <div>
      <div
        className="w-full flex p-16"
        style={{ backgroundColor: "#171717", color: "#999999" }}
      >
        <div className="flex-1">
          <FooterTitle title="CONTACT US" />
          <FooterInfo
            icon={faHome}
            title="9923 South Avenue Street, New York City."
          />
          <FooterInfo icon={faPhone} title="+880- 123-456-789" />
          <FooterInfo icon={faEnvelope} title="tam310599@gmail.com" />
        </div>
        <div className="flex-1">
          <FooterTitle title="NEWSLETTER" />
          <p className="mt-4">
            Quisque a nunc interdum tellus placerat cursus. Quisque facilisis
            dapibus facilisis! Vivamus dictum lectus ut porta volutpat.
          </p>
          <input
            type="text"
            className="outline-none text-black mt-4 p-4 rounded w-1/2"
            placeholder="Enter email"
          />
          <br />
          <button className="py-2 px-4 text-white bg-red-600 mt-4 rounded active:bg-red-800 outline-none focus:outline-none">
            SUBSCRIBE
          </button>
        </div>
      </div>
      <FooterCopyRight />
    </div>
  );
};