import React from "react";
import cls from "./navMenu.module.scss";
import Icon from "@/components/Icon/Icon";
import { IconType } from "@/components/Icon/IconTypes";
import { Link } from "react-router-dom";
import useModal from "@/hooks/useModal";
import Modal from "@/components/Modal/Modal";

const NavMenu = () => {
  const { open, onOpen, onClose } = useModal();

  return (
    <div className={cls.navMenu}>
      <Link to="/">
        <Icon type={IconType.home} />
      </Link>
      <Link to="/message">
        <Icon type={IconType.comment} />
      </Link>
      <Link to="/compass">
        <Icon type={IconType.compass} />
      </Link>

      <Icon type={IconType.favorite} />
      <Icon type={IconType.add} onClick={onOpen} />

      <Modal open={open} onClose={onClose}></Modal>
    </div>
  );
};

export default NavMenu;
