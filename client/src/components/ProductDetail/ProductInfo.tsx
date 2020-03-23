import React, { useState, useEffect } from "react";
import classnames from "classnames";

const btnclasses =
  "flex justify-between font-bold items-center jo-font focus:outline-none px-6 py-3 uppercase mr-2 transform duration-300";

export const ProductInfo = () => {
  const sections = ["description", "reviews", "infomation", "tags"];
  const [selectedSection, setSection] = useState("description");
  return (
    <div className="p-16" style={{ backgroundColor: "#F6F6F6" }}>
      <div className="flex">
        {sections.map(s => {
          return (
            <button
              className={classnames(
                btnclasses,
                selectedSection === s
                  ? "bg-red-600 text-white"
                  : "text-gray-800"
              )}
              onClick={() => setSection(s)}
            >
              {s}
            </button>
          );
        })}
      </div>
      <div className="p-16 bg-white mt-8 shadow-lg">DUMMY PRODUCT NAME</div>
    </div>
  );
};