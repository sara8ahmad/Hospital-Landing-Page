"use client";
import Link from "next/link";

import React, { useState, useEffect } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const slides = [
  "/assets/doct-4.jpg",
  "/assets/doct-5.jpg",
  "/assets/doct-6.jpg",
];

const Hero = ({ autoSlide = true, autoSlideInterval = 3000 }) => {
  const [curr, setCurr] = useState(0);

  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [autoSlide, autoSlideInterval]);

  return (
    <section
      className="relative w-full h-[80vh] flex items-center justify-center bg-cover bg-center transition-all duration-500 ease-out"
      style={{ backgroundImage: `url(${slides[curr]})` }}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div>

      <div className="relative mx-auto w-full py-60 ">
        <div className="w-[60%] sm:w-[70%] md:w-[50%] mx-auto mt-[-80px] md:mt-22">
          <div className="text-white text-start absolute  left-[4.5rem] md:left-60">
            <div className="mb-5">Entrust your Health our Doctors</div>
            <p className=" text-2xl md:text-3xl tracking-wide">
              Exceptional People.
            </p>
            <p className=" text-2xl md:text-3xl tracking-wide">
              Exceptional Care.
            </p>
            <div className="mt-5 flex flex-col sm:flex sm:flex-row gap-4 ">
              <Link
                href="#"
                className=" z-20 cursor-pointer text-[12px] hover:bg-[#57759e] transition ease-in-out duration-3000 hover:-translate-y-1 font-semibold border-solid border-slate-300 border-2 p-3 md:p-4 tracking-wide"
              >
                Book an Appointment
              </Link>
              <Link
                href="#"
                className="z-20 text-[12px] cursor-pointer hover:bg-[#57759e] transition ease-in-out duration-3000 hover:-translate-y-1 font-semibold border-solid border-slate-300 border-2 p-3 md:p-4 tracking-wide"
              >
                View Department
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={prev}
          className="p-1 bg-white/10 border border-gray-400 text-gray-100 hover:bg-white/30"
        >
          <BiChevronLeft size={30} />
        </button>
        <button
          onClick={next}
          className="p-1 border-gray-400 border bg-white/10 text-gray-100 hover:bg-white/30"
        >
          <BiChevronRight size={30} />
        </button>
      </div>

      <div dir="rtl" className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`
              transition-all w-3 h-3 bg-white rounded-full
              ${curr === i ? "p-2" : "bg-opacity-50"}
            `}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
