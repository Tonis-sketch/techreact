import React from "react";
import logo from "../Assets/logo1.png";
import { HiMenuAlt1 } from "react-icons/hi";
import { useState } from "react";
import { Link } from "react-router-dom";



const Sidebar = () => {
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
                  <Link to={"/dashboard"}>Over View</Link> <br />
                  <Link to={"/MyAccount"}>MyAccount</Link> <br />
                  <li> My design</li>
                  <Link to={"/settings"}>Settings</Link> <br />
                  <Link to={"/stats"}>Statistics</Link> <br />
                  <Link to={"/support"}>Support</Link> <br />
                  <Link to={"/upgrade"}>Upgrade</Link>
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
                  <Link to={"/dashboard"}>Over View</Link> <br />
                  <Link to={"/MyAccount"}>MyAccount</Link> <br />
                  <li> My design</li>
                  <Link to={"/settings"}>Settings</Link> <br />
                  <Link to={"/stats"}>Statistics</Link> <br />
                  <Link to={"/support"}>Support</Link> <br />
                  <Link to={"/upgrade"}>Upgrade</Link>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
