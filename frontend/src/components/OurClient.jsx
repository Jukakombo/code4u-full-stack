import React from "react";
import { company_brands } from "./localDatabase";
import { RiTeamLine } from "react-icons/ri";
import { LiaIndustrySolid } from "react-icons/lia";
import { GiJugglingClubs } from "react-icons/gi";
import security_image from "../assets/security (2).svg";
import { Link } from "react-router-dom";
function OurClient() {
  return (
    <div className="bg-white w-10/12 m-auto py-10">
      <h1 className="font-bold text-2xl text-center">Our Clients</h1>
      <p className="text-lg text-center">
        We have been working with some Fortune 500+ clients
      </p>
      <div className="brands_images grid md:grid-cols-4 lg:grid-cols-7 gap-4 py-8">
        {company_brands.map((image) => (
          <div className="flex items-center " key={image._id}>
            <img src={image.image} alt="brands" className="w-[60px]" />
          </div>
        ))}
      </div>
      <div className="md:hidden flex items-center flex-wrap justify-between">
        {company_brands.map((image) => (
          <div className="  " key={image._id}>
            <img src={image.image} alt="brands" className="w-[100px]" />
          </div>
        ))}
      </div>
      <h1 className="pt-8 text-center font-bold text-xl md:w-[30%] m-auto">
        Manage your entire community in a single system
      </h1>
      <p className="text-center pb-4">Who is Nextcent suitable for?</p>
      <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8 ">
        <div className="text-center   boxshadow p-8 rounded-sm">
          <div className="flex justify-center">
            <RiTeamLine className="text-green-500" size={50} />
          </div>
          <h1 className="text-xl font-bold py-4">Membership Organisations</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            ipsum commodi sunt illum, minima quia!
          </p>
        </div>
        <div className="text-center boxshadow p-8 rounded-sm">
          <div className="flex justify-center">
            <LiaIndustrySolid className="text-green-500" size={50} color="" />
          </div>
          <h1 className="text-xl font-bold py-4 ">National Associations</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            ipsum commodi sunt illum, minima quia!
          </p>
        </div>
        <div className="text-center boxshadow p-8 rounded-sm">
          <div className="flex justify-center">
            <GiJugglingClubs className="text-green-500" size={50} />
          </div>
          <h1 className="text-xl font-bold py-4"> Clubs And Groups</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            ipsum commodi sunt illum, minima quia!
          </p>
        </div>
      </div>
      {/* last div */}
      <div className="py-8 grid sm:grid-cols-1 md:grid-cols-2 gap-8">
        <div className="image">
          <img src={security_image} alt="image1" className="w-full" />
        </div>
        <div className="text">
          <h1 className="font-bold text-2xl py-4">
            The unseen of spending three years at Pixelgrade
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
            Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
            tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
            Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
            elementum pulvinar odio.
          </p>
          <Link to="/learn-more">
            <button className="bg-green-500 text-white font-bold   p-2 my-4 rounded focus:outline-none focus:ring hover:bg-green-800 active:bg-blue-400">
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default OurClient;
