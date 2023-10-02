import React, { useEffect, useState } from "react";
import Index from "./components/Index";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import Loader from "./components/Loader";
import Register from "./Register";
import Login from "./components/Login";
import Features from "./components/Features";
import Admin from "./components/Admin";
import { useDispatch } from "react-redux";
import { getContacts } from "./actions/index";

function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  // useEffect for fetching user when login or signup
  useEffect(() => {
    const token = user?.token;
    // manual jwt
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, []);

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <BrowserRouter>
          <div>
            <Routes>
              <Route path="/" exact element={<Index />} />
              <Route path="/Home" element={<Index />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/Features" element={<Features />} />
              <Route path="/admin" element={<Admin />} />
            </Routes>
          </div>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
