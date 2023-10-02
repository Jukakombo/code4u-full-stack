import React from "react";
import { Link } from "react-router-dom";
import johncena from "../assets/johncena.png";
import { company_brands } from "./localDatabase";
import { FaArrowRight } from "react-icons/fa";
function Brand() {
  return (
    <div>
      <div className=" w-10/12 m-auto grid sm:-grid-cols-1 md:grid-cols-2 py-8">
        <div className="mb-8 mr-4">
          <img className="w-full " src={johncena} alt="about" />
        </div>
        <div className="text">
          <p className="py-4 text-lg">
            Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
            augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
            elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
            habitasse platea dictumst.
          </p>
          <h1 className="text-green-500 font-bold py-4">John Cena</h1>
          <h1 className="text-xl pb-4">Chairman at WWE</h1>
          <div className="md:flex  items-center  ">
            <div className="grid md:grid-cols-8 gap-2">
              {company_brands.map((brand) => (
                <div
                  className="md:flex md:items-center flex-center"
                  key={brand._id}
                >
                  <img
                    src={brand.image}
                    alt="brand-image"
                    className="w-full  py-4 md:w-[40px] lg:w-[70px] rounded-md max-sm:bg-gray-100  md:bg-0"
                  />
                </div>
              ))}
            </div>
            <div className="flex items-center py-4">
              <Link className="text-green-500 rl-4 md:text-[10px] text-xl">
                See All Customers
              </Link>
              <FaArrowRight size={20} className="text-green-500 ml-4" />
            </div>
          </div>
        </div>
        {/* here */}
      </div>
    </div>
  );
}

export default Brand;
