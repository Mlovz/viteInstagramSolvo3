import React from "react";
import { IconTypes } from "./IconTypes";
import cls from "./icon.module.scss";

const Icon = ({ className, type }) => {
  return (
    <div className={`${cls.icon} ${className || ""}`}>
      {IconTypes.get(type)}
    </div>
  );
};

export default Icon;
