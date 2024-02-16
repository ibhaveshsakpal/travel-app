"use client";
import Image from "next/image";
import React from "react";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32  md:gap-28 lg:py-20 xl:flex-row">
      <div className="hero-map" />

      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <Image
          className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"
          src="/camp.svg"
          width={50}
          height={50}
          alt="camp"
        />
        <h1 className="bold-52 lg:bold-88">Lorem Epsum Camp Area</h1>
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis fugit
          consectetur distinctio ipsa eveniet tempora assumenda eius provident
          sint? Voluptatum fugit itaque aliquam nobis architecto, sint quas illo
          culpa delectus.
        </p>
        <div className="flex gap-2 my-11 items-center">
          {Array(5)
            .fill(1)
            .map((_, index) => (
              <Image
                key={index}
                src="/star.svg"
                width={24}
                height={24}
                alt="star"
              />
            ))}
          <p className="bold-16 lg:bold-20 text-blue-70">
            198k
            <span className="regular-16 lg:regular-20 ml-1">
              Excellent Reviews
            </span>
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button type="button" title="Download App" variant="btn_green" />
          <Button
            type="button"
            title="How we work?"
            variant="btn_white_text"
            icon="play.svg"
          />
        </div>
      </div>

      <div className="relative flex flex-1 items-start">
        <div className="relative z-20 bg-green-90 py-8 px-7 rounded-3xl w-[260px]">
          <div className="flex justify-between items-start">
            <p className="regular-16 text-gray-20 font-bold">
              Location
              <br />
              <span className="text-white">Aguas Calientes</span>
            </p>
            <Image src="/close.svg" width={24} height={24} alt="close" />
          </div>

          <div className="flex justify-between mt-6">
            <p className="regular-16 text-gray-20 font-bold">
              Distance
              <br />
              <span className="text-white">173.28 mi</span>
            </p>
            <p className="regular-16 text-gray-20 font-bold">
              Elevation
              <br />
              <span className="text-white">2.040 km</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
