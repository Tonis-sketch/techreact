import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../Assets/logo.jpg";
const ForgottenPassword = () => {
  return (
    <>


      <div className=" flex justify-center items-center font-pop">
        <img
          src={logo}
          alt="logo"
          className="w-[10rem] h-12 object-contain absolute top-8"
        />
        <div className="w-[600px] xs:w-[400px] xm:w-[300px] flex flex-col h-[400px] my-[10rem] xd:ml-[1rem]  ">
          <p className=" xs:text-[20px] xs:pl-[2rem] xs:mr-[3rem] pb-[4rem] xs:pb-2 sm:pb[1rem] sm:pb-[1rem] text-2xl text-center  xm:text-[16px] font-medium text-gray-900 capitalize">
            Welcome to Teetree
          </p>
          <form
            action="Dashboard"
            className=" py-5 xs:w-[400px] xm:w-[300px] xd:w-[200px] rounded-xl xs:border-none  border border-tee-200 flex flex-col justify-center items-center space-y-9 "
          >
            <p className="text-xl font-medium text-gray-900 capitalize text-center xs:text-[16px] ">
              Did you forget yor password?
              <br />
              No need to worry
            </p>
            <p className="text-[18px] xs:text-[14px]  text-gray-900 xd:w-[330px] text-center">
              Input email to get a link to reset your password.
            </p>
            <div className="w-[500px] xs:w-[390px]">
              <input type="email" required name="" id="" placeholder="Email" className="p-4 border  rounded-lg w-full focus:outline-none border-tee-200" />
            </div>
            <div className="flex items-center justify-center xs:w-[400px] xm:w-[380px]  ">
              <NavLink to={'/reset'}  >
                <button className="bg-purple-900 w-full h-12  xm:w-[380px]  px-28 py-6 text-[18px] xs:text-base flex items-center justify-center font-medium text-white rounded-md ">
                  Send
                </button>
              </NavLink>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ForgottenPassword;



