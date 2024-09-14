import React from "react";
import BlogImage from "../assets/BlogPost.jpg";
import BlogList from "../Components/BlogList.jsx";

function Grid() {
  return (
    <div className="flex w-[100%] m-auto justify-center">
      <main className=" w-[50%] h-fit items-center justify-center text-white text-xl">
        <img
          src={BlogImage}
          alt=""
          className="w-[100%] h-[500px] bg-blue-gray-50"
        />
        <h1 className="mb-2 text-4xl w-[100%]  text-pink-600 font-bold py-5">
          THE NEW AGE: The rise of Artificial Intelligence
        </h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex explicabo,
        sunt dicta voluptas atque vitae non porro vero rerum cupiditate, labore
        sequi. Recusandae, omnis! Perspiciatis ullam magnam similique modi
        aperiam? Ratione dolorem at iusto quasi aliquam. Similique soluta sit
        consectetur molestiae molestias sunt optio temporibus modi, odit nulla
        illo! Ipsum nam officiis repellendus itaque earum fuga natus ab
        voluptates qui. Sint provident praesentium assumenda nam? Architecto
        neque facilis nihil voluptatem! Dolor vel officiis cupiditate non ad
        illo animi? Sunt quia, sequi dignissimos placeat necessitatibus nesciunt
        cum. Et harum blanditiis nesciunt? Quidem sapiente corporis magni quos
        provident saepe nam sunt voluptate. Quisquam, nostrum. Id distinctio
        temporibus, totam laboriosam tempora similique officia, libero quis
        <br />
        <br />
        recusandae veritatis saepe consectetur suscipit deserunt a ut? Aliquam
        fugit tempore, consectetur itaque deserunt incidunt provident dicta.
        Recusandae id sed facere ipsum expedita. Officia minima assumenda,
        sapiente nulla aliquid accusamus sed, labore mollitia natus, eos
        reiciendis iusto officiis. Amet dicta numquam ad quaerat a veritatis,
        deleniti incidunt voluptatum atque, culpa voluptate facilis ipsam,
        repellat mollitia maxime rem alias. Ut nesciunt quam dicta debitis alias
        soluta aspernatur fuga praesentium! Atque sit voluptatem dolore
        molestias non, deleniti rerum harum, enim aliquam, distinctio provident
        officiis suscipit hic veniam pariatur optio inventore eaque possimus
        illum. Totam nulla laudantium voluptate impedit iure in? Dolores, maxime
        eaque odio alias non numquam animi, voluptatum iusto esse eius dolorem
        <br />
        <br />
        recusandae veritatis saepe consectetur suscipit deserunt a ut? Aliquam
        fugit tempore, consectetur itaque deserunt incidunt provident dicta.
        Recusandae id sed facere ipsum expedita. Officia minima assumenda,
        sapiente nulla aliquid accusamus sed, labore mollitia natus, eos
        reiciendis iusto officiis. Amet dicta numquam ad quaerat a veritatis,
        deleniti incidunt voluptatum atque, culpa voluptate facilis ipsam,
        repellat mollitia maxime rem alias. Ut nesciunt quam dicta debitis alias
        soluta aspernatur fuga praesentium! Atque sit voluptatem dolore
        molestias non, deleniti rerum harum, enim aliquam, distinctio provident
        officiis suscipit hic veniam pariatur optio inventore eaque possimus
        illum. Totam nulla laudantium voluptate impedit iure in? Dolores, maxime
        eaque odio alias non numquam animi, voluptatum iusto esse eius dolorem
      </main>
      <aside className=" right-0 h-fit bg-pink-600 text-white p-5 flex-wrap sticky ">
        <h1 className="text-white text-3xl mb-2">Recent Post</h1>
        <hr />
        <BlogList className="border border-b my-3" />
        <hr />
        <BlogList className="border border-b my-3" />
        <hr />
        <BlogList className="border border-b my-3" />
        <hr />
        <BlogList className="border border-b my-3" />
        <hr />
        <BlogList className="border border-b my-3" />
        <hr />
        <BlogList className="border border-b my-3" />
        <hr />
      </aside>
      <div></div>
      <hr className="mb-20 mt-20" />
    </div>
  );
}

export default Grid;
