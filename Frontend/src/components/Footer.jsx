import React from "react";

const Footer = () => (
  <footer className="bg-[#002684] text-white p-[50px]">
    <div className="flex justify-between px-4 text-[#a1bce6] w-[80%] m-auto">
      <div className="footer-column">
        <h3 className="text-lg font-semibold">On the Menu</h3>
        <ul className="mt-2">
          <li>
            <a href="#" className="hover:text-white">
              Pricing
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-white">
              Our Vision
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-white">
              Market
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-white">
              Gift Cards
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-white">
              Blog
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-white">
              Cookbook
            </a>
          </li>
        </ul>
      </div>

      <div className="footer-column">
        <h3 className="text-lg font-semibold">Suppliers</h3>
        <ul className="mt-2">
          <li>
            <a href="#" className="hover:text-white">
              Affiliates
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-white">
              Supply Chains Act
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-white">
              Food Safety
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-white">
              Career
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-white">
              Press
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-white">
              Our Team
            </a>
          </li>
        </ul>
      </div>

      <div className="footer-column">
        <h3 className="text-lg font-semibold">Military & Veterans</h3>
        <ul className="mt-2">
          <li>
            <a href="#" className="hover:text-white">
              Students
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-white">
              Graduates
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-white">
              Teachers
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-white">
              Seniors (+55)
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-white">
              Medical Staff
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-white">
              First Responders
            </a>
          </li>
        </ul>
      </div>

      <div className="footer-column">
        <h3 className="text-lg font-semibold text-white">Customer Support</h3>
        <ul className="mt-2 ">
          <li>
            <a href="#" className="hover:text-white">
              Help Center & FAQ
            </a>
          </li>
          <li>
            <a href="mailto:contact@HomeChef.com" className="hover:text-white">
              contact@HomeChef.com
            </a>
          </li>
          <li>
            <a href="tel:(646) 891-4349" className="hover:text-white">
              (646) 891-4349
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div className="text-center mt-[30px]">
      <p className="text-white">© Home Chef, LLC 2024</p>
      <ul className="mt-2">
        <li className="inline-block mr-2">
          <a href="#" className="hover:text-white">
            Ad Preferences
          </a>
        </li>
        <li className="inline-block mr-2">
          <a href="#" className="hover:text-white">
            Privacy
          </a>
        </li>
        <li className="inline-block">
          <a href="#" className="hover:text-white">
            Terms
          </a>
        </li>
      </ul>
    </div>
  </footer>
);

export default Footer;
