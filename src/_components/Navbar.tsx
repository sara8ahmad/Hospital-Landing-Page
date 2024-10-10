"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Banner from "./Banner";

const Navbar = () => {
  const [state, setState] = useState(false);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen((curr) => !curr);
  };

  const navigation = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "TimeTable", path: "" },
    { title: "Contact us", path: "/contact" },
    { title: "Log in", path: "" },
  ];

  const [scrollY, setScrollY] = useState(0);
  const [navbarBg, setNavbarBg] = useState("bg-transparent");

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollY > 0) {
      setNavbarBg("md:bg-[#6385ad] md:bg-opacity-80");
    } else {
      setNavbarBg("md:bg-white md:bg-opacity-20");
    }
  }, [scrollY]);

  return (
    <nav
      className={` ${navbarBg} p-4 transition-all duration-500  bg-opacity-70  bg-[#6385ad] text-white text-lg pt-2 pb-8 w-full shadow-xl fixed top-0 left-0 z-10 font-medium   md:text-base md:border-none`}
    >
      <div className=" hidden md:block">
        <Banner />
      </div>
      <div className="items-center px-4 pt-5 max-w-screen-xl mx-auto md:flex md:px-8">
        <div className="flex items-center object-fill justify-between md:block">
          <div className="text-xl sm:text-4xl font-bold tracking-wider font-[math] flex gap-2">
            <span className="font-bold"></span>
            <a
              href="/"
              aria-label="Go home"
              title="Company"
              className="inline-flex items-center"
            >
              <svg
                className="w-8 text-deep-purple-accent-400"
                viewBox="0 0 24 24"
                strokeLinejoin="round"
                strokeWidth="2"
                strokeLinecap="round"
                strokeMiterlimit="10"
                stroke="currentColor"
                fill="none"
              >
                <rect x="3" y="1" width="7" height="12" />
                <rect x="3" y="17" width="7" height="6" />
                <rect x="14" y="1" width="7" height="6" />
                <rect x="14" y="11" width="7" height="12" />
              </svg>
              <span className="ml-2 text-3xl font-bold tracking-wide text-white uppercase">
                Medical
              </span>
            </a>
          </div>
          <div className="md:hidden">
            <button
              className="text-white hover:text-gray-200"
              onClick={() => setState(!state)}
            >
              {state ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div
          className={`flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            state ? "block" : "hidden"
          }`}
        >
          <ul className="justify-end items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
            {navigation.map((item, idx) => {
              return (
                <li
                  key={idx}
                  className="text-white text-sm font-bold tracking-wider flex gap-5 hover:text-gray-200"
                >
                  <Link href={item.path} className="block">
                    {item.title}
                  </Link>
                  <span className="hidden w-px h-6 bg-gray-300 md:block"></span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
