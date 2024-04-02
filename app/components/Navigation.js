"use client";
import React, { useState } from "react";
// import { Bars3Icon } from "@heroicons/react/16/solid";
// import { XMarkIcon } from "@heroicons/react/16/solid";
import { faHome, faTicket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Navigation() {
  const [isClick, setIsClick] = useState();

  const toggleNavbar = () => {
    setIsClick(!isClick);
  };
  return (
    <>
      <nav className="bg-black weigh">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-start justify-start left-0">
              <div className="flex-shrink-0">
                <a href="/" className="text-white">
                  Logo
                </a>
              </div>
            </div>
            <div className="hidden lg:flex lg:items-center lg:justify-center lg:space-x-4">
              <a
                href="/"
                className="text-white hover:text-yellow-400 rounded-lg p-2"
              >
                HOME
              </a>
              <a
                href="/"
                className="text-white hover:text-yellow-400 rounded-lg p-2"
              >
                SKILLS
              </a>
              <a
                href="/"
                className="text-white hover:text-yellow-400 rounded-lg p-2"
              >
                EXPERIENCE
              </a>
              <a
                href="/"
                className="text-white hover:text-yellow-400 rounded-lg p-2"
              >
                PROJECTS
              </a>
              <a
                href="/"
                className="text-white hover:text-yellow-400 rounded-lg p-2"
              >
                EDUCATION
              </a>
              {/* </div> */}
            </div>
            <div className="lg:hidden flex items-center">
              <button
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-yellow-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                onClick={toggleNavbar}
              >
                {isClick ? (
                  <FontAwesomeIcon
                    icon={faHome}
                    size="2x"
                    className="w-[2rem] lg:hidden h-[2rem] cursor-pointer text-yellow-300"
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faTicket}
                    size="2x"
                    className="top-[2rem] right-[2rem] w-[2rem] h-[2rem] text-yellow-400"
                  />
                )}
              </button>
            </div>
          </div>
        </div>
        {isClick && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="/"
                className="text-white block hover:text-yellow-400 rounded-lg p-2"
              >
                HOME
              </a>
              <a
                href="/"
                className="text-white block hover:text-yellow-400 rounded-lg p-2"
              >
                SKILLS
              </a>
              <a
                href="/"
                className="text-white block hover:text-yellow-400 rounded-lg p-2"
              >
                EXPERIENCE
              </a>
              <a
                href="/"
                className="text-white block hover:text-yellow-400 rounded-lg p-2"
              >
                PROJECTS
              </a>
              <a
                href="/"
                className="text-white block hover:text-yellow-400 rounded-lg p-2"
              >
                EDUCATION
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navigation;
