import React from "react";
import FeatureCard from "./FeatureCard";

const Section1 = () => {
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
        <FeatureCard
          image="/Image/Frame2.svg"
          title="Remote Learning"
          text="We offer remote learning options that allow you to learn from anywhere."
        />
        <FeatureCard
          image="/Image/Frame.png"
          title="After Class Access"
          text="We want to make sure you have everything you need to succeed."
        />
      </div>
    </section>
  );
};

export default Section1;
