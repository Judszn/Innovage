import React from "react";
import { FiInstagram } from "react-icons/fi";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";

function Footer() {
  return (
    <div className="w-screen h-fit mt-[40vh] text-white p-5 bg-pink-800 text-xl">
      <div className="flex flex-wrap items-center justify-evenly w-[100%] h-fit p-10 mb-2">
        <div>Innovage</div>

        <div>
          <li className="list-none">
            <ul className="m-3">Community</ul>
            <ul className="m-3">Events</ul>
            <ul className="m-3">Collaboration</ul>
          </li>
        </div>
        <div>
          <li className="list-none">
            <ul className="m-3">Resource</ul>
            <ul className="m-3">Help</ul>
            <ul className="m-3">Info</ul>
          </li>
        </div>
        <div>
          <li className="list-none">
            <ul className="m-3">Contibute</ul>
            <ul className="m-3">Donate</ul>
            <ul className="m-3">Partner</ul>
          </li>
        </div>
      </div>
      <div className="w-[100%] h-fit">
        <hr className="w-[70%] m-auto" />

        <div className="flex justify-between w-[70%] m-auto">
          <div className="m-3">Copyright</div>
          <div className="m-3 flex text-xl">
            <FiInstagram className="m-1 " />
            <BsTwitterX className="m-1" />
            <FaFacebook className="m-1" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
