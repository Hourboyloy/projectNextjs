"use client";
import { useState } from "react";
import Cards from "@/components/Cards";
import Loader from "@/components/Loader";
import Header from "@/components/Header";

export default function Home() {
  const [isHovered, setIsHovered] = useState();
  const handleMouseEnter = (value) => {
    setIsHovered(value);
  };
  const handleMouseLeave = () => {
    setIsHovered(-1);
  };

  const [catchValueInput, setCatchValueInput] = useState("");
  const handleCatchValueInput = (value) => {
    setCatchValueInput(value);
  };

  const [trueFalse, setTrueFalse] = useState(false);
  setTimeout(() => {
    setTrueFalse(true);
  }, 2000);

  return (
    <main className="">
      <div className=" relative space-y-0 bg-gray-900 ">
        <div>
          {trueFalse ? (
            ""
          ) : (
            <div className=" h-screen flex justify-center items-center bg-white">
              {/*<div className="loader rounded text-sm sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl"></div> */}
              <Loader />
            </div>
          )}
          {trueFalse ? (
            <div className=" ">
              <Header
                catchValueInput={catchValueInput}
                handleCatchValueInput={handleCatchValueInput}
              />
            </div>
          ) : (
            <div className=" w-0 h-0 overflow-hidden">
              <Header
                catchValueInput={catchValueInput}
                handleCatchValueInput={handleCatchValueInput}
              />
            </div>
          )}
        </div>
        <div>
          {trueFalse ? (
            <div>
              <Cards
                isHovered={isHovered}
                handleMouseEnter={handleMouseEnter}
                handleMouseLeave={handleMouseLeave}
              />
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </main>
  );
}
