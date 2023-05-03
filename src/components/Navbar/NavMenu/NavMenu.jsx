import React from "react";
import cls from "./navMenu.module.scss";
import Icon from "@/components/Icon/Icon";
import { IconType } from "@/components/Icon/IconTypes";

const NavMenu = () => {
  return (
    <div className={cls.navMenu}>
      <a href="">
        <Icon type={IconType.home} />
      </a>
      <a href="">
        <Icon type={IconType.comment} />
      </a>
      <a href="">
        <Icon type={IconType.compass} />
      </a>

      <Icon type={IconType.favorite} />
      <Icon type={IconType.add} />
    </div>
  );
};

export default NavMenu;
