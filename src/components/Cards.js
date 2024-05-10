"use client";
import React, { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { lists } from "@/database/lists";
import { arrayImage } from "@/database/arrayImage";
import Image from "next/image";

function Cards(props) {
  const { isHovered, handleMouseEnter, handleMouseLeave } = props;
  const [currentIndex, setCurrentIndex] = useState(0);
  var handleChangeCurrentIndex = (value) => {
    setCurrentIndex(value);
  };
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex === 3) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, [currentIndex]);
  return (
    <div className=" bg-gray-900  p-4 space-y-3">
      <div>
        <ul className=" grid  gap-3  2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1">
          <div
            data-aos="fade-up"
            className="isHoverStyle w-full col sm:col-span-2 h-72 overflow-hidden rounded-lg relative"
          >
            {/* <img
              src={`/images/slide/${arrayImage[currentIndex]}`}
              className="w-full h-72 object-cover object-center transition-all duration-75"
              alt=""
              layout="responsive"
            /> */}
            <Image
              src={`/images/slide/${arrayImage[currentIndex]}`}
              alt=""
              width={500} // Set the width of the image
              height={300} // Set the height of the image
              className="w-full h-72 object-cover object-center transition-all duration-75"
            />
            <div className=" absolute bottom-0 text-slate-300 px-3 py-1 space-y-1">
              <div className="flex cursor-pointer space-x-2">
                <div>
                  <Image
                    src={`/images/logo7.png`}
                    alt=""
                    width={500} // Set the width of the image
                    height={300} // Set the height of the image
                    className=" w-5 border h-5 rounded-full"
                  />
                </div>
                <div className=" text-gray-300 text-sm">
                  Business Insider - 17h
                </div>
              </div>
              <div>
                <p className=" text-lg">
                  Procedure of submitting a statement to such conditions.
                  Procedure of submitting
                </p>
              </div>
              <div>
                <div className="text-gray-400 flex justify-between items-center">
                  <div className=" flex items-center space-x-3">
                    <div className="cursor-pointer flex space-x-1 items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 "
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
                        />
                      </svg>
                      <span>1k</span>
                    </div>
                    <div className="cursor-pointer flex space-x-1 items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 "
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M7.498 15.25H4.372c-1.026 0-1.945-.694-2.054-1.715a12.137 12.137 0 0 1-.068-1.285c0-2.848.992-5.464 2.649-7.521C5.287 4.247 5.886 4 6.504 4h4.016a4.5 4.5 0 0 1 1.423.23l3.114 1.04a4.5 4.5 0 0 0 1.423.23h1.294M7.498 15.25c.618 0 .991.724.725 1.282A7.471 7.471 0 0 0 7.5 19.75 2.25 2.25 0 0 0 9.75 22a.75.75 0 0 0 .75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 0 0 2.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384m-10.253 1.5H9.7m8.075-9.75c.01.05.027.1.05.148.593 1.2.925 2.55.925 3.977 0 1.487-.36 2.89-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398-.306.774-1.086 1.227-1.918 1.227h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 0 0 .303-.54"
                        />
                      </svg>
                      <span></span>
                    </div>
                    <div className="cursor-pointer flex space-x-1 items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 "
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                        />
                      </svg>
                      <span></span>
                    </div>
                  </div>
                  <div>
                    <ul className="md:-mr-20 mr-14 lg:mr-6 flex items-center space-x-2 rounded-full bg-gray-800 py-1 px-2">
                      {arrayImage.length > 0 &&
                        arrayImage.map((e, i) => (
                          <li
                            onClick={() => handleChangeCurrentIndex(i)}
                            key={e + i}
                          >
                            <div
                              className={`${
                                i === currentIndex
                                  ? "cursor-pointer w-4 h-2 rounded-full bg-white"
                                  : "cursor-pointer w-2 h-2 rounded-full bg-gray-400"
                              }`}
                            ></div>
                          </li>
                        ))}
                    </ul>
                  </div>
                  <div className="cursor-pointer justify-center items-center space-x-1 flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 text-gray-300"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
                      />
                    </svg>
                    <span className=" text-sm">Trending</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            className="isHoverStyle bg-gray-800 h-72  w-full border-gray-900 rounded-lg  shadow-gray-600"
          >
            <div className=" h-40 overflow-hidden relative">
              <Image
                src={`/images/photo10.jpg`}
                alt=""
                width={500} // Set the width of the image
                height={300} // Set the height of the image
                className=" w-full rounded-t-lg shadow-gray-600"
              />
              <div
                onMouseEnter={() => {
                  handleMouseEnter(-10);
                }}
                onMouseLeave={handleMouseLeave}
                className="responsiveforlaptop hidden w-full h-full duration-75 rounded-lg transition-all items-center absolute hover:inset-0  hover:bg-gray-800  hover:bg-opacity-50 z-10 top-0"
              >
                <div
                  className={`${
                    isHovered === -10
                      ? "flex justify-center items-center mt-2 space-x-2 -mr-48 duration-75 transition-all"
                      : "w-0 h-0 overflow-hidden"
                  }`}
                >
                  <div className=" w-8 h-8 bg-white flex justify-center items-center rounded-full shadow-slate-400 shadow cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 "
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18 18 6M6 6l12 12"
                      />
                    </svg>
                  </div>
                  <div className=" w-8 h-8 bg-white flex justify-center items-center rounded-full shadow-slate-400 shadow cursor-pointer">
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
                        d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className=" p-3 space-y-2">
              <div className="flex cursor-pointer space-x-2">
                <div>
                  <Image
                    src={`/images/logo7.png`}
                    alt=""
                    width={500} // Set the width of the image
                    height={300} // Set the height of the image
                    className=" w-5 border h-5 rounded-full"
                  />
                </div>
                <div className=" text-gray-300 text-sm">Newsweek - 10h</div>
              </div>
              <div>
                <p className=" font-normal text-md text-white">
                  Procedure of submitting a statement to such conditions.
                </p>
              </div>
              <div className="text-gray-400 flex justify-between items-center ">
                <div className=" flex items-center space-x-3">
                  <div className="cursor-pointer flex space-x-1 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 "
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
                      />
                    </svg>
                    <span>561</span>
                  </div>
                  <div className="cursor-pointer flex space-x-1 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 "
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M7.498 15.25H4.372c-1.026 0-1.945-.694-2.054-1.715a12.137 12.137 0 0 1-.068-1.285c0-2.848.992-5.464 2.649-7.521C5.287 4.247 5.886 4 6.504 4h4.016a4.5 4.5 0 0 1 1.423.23l3.114 1.04a4.5 4.5 0 0 0 1.423.23h1.294M7.498 15.25c.618 0 .991.724.725 1.282A7.471 7.471 0 0 0 7.5 19.75 2.25 2.25 0 0 0 9.75 22a.75.75 0 0 0 .75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 0 0 2.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384m-10.253 1.5H9.7m8.075-9.75c.01.05.027.1.05.148.593 1.2.925 2.55.925 3.977 0 1.487-.36 2.89-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398-.306.774-1.086 1.227-1.918 1.227h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 0 0 .303-.54"
                      />
                    </svg>
                    <span></span>
                  </div>
                  <div className="cursor-pointer flex space-x-1 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 "
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                      />
                    </svg>
                    <span>10</span>
                  </div>
                </div>
                <div className="cursor-pointer justify-center items-center space-x-1 flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 text-gray-300"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
                    />
                  </svg>
                  <span className=" text-sm">Trending</span>
                </div>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            className="isHoverStyle bg-gray-800 h-72  w-full border-gray-900 rounded-lg  shadow-gray-600"
          >
            <div className=" h-40 overflow-hidden relative">
              <Image
                src={`/images/photo7.jpg`}
                alt=""
                width={500} // Set the width of the image
                height={500} // Set the height of the image
                className=" w-full rounded-t-lg shadow-gray-600"
              />
              <div
                onMouseEnter={() => {
                  handleMouseEnter(-20);
                }}
                onMouseLeave={handleMouseLeave}
                className="responsiveforlaptop hidden w-full h-full duration-75 transition-all rounded-lg items-center absolute hover:inset-0  hover:bg-gray-800  hover:bg-opacity-50 z-10 top-0"
              >
                <div
                  className={`${
                    isHovered === -20
                      ? "flex justify-center items-center mt-2 space-x-2 -mr-48 duration-75 transition-all"
                      : "w-0 h-0 overflow-hidden"
                  }`}
                >
                  <div className=" w-8 h-8 bg-white flex justify-center items-center rounded-full shadow-slate-400 shadow cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 "
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18 18 6M6 6l12 12"
                      />
                    </svg>
                  </div>
                  <div className=" w-8 h-8 bg-white flex justify-center items-center rounded-full shadow-slate-400 shadow cursor-pointer">
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
                        d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className=" p-3 space-y-2">
              <div className="flex cursor-pointer space-x-2">
                <div>
                  <Image
                    src={`/images/logo3.jpg`}
                    alt=""
                    width={500} // Set the width of the image
                    height={300} // Set the height of the image
                    className=" w-5 border h-5 rounded-full"
                  />
                </div>
                <div className=" text-gray-300 text-sm">CBR - 1d</div>
              </div>
              <div>
                <p className=" font-normal text-md text-white">
                  Procedure of submitting a statement to such conditions.
                </p>
              </div>
              <div className="text-gray-400 flex justify-between items-center ">
                <div className=" flex items-center space-x-3">
                  <div className="cursor-pointer flex space-x-1 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 "
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
                      />
                    </svg>
                    <span>561</span>
                  </div>
                  <div className="cursor-pointer flex space-x-1 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 "
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M7.498 15.25H4.372c-1.026 0-1.945-.694-2.054-1.715a12.137 12.137 0 0 1-.068-1.285c0-2.848.992-5.464 2.649-7.521C5.287 4.247 5.886 4 6.504 4h4.016a4.5 4.5 0 0 1 1.423.23l3.114 1.04a4.5 4.5 0 0 0 1.423.23h1.294M7.498 15.25c.618 0 .991.724.725 1.282A7.471 7.471 0 0 0 7.5 19.75 2.25 2.25 0 0 0 9.75 22a.75.75 0 0 0 .75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 0 0 2.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384m-10.253 1.5H9.7m8.075-9.75c.01.05.027.1.05.148.593 1.2.925 2.55.925 3.977 0 1.487-.36 2.89-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398-.306.774-1.086 1.227-1.918 1.227h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 0 0 .303-.54"
                      />
                    </svg>
                    <span></span>
                  </div>
                  <div className="cursor-pointer flex space-x-1 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 "
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                      />
                    </svg>
                    <span>20</span>
                  </div>
                </div>
                <div className="cursor-pointer justify-center items-center space-x-1 flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 text-gray-300"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
                    />
                  </svg>
                  <span className=" text-sm">Trending</span>
                </div>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            className="isHoverStyle w-full h-72 cursor-pointer items-center space-x-1 flex flex-col text-white space-y-3 py-3 px-2 bg-gray-800 rounded-lg"
          >
            <div className="w-full flex justify-between items-center">
              <div className=" flex items-center space-x-2">
                <Image
                  src={`/images/logo9.jpg`}
                  alt=""
                  width={500} // Set the width of the image
                  height={300} // Set the height of the image
                  className=" w-5 border h-5 rounded-full"
                />
                <span>Shopping</span>
              </div>
              <div>
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
                    d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  />
                </svg>
              </div>
            </div>
            <div className=" h-52 overflow-hidden relative">
              <Image
                src={`/images/photo12.avif`}
                alt=""
                width={500}
                height={300}
                className=" rounded-lg object-bottom object-cover"
              />
              <p className=" absolute  text-white font-semibold pl-3 bottom-2">
                DICK'S Shopping Goods
              </p>
            </div>
            <div className=" flex space-x-2 items-center">
              <p className=" w-3 h-3 rounded-full bg-gray-400"></p>
              <p className=" w-2 h-2 p-px rounded-full bg-gray-400"></p>
              <p className=" w-2 h-2 rounded-full bg-gray-400"></p>
              <p className=" w-1 h-1 p-px rounded-full bg-gray-400"></p>
              <p className=" w-1 h-1 rounded-full bg-gray-400"></p>
            </div>
          </div>
          {lists.length > 0 &&
            lists.map((ele, i) => (
              <li
                data-aos="fade-up"
                className="w-full rounded-lg"
                key={i + ele}
              >
                <div className=" isHoverStyle cursor-pointer bg-gray-800  w-full border-gray-900 rounded-lg  shadow-gray-600 ">
                  <div
                    onMouseEnter={() => {
                      handleMouseEnter(i);
                    }}
                    onMouseLeave={handleMouseLeave}
                    className=" h-40 overflow-hidden relative"
                  >
                    <Image
                      src={`/images/${ele.photo}`}
                      className=" w-full rounded-t-lg shadow-gray-600"
                      width={500}
                      height={300}
                      alt=""
                    />
                    <Image
                      src={`/images/${ele.photo}`}
                      alt=""
                      width={500} // Set the width of the image
                      height={300} // Set the height of the image
                      className=" w-5 border h-5 rounded-full"
                    />
                    <div className="responsiveforlaptop hidden w-full h-full duration-75 rounded-lg transition-all items-center absolute hover:inset-0  hover:bg-gray-800  hover:bg-opacity-50 z-10 top-0">
                      <div
                        className={`${
                          isHovered === i
                            ? "flex justify-center items-center mt-2 space-x-2 -mr-48 duration-75 transition-all"
                            : "w-0 h-0 overflow-hidden"
                        }`}
                      >
                        <div className=" w-8 h-8 bg-white flex justify-center items-center rounded-full shadow-slate-400 shadow cursor-pointer">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6 "
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M6 18 18 6M6 6l12 12"
                            />
                          </svg>
                        </div>
                        <div className=" w-8 h-8 bg-white flex justify-center items-center rounded-full shadow-slate-400 shadow cursor-pointer">
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
                              d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=" p-3 space-y-2">
                    <div className="flex cursor-pointer space-x-2">
                      <div>
                        <Image
                          src={`/images/${ele.logo}`}
                          alt=""
                          width={500}
                          height={300}
                          className=" w-5 border h-5 rounded-full"
                        />
                      </div>
                      <div className=" text-gray-300 text-sm">
                        {ele.name + " . " + ele.time}
                      </div>
                    </div>
                    <div>
                      <p className=" font-normal text-md text-white">
                        {ele.description}
                      </p>
                    </div>
                    <div className="text-gray-400 flex justify-between items-center ">
                      <div className=" flex items-center space-x-3">
                        <div className="cursor-pointer flex space-x-1 items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 "
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
                            />
                          </svg>
                          <span
                            className={`${ele.like > 0 ? "block" : "hidden"}`}
                          >
                            {ele.like}
                          </span>
                        </div>
                        <div className="cursor-pointer flex space-x-1 items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 "
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M7.498 15.25H4.372c-1.026 0-1.945-.694-2.054-1.715a12.137 12.137 0 0 1-.068-1.285c0-2.848.992-5.464 2.649-7.521C5.287 4.247 5.886 4 6.504 4h4.016a4.5 4.5 0 0 1 1.423.23l3.114 1.04a4.5 4.5 0 0 0 1.423.23h1.294M7.498 15.25c.618 0 .991.724.725 1.282A7.471 7.471 0 0 0 7.5 19.75 2.25 2.25 0 0 0 9.75 22a.75.75 0 0 0 .75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 0 0 2.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384m-10.253 1.5H9.7m8.075-9.75c.01.05.027.1.05.148.593 1.2.925 2.55.925 3.977 0 1.487-.36 2.89-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398-.306.774-1.086 1.227-1.918 1.227h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 0 0 .303-.54"
                            />
                          </svg>
                          <span
                            className={`${
                              ele.notlike > 0 ? " block" : "hidden"
                            }`}
                          >
                            {ele.notlike}
                          </span>
                        </div>
                        <div className="cursor-pointer flex space-x-1 items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 "
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                            />
                          </svg>
                          <span
                            className={`${
                              ele.comment > 0 ? "block" : "hidden"
                            }`}
                          >
                            {ele.comment}
                          </span>
                        </div>
                      </div>
                      <div
                        className={`${
                          ele.trending
                            ? "cursor-pointer justify-center items-center space-x-1 flex"
                            : " w-0 h-0 overflow-hidden"
                        }`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-5 text-gray-300"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
                          />
                        </svg>
                        <span className=" text-sm">Trending</span>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
        </ul>
      </div>
      <div>Hello</div>
      <div>Hello</div>
    </div>
  );
}

export default Cards;
