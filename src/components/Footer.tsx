import React from "react";
import { Container } from "@/components";

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
        </div>

        {/* Socials */}
        <div></div>
      </Container>
    </footer>
  );
};

export default Footer;
