import React from "react";

const Header = () => {
  return (
    <div className="container mx-auto my-5">
      <div className="flex flex-row gap-4 justify-center">
        <a className="font-bold text-lg text-[blue]" href="/home">Home</a>
        <a className="font-bold text-lg text-[blue]" href="/about">About Us</a>
        <a className="font-bold text-lg text-[blue]" href="/contact">Contact Us</a>
      </div>
    </div>
  );
};

export default Header;
