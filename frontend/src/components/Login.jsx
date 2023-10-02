import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { signin } from "../actions/user";
import ProgrssBar from "./ProgressBar";
const initialState = {
  email: "",
  password: "",
};
function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialState);
  const [showProgress, setShowProgress] = useState(false);
  const { email, password } = formData;

  const handleLogin = (e) => {
    e.preventDefault();
    setShowProgress(true);
    dispatch(signin(formData, navigate));
    setTimeout(() => {
      setShowProgress(false);
    }, 7000);
  };
  return (
    <div>
      <Navigation />
      <div className="w-10/12 m-auto">
        <h1 className="text-center font-bold py-8">Login </h1>
        <form onSubmit={handleLogin}>
          <div className=" md:w-[60%] m-auto">
            <div className="flex flex-col">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                className="outline-none my-2  border-2 border-gray-300 p-2"
                placeholder="Please ent your email"
                required
                name="email"
                value={email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="Password">Password</label>
              <input
                type="password"
                id="email"
                className="outline-none my-2  border-2 border-gray-300 p-2"
                placeholder="Please ent your password"
                required
                name="password"
                value={password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
            </div>
            <div className="flex flex-col">
              {showProgress ? (
                <ProgrssBar />
              ) : (
                <button
                  className="bg-green-500 p-2 my-2 rounded-md font-bold text-xl text-white hover:bg-green-700"
                  type="submit"
                >
                  Login
                </button>
              )}
              <div className="flex items-center py-4">
                <span>Don't have an account</span>
                <Link to="/register" className="text-green-500 ml-2">
                  Create Account
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
