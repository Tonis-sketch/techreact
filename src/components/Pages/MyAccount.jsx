import React from "react";
import { useState } from "react";
import logo from "../Assets/logo1.png";
import ellipse from "../Assets/ellipse.svg";
import { HiMenuAlt1 } from "react-icons/hi";
import pen from '../Assets/pen.png'

import { Link } from "react-router-dom";

const MyAccount = () => {
  const [show, setShow] = useState(false);
  const hideBar = () => {
    setShow(!show);
  };

  return (
    <>
      <div className="flex w-full place-items-center mx-auto font-pop relative ">
        <div className="flex w-full justify-between mx-auto xs:flex-col xs:h-screen ">
          <div className="w-[25%]">
            {/* Desktop side bar */}
            <div className=" h-[1300px] md:h-[2000px] flex flex-col text-white items-center bg-tee-200 xs:hidden md:flex p-4">
              <img
                src={logo}
                alt="logo"
                className="w-[10rem] px-2 h-12 object-contain "
              />
              <div>
                <ul>
                  <Link to={"/"}>Over View</Link> <br />
                  <Link to={"/MyAccount"}>MyAccount</Link> <br />
                  <Link to={"/Dashboard"}>Dashboard</Link>
                  <li>what ever </li>
                  <li>what ever </li>
                  <li>what ever </li>
                </ul>
              </div>
            </div>

            {/* Mobile SibeBar */}
            <div
              className="xs:flex hidden  rounded-md mt-[2rem]"
              onClick={hideBar}
            >
              <div className="text-white z-50 w-[19rem] pt-2 h-12 ">
                {show ? (
                  <HiMenuAlt1 className="z-20 text-tee-200 text-lg text-[1rem] w-[4rem] h-10 pl-5 static " />
                ) : (
                  <HiMenuAlt1 className="z-20 text-white text-[2rem]  right-[7rem] xd:left-2 fixed " />
                )}
              </div>
              <div
                className={
                  !show
                    ? "flex  bg-tee-200 h-[1450px] fixed w-80 pt-10 pr-28 pl-20 text-white rounded-r-3xl"
                    : "hidden"
                }
              >
                <ul>
                  <li>what </li>
                  <li>what </li>
                  <li>what </li>
                  <li>what </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col font-pop capitalize">
            <div className="flex xs:justify-center xs:items-center xs:text-center mx-5 mt-5 xs:mt-[2rem]   xs:pr-0 xs:mx-0 ">
              <div>
                <p className="text-[24px] xs:text-[20px]  font-medium text-tee-400 xs:font-bold xs:hidden">
                  Welcome! Blessing Asukwo
                </p>
                <p className="text-[16px] xs:text-[20px] pr-[2rem] font-semi text-tee-400  hidden xs:flex -mt-[4rem]">
                  Support
                </p>
                <p className="text-[16px] text-tee-500 xs:text-[12px] font-light xs:hidden">
                  what would you like us to help you with?{" "}
                </p>
              </div>
            </div>



            <div className="flex gap-5">
              <div className="w-[700px] bg-tee-800 ">
                <div className="flex justify-around ">
                  <div className="flex ">
                    <img src={ellipse} alt="" className="w-[135px]" />
                    <div className="flex flex-col items-end justify-center">
                      <p>Blessing Asukwo</p>
                      <p>UI/UX Designer</p>
                    </div>
                  </div>
                  <img src={pen} alt="" className="w-4 h-5" />

                </div>
                <hr />
                <div className="flex justify-between">
                  <div>
                    <p>Phone number</p>
                    <p>Location</p>
                    <p>Niche</p>
                    <p>Password</p>
                  </div>
                  <div>
                    <p>+234800000000</p>
                    <p>Calabar, Cross Rivers State</p>
                    <p>Tech</p>
                    <p>**********</p>
                  </div>
                </div>
              </div>
              <div className="w-[260px] bg-tee-800">
                <div>
                  <p>Current plan</p>
                  <p>Free</p>
                  <button>Upgrade</button>
                </div>
                <div>
                  <p>Delete account</p>
                  <p>If you delete your
                    account your data
                    will be lost
                  </p>
                  <button>Upgrade</button>
                </div>
              </div>
            </div>
          </div>




          <div className=" absolute right-[5rem] top-8 xs:right-5 xs:top-[2rem] xd:absolute xd:left-[16.8rem] w-[5rem] flex justify-center ">
            <img
              src={ellipse}
              alt="image"
              className="w-12  h-12 xs:w-10 rounded-full"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MyAccount;
