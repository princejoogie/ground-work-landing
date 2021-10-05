/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const ContactForm = () => {
  const [firstName, setFirstName] = useState<string>();
  const [lastName, setLastName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [message, setMessage] = useState<string>();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form
      style={{ maxWidth: "800px" }}
      onSubmit={handleSubmit}
      className="flex flex-col mx-auto sm:flex-row"
    >
      <div className="flex flex-col w-full p-10 bg-gray-200 sm:w-3/5">
        <h2 className="mb-5 text-3xl ">Get In Touch</h2>
        <label htmlFor="first-name" className="font-medium">
          First Name
        </label>
        <input
          className="px-2 py-2 mt-1 mb-6 font-medium bg-gray-200 border-b border-solid outline-none border-secondary"
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          name="first-name"
          id="first-name"
          required
        />
        <label htmlFor="last-name" className="font-medium">
          Last Name
        </label>
        <input
          className="px-2 py-2 mt-1 mb-6 font-medium bg-gray-200 border-b border-solid outline-none border-secondary"
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          name="last-name"
          id="last-name"
          required
        />
        <label htmlFor="email" className="font-medium">
          Email
        </label>
        <input
          className="px-2 py-2 mt-1 mb-6 font-medium bg-gray-200 border-b border-solid outline-none border-secondary"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          id="email"
          required
        />
        <label htmlFor="message" className="font-medium">
          Message
        </label>
        <textarea
          className="px-2 py-2 mt-1 mb-6 font-medium bg-gray-200 border-b border-solid outline-none border-secondary"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          name="message"
          id="message"
          required
        />
        <button type="submit" className="py-3 text-white bg-secondary">
          Submit
        </button>
      </div>

      <div className="w-full p-10 text-center text-white sm:w-2/5 bg-secondary sm:text-left">
        <h2 className="mb-5 text-3xl ">Contact us</h2>

        <div className="mb-10">
          <p className="mb-2 text-lg">Phone</p>
          <p>0912-345-6789</p>
        </div>
        <div className="mb-10 text-lg">
          <p className="mb-2">Email</p>
          <a
            href="mailto:example@mail.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            example@mail.com
          </a>
        </div>
        <div className="mb-10">
          <p className="mb-2 text-lg">Social Media</p>
          <ul className="flex flex-col items-center sm:items-start">
            <li className="mb-2">
              <a
                href="#"
                className="flex"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FaFacebookF className="w-5 h-5 mr-1" />
                @facebook_username
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#"
                className="flex"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FaTwitter className="w-5 h-5 mr-1" />
                @twitter_username
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#"
                className="flex"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FaLinkedinIn className="w-5 h-5 mr-1" />
                @linkedin_username
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#"
                className="flex"
                target="_blank"
                rel="noreferrer noopener"
              >
                <AiFillInstagram className="w-5 h-5 mr-1" />
                @instagram_username
              </a>
            </li>
          </ul>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
