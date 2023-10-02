import React from "react";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";

import { signup } from "./actions/user";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};
function Register() {
  const [formData, setFormData] = useState(initialState);
  const { firstName, lastName, email, password } = formData;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signUpUser = (e) => {
    e.preventDefault();
    dispatch(signup(formData, navigate));
  };
  return (
    <div>
      <Navigation />
      <div className="w-10/12 m-auto py-8">
        <h1 className="py-4 text-2xl text-center uppercase">
          Create an Account
        </h1>
        <form onSubmit={signUpUser}>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label
                htmlFor="firstName"
                className="font-bold text-lg text-gray-500"
              >
                First Name
              </label>
              <input
                type="text"
                placeholder="First Name"
                className="p-2 border-2 border-gray-300 my-2 outline-none"
                id="firstName"
                name="firstName"
                value={firstName}
                required
                onChange={(e) =>
                  setFormData({ ...formData, firstName: e.target.value })
                }
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="lastName"
                className="font-bold text-lg text-gray-500"
              >
                Last Name
              </label>
              <input
                id="lastName"
                required
                type="text"
                name="lastName"
                value={lastName}
                placeholder="Last Name"
                className="p-2 border-2 border-gray-300 my-2 outline-none"
                onChange={(e) =>
                  setFormData({ ...formData, lastName: e.target.value })
                }
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="font-bold text-lg text-gray-500"
              >
                Email
              </label>
              <input
                id="email"
                required
                type="email"
                placeholder="Email"
                className="p-2 border-2 border-gray-300 my-2 outline-none"
                name="email"
                value={email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="password"
                className="font-bold text-lg text-gray-500"
              >
                Password
              </label>
              <input
                name="password"
                value={password}
                required
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                id="password"
                type="password"
                placeholder="password"
                className="p-2 border-2 border-gray-300 my-2 outline-none"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="repeatpassword"
                className="font-bold text-lg text-gray-500"
              >
                Repeat Password
              </label>
              <input
                required
                id="repeatpassword"
                type="password"
                placeholder="Repeat Password"
                className="p-2 border-2 border-gray-300 my-2 outline-none"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  required
                  className="my-2 mr-2"
                  name=""
                  id=""
                />
                <p>I have agreed on terms and conditions</p>
              </div>
              <button
                type="submit"
                className="bg-green-500  my-2 text-white p-2 rounded-md font-bold hover:bg-green-700"
              >
                Create Account
              </button>
              <div className="flex items-center">
                <div className="">
                  <span>Have and account?</span>
                  <Link to="/login" className="text-green-500 ml-2">
                    Login
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Register;
