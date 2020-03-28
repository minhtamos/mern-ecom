import React from "react";
import { PopupIcon } from "./PopupIcon";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { faHeart, faEye } from "@fortawesome/free-regular-svg-icons";
import { ProductStars } from "../ProductDetail/ProductStars";
import { ProductType } from "../../DataType";
import { Link } from "react-router-dom";

interface props {
  product: ProductType;
}

export const ProductCard = ({ product }: props) => {
  return (
    <div>
      <div
        className="flex flex-col bg-white shadow-md mx-2 hover:shadow-2xl img-hover-darker relative group"
        style={{ width: "250px" }}
      >
        <img className=" object-cover" src={product.image} alt=""  style={{width: "250px", height: "380px"}}/>
        <div
          className="absolute top-0 left-0 w-full flex justify-center items-center
      -translate-y-5 group-hover:translate-y-0 transform duration-500 ease-in-out"
      style={{height: "380px"}}
        >
          <PopupIcon icon={faCartPlus} />
          <PopupIcon icon={faHeart} />
          <PopupIcon icon={faEye} />
        </div>
        <div className="w-56 px-1 py-2 h-24 flex flex-col justify-around">
          <Link
            to={`/detail/${product.id}`}
            className=" font-semibold inline-block ml-4 py-1 hover:text-red-700"
          >
            {product.title}
          </Link>
          <div className="flex justify-between">
            <p className="font-semibold ml-4">${product.salePrice}</p>
            <ProductStars stars={4.5} onlyStars />
          </div>
        </div>
      </div>
    </div>
  );
};
