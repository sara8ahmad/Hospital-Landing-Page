import { ClinicFeatures } from "@/_components/ClinicFeatures";
import { Details } from "@/_components/Details";
import { Feature } from "@/_components/Feature";
import { Footer } from "@/_components/Footer";
import Hero from "@/_components/Hero";
import HomeCarousel from "@/_components/HomeCarousel";
import Team from "@/_components/Team";
import React from "react";

const page = () => {
  return (
    <div>
      <Hero />
      <Feature />
      <Details />
      <ClinicFeatures />
      <Team />
      <Footer />
    </div>
  );
};

export default page;
