import { motion } from "motion/react";
import React from 'react'
import ourPartnersImg from "../assets/Our partners.svg";
import techSpotImg from "../assets/TechSpot.svg";
import tabooImg from "../assets/Taboo.svg";
import uiPathImg from "../assets/UiPath.svg";
import mahIndraImg from "../assets/MahIndra.svg";
import techBankImg from "../assets/TechBank.svg";

const partners = [
  { src: techSpotImg, alt: "TechSpot" },
  { src: tabooImg, alt: "Taboo" },
  { src: uiPathImg, alt: "UiPath" },
  { src: mahIndraImg, alt: "Mahindra" },
  { src: techBankImg, alt: "TechBank" },
];

const LogoSet = ({ hidden = false }) => (
  <div className="flex shrink-0 items-center gap-10 md:gap-16 pr-10 md:pr-16" aria-hidden={hidden}>
    {partners.map((p) => (
      <img key={p.alt} src={p.src} alt={hidden ? "" : p.alt} className="h-6 md:h-8 lg:h-10 w-auto" />
    ))}
  </div>
);

const Slide = () => {
  return (
    <section className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center gap-4 md:gap-10">
        <img src={ourPartnersImg} alt="Our partners" className="h-6 md:h-8 w-auto shrink-0" />

        {/* Infinite marquee: two identical sets, moved by exactly one set's width */}
        <div className="relative w-full overflow-hidden mask-x-from-90% mask-x-to-100%">
          <motion.div
            className="flex w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <LogoSet />
            <LogoSet hidden />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Slide
