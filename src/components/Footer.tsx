import React from "react";
import { FaFacebook, FaPinterest } from "react-icons/fa";
import {
  AiFillTwitterCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";
import { TiSocialTumblerCircular } from "react-icons/ti";
import { Container } from "@/components";

const socialIcons = [
  {
    name: "Facebook",
    Icon: FaFacebook,
    link: "#",
  },
  {
    name: "Instagram",
    Icon: AiFillInstagram,
    link: "#",
  },
  {
    name: "Twitter",
    Icon: AiFillTwitterCircle,
    link: "#",
  },
  {
    name: "Youtube",
    Icon: AiFillYoutube,
    link: "#",
  },
  {
    name: "Pinterest",
    Icon: FaPinterest,
    link: "#",
  },
  {
    name: "Tumbler",
    Icon: TiSocialTumblerCircular,
    link: "#",
  },
];

const Footer = () => {
  return (
    <footer className="w-full bg-white">
      <Container className="flex justify-center">
        {/* Links */}
        <div className="flex flex-col items-center justify-center space-y-8 md:items-start md:space-y-0 md:space-x-8 md:flex-row py-14">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold uppercase">Company</h3>

            <div className="flex flex-col mt-4 space-y-2 text-xs">
              <a href="#">Privacy and Policy</a>
              <a href="#">About Us</a>
              <a href="#">Partners</a>
              <a href="#">Careers</a>
              <a href="#">Review from Customers</a>
              <a href="#">Blogs</a>
            </div>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold uppercase">Partner Up</h3>

            <div className="flex flex-col mt-4 space-y-2 text-xs">
              <a href="#">B2B and corporate gifts</a>
              <a href="#">Become and ambassador</a>
              <a href="#">Become our Partner Supplier</a>
            </div>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold uppercase">Customer Service</h3>

            <div className="flex flex-col mt-4 space-y-2 text-xs">
              <a href="#">Get help and find answers</a>
              <a href="#">FAQs and Policies</a>
              <a href="#">Payments</a>
              <a href="#">Terms and Conditions</a>
              <a href="#">Contact Us</a>
            </div>
          </div>

          {/* Socials */}
          <div>
            <h3 className="text-xl font-bold uppercase">Follow Us</h3>
            <ul className="mt-4">
              {socialIcons.map(({ name, Icon, link }) => (
                <li key={name}>
                  <a
                    href={link}
                    className="flex items-center justify-center mb-2 text-xs md:justify-start"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <Icon className="w-6 h-6 mr-1" />
                    <span>{name}</span>
                  </a>
                </li>
              ))}
              {/* <li>
                <a href='' className='flex items-center justify-center text-xs'>
                  <FaFacebook className='w-6 h-6 mr-1' />
                  <span>Facebook</span>
                </a>
              </li> */}
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
