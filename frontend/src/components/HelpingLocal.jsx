import React from "react";
import { AiOutlineTeam } from "react-icons/ai";
import { PiHandshakeLight } from "react-icons/pi";
import { TbHandFinger } from "react-icons/tb";
import { MdPayment } from "react-icons/md";
function HelpingLocal() {
  return (
    <div className="bg-[#f5F5F5] ">
      <div className="w-10/12 m-auto py-8 grid md:grid-cols-2">
        <div className="">
          <h1 className="lg:text-4xl font-bold">
            Helping a local <br />
            <span className="text-green-500">business reinvent itself</span>
          </h1>
          <p className="py-4">
            We reached here with our hard work and dedication
          </p>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center">
            <AiOutlineTeam size={35} className="text-green-500 mr-4" />
            <div className="">
              <h1 className="text-2xl font-bold">56,200,123</h1>
              <p>Member</p>
            </div>
          </div>
          <div className="flex items-center">
            <PiHandshakeLight size={35} className="text-green-500 mr-4" />
            <div className="">
              <h1 className="text-2xl font-bold">96,200,123</h1>
              <p>Clubs</p>
            </div>
          </div>{" "}
          <div className="flex items-center">
            <TbHandFinger size={35} className="text-green-500 mr-4" />
            <div className="">
              <h1 className="text-2xl font-bold">56,200</h1>
              <p>Event Booking</p>
            </div>
          </div>{" "}
          <div className="flex items-center">
            <MdPayment size={35} className="text-green-500 mr-4" />
            <div className="">
              <h1 className="text-2xl font-bold">50,230,123</h1>
              <p>Payment</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HelpingLocal;
