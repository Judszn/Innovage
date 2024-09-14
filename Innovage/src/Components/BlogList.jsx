import React from "react";
import Props from "prop-types";
import BlogImgOne from "../assets/BlogListOne.jpg";

function BlogList(props) {
  return (
    <div className="flex my-4">
      <div>
        <img
          src={BlogImgOne}
          alt=""
          className="w-[70px] h-[70px] mx-3 rounded-md"
        />
      </div>
      <div className="mt-1">
        <h1 className="text-xl">Lorem Ipsum</h1>
        <p className="text-sm">lorem Ipsum Is wack</p>
      </div>
      <hr />
    </div>
  );
}

export default BlogList;
