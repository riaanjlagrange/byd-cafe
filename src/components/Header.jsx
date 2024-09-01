// import React from "react";
import NavBar from "./NavBar";
import Logo from "./Logo";

function Header() {
  return (
    <header className="flex justify-between items-end px-10 py-5 bg-Beige shadow-sm">
      <Logo />
      <NavBar />
    </header>
  );
}

export default Header;
