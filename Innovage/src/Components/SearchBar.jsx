import React from "react";

function SearchBar() {
  return (
    <div>
      {/* <h1>Discover Coommunity</h1> */}
      <div className="SearchBar">
        <input type="text" placeholder="search..." />
        <div className="List-items">
          <div>Categories</div>
          <div>Filter</div>
          <div>Explore</div>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
