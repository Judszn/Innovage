import Card from "../Components/Card";
// import Avatar from "../assets/avatar.jpeg";
import React, { useState } from "react";

function Grid() {
  // const [Card, setDetails] = useState([
  //   {
  //     name: "Jude Tetteh",
  //     occupation: "Frontend-engineer",
  //     bio: "Avid reader",
  //   },
  //   { name: "Obed Tawiah", occupation: "Fullstack-engineer", bio: "Coding" },
  //   {
  //     name: "ALi Basit",
  //     occupation: "Fullstack-engineer/ Tutor",
  //     bio: "Business man",
  //   },
  //   {
  //     name: "Joshua Doe",
  //     occupation: "Photographer/ Tutor",
  //     bio: "Photography",
  //   },
  //   {
  //     name: "Jonathan",
  //     occupation: "Assembly engineer",
  //     bio: "Arts",
  //   },
  //   {
  //     name: "Daniel Koranteng",
  //     occupation: "UI designer",
  //     bio: "Painting",
  //   },
  // ]);

  // const handleCardsChange = (event) => {
  //   setDetails(event.target.value);
  // };

  return (
    <div className="Grid w-[100vw] bg-black h-[50vh]">
      <div className="Grid-items">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
      </div>
    </div>
  );
}

export default Grid;
