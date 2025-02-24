import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import Notiflix from "notiflix";
import NavBar from "../components/Navbar/NavBar";
import Footer from "../components/Footer";
import { useDocTitle } from "../components/CustomHook";

const Contact = () => {
  useDocTitle("Code Factory");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState([]);

  const clearErrors = () => {
    setErrors([]);
  };

  const clearInput = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  const sendEmail = (e) => {
    e.preventDefault();
    document.getElementById("submitBtn").disabled = true;
    document.getElementById("submitBtn").innerHTML = "Sending...";

    const templateParams = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      phone_number: phone,
      message: message,
    };

    emailjs
      .send(
        "service_srds7hh", // Replace with your EmailJS Service ID
        "template_ln49lcg", // Replace with your EmailJS Template ID
        templateParams,
        "3AFlNbOcAeTaDcrGp" // Replace with your EmailJS Public Key
        
      )
      .then((response) => {
        document.getElementById("submitBtn").disabled = false;
        document.getElementById("submitBtn").innerHTML = "Send Message";
        clearInput();
        Notiflix.Report.success("Success", "Message sent successfully!", "Okay");
      })
      .catch((error) => {
        document.getElementById("submitBtn").disabled = false;
        document.getElementById("submitBtn").innerHTML = "Send Message";
        Notiflix.Report.failure(
          "Error",
          "Failed to send the message. Please try again.",
          "Okay"
        );
      });
  };

  return (
    <>
      <NavBar />
      <div id="contact" className="flex justify-center items-center mt-8 w-full bg-white py-12 lg:py-24">
        <div className="container mx-auto my-8 px-4 lg:px-20" data-aos="zoom-in">
          <form onSubmit={sendEmail}>
            <div className="w-full bg-white p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
              <h1 className="font-bold text-center lg:text-left text-red-600 uppercase text-4xl">
                Send us a message
              </h1>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                <div>
                  <input
                    name="first_name"
                    className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="First Name*"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    onKeyUp={clearErrors}
                  />
                  {errors.first_name && <p className="text-red-500 text-sm">{errors.first_name}</p>}
                </div>
                <div>
                  <input
                    name="last_name"
                    className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="Last Name*"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    onKeyUp={clearErrors}
                  />
                  {errors.last_name && <p className="text-red-500 text-sm">{errors.last_name}</p>}
                </div>
                <div>
                  <input
                    name="email"
                    className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="email"
                    placeholder="Email*"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyUp={clearErrors}
                  />
                  {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                </div>
                <div>
                  <input
                    name="phone_number"
                    className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="number"
                    placeholder="Phone*"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    onKeyUp={clearErrors}
                  />
                  {errors.phone_number && <p className="text-red-500 text-sm">{errors.phone_number}</p>}
                </div>
              </div>
              <div className="my-4">
                <textarea
                  name="message"
                  placeholder="Message*"
                  className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyUp={clearErrors}
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
              </div>
              <div className="my-2 w-1/2 lg:w-2/4">
                <button
                  type="submit"
                  id="submitBtn"
                  className="uppercase text-sm font-bold tracking-wide bg-black hover:bg-red-600 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline"
                >
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
