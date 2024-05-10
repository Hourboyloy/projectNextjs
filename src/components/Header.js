"use client";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Weather from "@/API/weather";
import Link from "next/link";
import Image from "next/image";
function Header(props) {
  const { catchValueInput, handleCatchValueInput } = props;
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="bg h-screen w-full relative flex justify-center items-center inset-0">
      <div className="h-screen inset-0 bg-opacity-20 bg-gray-500 absolute"></div>
      <div className="flex justify-center items-center w-full h-full">
        <div className="w-full h-full flex flex-col justify-center items-center">
          <div className="absolute right-5 top-4 flex space-x-4">
            <div
              data-aos="zoom-in"
              className="z-10 cursor-pointer w-9 h-9 rounded-full flex justify-center items-center bg-gray-600 bg-opacity-80"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                />
              </svg>
            </div>
            <div
              data-aos="zoom-in"
              className=" cursor-pointer z-10 w-9 h-9 rounded-full flex justify-center items-center bg-gray-600 bg-opacity-80"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </div>
          </div>
          <div className="cursor-pointer absolute w-full h-full -top-40 sm:-top-52 lg:-top-44  xl:-top-48 2xl:-top-56 flex justify-center items-center">
            <div
              className="w-72 sm:w-6/12 lg:w-4/12 xl:w-3/12 2xl:w-1/5 h-28 2xl:h-24 rounded"
              data-aos="zoom-in"
            >
              <Weather />
            </div>
          </div>

          <div className="w-full h-full absolute xl:-top-10">
            <div className=" w-full h-full flex justify-center items-center">
              <div className="w-full flex flex-col justify-start items-center space-y-1">
                <ul
                  className=" font-semibold text-sm sm:text-lg flex space-x-7 lg:space-x-20 md:space-x-20 md:-ml-1 xl:space-x-8 2xl:space-x-12 xl:-ml-1 2xl:-ml-1 text-slate-300 sm:-ml-64  lg:-ml-0"
                  data-aos="fade-right"
                >
                  <li className=" text-slate-50">
                    <Link href="/web">Web</Link>
                  </li>
                  <li className="">
                    <Link href="/images">Images</Link>
                  </li>
                  <li className="">
                    <Link href="/news">News</Link>
                  </li>
                  <li className="">
                    <Link href="/video">Video</Link>
                  </li>
                  <li className="">
                    <Link href="/maps">Maps</Link>
                  </li>
                </ul>
                <form
                  data-aos="fade-up"
                  className="sm:w-9/12 w-10/12 lg:w-7/12  xl:w-2/6 form relative"
                >
                  <button className="absolute left-2 -translate-y-1/2 top-1/2 p-1">
                    <Image
                      src={`/images/google.png`}
                      alt=""
                      width={300}
                      height={300}
                      className=" rounded-full w-7"
                    />
                  </button>

                  <input
                    onChange={({ target }) => {
                      handleCatchValueInput(target.value);
                    }}
                    className="input w-full text-2xl xl:text-lg  text-gray-500  rounded-full px-11 xl:py-2 pt-2 pb-3  border-2 border-transparent focus:outline-none focus:border-blue-500 placeholder-gray-400 transition-all duration-300 shadow-md"
                    placeholder="Enter search"
                    required=""
                    type="text"
                    value={`${catchValueInput ? catchValueInput : ""}`}
                  />
                  <div
                    className={`${
                      catchValueInput
                        ? "absolute xl:top-3 top-4  right-5 xl:right-4 cursor-pointer"
                        : "w-0 h-0 overflow-hidden"
                    }`}
                    onClick={() => {
                      handleCatchValueInput("");
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 text-gray-800"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18 18 6M6 6l12 12"
                      />
                    </svg>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
