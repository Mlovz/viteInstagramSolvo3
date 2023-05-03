import React from "react";
import cls from "./navbar.module.scss";
import Logo from "@/assets/Logo.png";
import Search from "./Search/Search";
import NavMenu from "./NavMenu/NavMenu";

const Navbar = () => {
  return (
    <div className={cls.navbar}>
      <div className="container">
        <div className={cls.wrap}>
          <img src={Logo} alt="" />

          <Search />

          <NavMenu />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
