import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";

function Features() {
  return (
    <div>
      <Navigation />
      <div className="w-10/12 m-auto">
        <div className="py-8">
          <h1 className="py-8 font-bold uppercase">Our Features</h1>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Features;
