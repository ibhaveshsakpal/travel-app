import { FEATURES } from "@/constants";
import Image from "next/image";
import React from "react";

type FeatureItemProps = {
  title: string;
  description: string;
  icon: string;
  variant: string;
};

const FeatureItem = ({
  title,
  description,
  icon,
  variant,
}: FeatureItemProps) => {
  return (
    <li className="flex w-full flex-1 flex-col items-start ">
      <div
        className={`rounded-full p-4 lg:p-7 ${
          variant === "green" ? "bg-green-50" : "bg-orange-50"
        } `}
      >
        <Image src={icon} alt={title} width={28} height={28} />
      </div>
      <h2 className="bold-20 lg:bol-32 mt-5 capitalize">{title}</h2>
      <p className="regular-16 mt-5 bg-white/80 text-gray-30 lg:mt-[30px] lg:bg-none">
        {description}
      </p>
    </li>
  );
};

const Features = () => {
  return (
    <section className="flex-col flexCenter overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24">
      <div className="max-container padding-container relative w-full flex justify-end">
        <div className="flex flex-1 lg:min-h-[900px]">
          <Image
            className="feature-phone"
            src="/phone.png"
            height={1000}
            width={440}
            alt="phone"
          />
        </div>

        <div className="z-20 flex w-full flex-col lg:w-[60%]">
          <div className="relative">
            <Image
              className="absolute left-[-5px] top-[-28px] w-10 lg:w-[50px]"
              src="/camp.svg"
              alt="camp"
              width={50}
              height={50}
            />
            <h2 className="bold-40 lg:bold-64">Our Features</h2>
          </div>

          <ul className="mt-10 grid gap-10 md:grid-cols-2 lg:mt-20 lg:gap-20">
            {FEATURES.map((feature) => (
              <FeatureItem
                key={feature.title}
                title={feature.title}
                variant={feature.variant}
                description={feature.description}
                icon={feature.icon}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Features;