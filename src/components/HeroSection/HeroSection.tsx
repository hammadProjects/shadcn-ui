import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="bg-white">
      <div className="w-[60%] mx-auto py-10 flex justify-between items-start">
        <div>
          <h1 className="text-5xl font-bold">
            Super Delicious Pizza in
            <br />
            <span className="text-orange-500">Only 45 Minutes</span>
          </h1>
          <p className="max-w-[310px] my-6">
            Enjoy a Free Meal if Your Order Takes More Than 45 Minutes!
          </p>
          <Button className="rounded-3xl">Get your pizza now</Button>
        </div>
        <div className="basis-1/3">
          <Image
            src="/pizza-main.png"
            alt="pizza-main"
            width={400}
            height={400}
            layout="responsive"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
