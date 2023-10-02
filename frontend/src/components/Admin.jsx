import React from "react";
import Footer from "./Footer";
import Navigation from "./Navigation";
import DashboardTable from "./Table";
import DashboardTab from "./Tabs";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Admin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  useEffect(() => {
    const token = user?.token;
    // manual jwt
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, []);
  // logout function
  const logout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/login");
    setUser(null);
  };

  if (!user) {
    navigate("/login");
  } else {
    return (
      <>
        <div className="w-full bg-green-900 py-8">
          <div className="w-10/12 m-auto flex justify-between text-white">
            <div className="">
              <h1 className="text-2xl font-bold ">
                hi 🐱‍🏍{user?.authData?.result?.name}
              </h1>
            </div>
            <div className="">
              <button
                onClick={logout}
                className="font-bold text-2xl bg-red-400 rounded p-2"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
        <div className="bg-black-100 grid sm:grid-cols-1 md:grid-cols-2 w-10/12 m-auto py-8 gap-4">
          {/* left sidebars */}

          <DashboardTab />
          {/* right side mar */}
          <DashboardTable />
        </div>
        <Footer />
      </>
    );
  }
}

export default Admin;
