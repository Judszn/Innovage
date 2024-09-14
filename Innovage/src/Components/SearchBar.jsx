import React from "react";
import { BiDownArrow } from "react-icons/bi";
import { BiSolidDownArrow } from "react-icons/bi";
import { IoSearch } from "react-icons/io5";

function SearchBar() {
  return (
    <div className="flex w-screen justify-center mb-[10vh] mt-[20vh] bg-pink-600 p-10 sticky ">
      <div className="w-[80%]">
        <div className="mb-[30px]">
          <h1 className="text-white text-4xl font-bold ">
            Discover The Community
          </h1>
        </div>
        <div className="flex flex-wrap">
          <div className="SearchBar text-pink-600">
            <input type="text" placeholder="search..." />
            <IoSearch className="text-white text-2xl mr-3 mt-4 cursor-pointer" />
            <div className="List-items ml-5">
              <div>
                <div className="text-pink-600">Categories</div>
                <div>
                  <BiSolidDownArrow className="text-pink-600" />
                </div>
              </div>
              <div>
                <div className="text-pink-600">Filter</div>
                <div>
                  <BiSolidDownArrow className="text-pink-600" />
                </div>
              </div>
              <div>
                <div className="text-pink-600">Explore</div>
                <div>
                  <BiSolidDownArrow className="text-pink-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
