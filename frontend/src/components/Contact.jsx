import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createContact } from "../actions";
const initialState = {
  name: "",
  email: "",
  subject: "",
  message: "",
  phone: "",
};

function Contact() {
  const dispatch = useDispatch();
  const [contacts, setContacts] = useState(initialState);
  const { email, name, subject, message, phone } = contacts;
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createContact(contacts));
    clear();
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
    }, 9000);
  };

  const clear = () => {
    setContacts({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };
  return (
    <div className="w-10/12 m-auto py-8">
      <h1 className="text-2xl scroll-py-8 text-center uppercase font-bold">
        Contact form
      </h1>
      <p className="text-center py-4">Please fill in the form very correctly</p>
      <div className="py-4">
        {showSuccess ? (
          <div className="bg-green-100 p-4 text-xl text-center rounded-md">
            Congrats! Your message was successfully sent to our main, we will
            get back to you within 24 hours
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label htmlFor="name" className="py-2 text-xl">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) =>
                    setContacts({ ...contacts, name: e.target.value })
                  }
                  id="name"
                  placeholder="Please enter your  name "
                  className="outline-none border-[2px] border-gray-400 p-2 rounded"
                  required
                />
              </div>{" "}
              <div className="flex flex-col">
                <label htmlFor="email" className="py-2 text-xl">
                  Email
                </label>
                <input
                  required
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) =>
                    setContacts({ ...contacts, email: e.target.value })
                  }
                  placeholder="Please enter your email "
                  className="outline-none border-[2px] border-gray-400 p-2 rounded"
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label htmlFor="phone" className="py-2 text-xl">
                  Phone Number
                </label>
                <input
                  type="text"
                  required
                  id="phone"
                  name="phone"
                  value={phone}
                  onChange={(e) =>
                    setContacts({ ...contacts, phone: e.target.value })
                  }
                  placeholder="Please enter your  phone number "
                  className="outline-none border-[2px] border-gray-400 p-2 rounded"
                />
              </div>{" "}
              <div className="flex flex-col">
                <label htmlFor="subject" className="py-2 text-xl">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  required
                  name="subject"
                  value={subject}
                  onChange={(e) =>
                    setContacts({ ...contacts, subject: e.target.value })
                  }
                  placeholder="Please enter your subject "
                  className="outline-none border-[2px] border-gray-400 p-2 rounded"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label htmlFor="message" className="py-2 text-xl">
                Message
              </label>
              <textarea
                required
                name="message"
                value={message}
                onChange={(e) =>
                  setContacts({ ...contacts, message: e.target.value })
                }
                rows={10}
                type="text"
                id="message"
                placeholder="Please enter your message "
                className="outline-none border-[2px] border-gray-400 p-2 rounded"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-green-500 p-2 text-white my-4  px-4 rounded-md text-xl font-bold hover:bg-green-600 "
            >
              Send
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Contact;
