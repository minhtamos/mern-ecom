import React from "react";

import { Banner } from "../components/Banner";
import { FeatureCategories } from "../components/FeatureCategories";
import { MiddleTitle } from "../components/MiddleTitle";
import { ProductGrid } from "../components/ProductGrid";
import { MiddleBanner } from "../components/MiddleBanner";
import { ProductSlider } from "../components/ProductSlider";
import { Reviews } from "../components/Reviews";
import { Advantages } from "../components/Advantages";

export const Home = () => {
  return (
    <div className="w-full">
        <Banner />
        <FeatureCategories/>
        <MiddleTitle title="New Arrivals"/>
        <ProductGrid products={[]}/>
        <MiddleBanner/>
        <MiddleTitle title="Featured Products"/>
        <ProductSlider/>
        <Reviews/>
        <Advantages/>
    </div>
  );
};
