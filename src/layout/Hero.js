import BtnPrimary from "@/components/btn/BtnPrimary";
import Link from "next/link";
import React, { useEffect } from "react";
import Typed from "typed.js";

export default function Hero() {
  useEffect(() => {
    const typed = new Typed(".multiple-text", {
      strings: ["Web Developer", "UI/UX Designer"],
      typeSpeed: 20,
      backSpeed: 20,
      backDelay: 1000,
      loop: true,
    });
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div
      className="relative  bg-no-repeat bg-center bg-cover  bg-top-right h-[500px] md:h-[600px] xl:h-[800px]"
      style={{ backgroundImage: "url('/img/header-bg.jpg')" }}
    >
      <div className="bg-overlay"></div>
      <div className="container">
        <div className="flex flex-wrap items-center mr-0 ml-0 h-[550px] md:h-[600px] xl:h-[800px]  ">
          <div className="relative z-10 pr-0 pl-0 w-full sm:w-1/2 md:w-2/3 xl:w-4/5">
            <h2 className="text-sm sm:text-lg text-white md:text-md lg:text-4xl  mb-0 xl:my-4">
              Hi There! <br />
              I'm Benjamin Sarrazin
            </h2>
            <h1 className=" ftn-size text-white font-bold  md:text-7xl lg:text-8xl xl:my-8">
              <span className="multiple-text text-xl md:text-4xl lg:text-6xl"></span>
            </h1>
            <p className="max-w-sm font-light text-[#707070] mb-5 md:mt-5 md:max-w-md lg:my-4 lg:text-xl">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industy. Lorem ipsum has been the industrys standar dummy text
              ever
            </p>

            <Link href="https://drive.google.com/uc?export=download&id=1cNbyPZ46zhctKFI5prFgutdswgubinxt">
              <BtnPrimary />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
