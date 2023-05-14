import React, { useState } from "react";
import cls from "./navMenu.module.scss";
import Icon from "@/components/Icon/Icon";
import { IconType } from "@/components/Icon/IconTypes";
import { Link } from "react-router-dom";
import useModal from "@/hooks/useModal";
import Modal from "@/components/Modal/Modal";

const NavMenu = () => {
  // const { open, onOpen, onClose } = useModal();
  const [authModal, setAuthModal] = useState({
    open: false,
    view: "login",
  });

  const onOpen = () => {
    setAuthModal({
      ...authModal,
      open: true,
    });
  };

  const onClose = () => {
    setAuthModal({
      ...authModal,
      open: false,
      view: "login",
    });
  };

  const onOpenRegister = () => {
    setAuthModal({
      ...authModal,
      view: "register",
    });
  };

  const onOpenLogin = () => {
    setAuthModal({
      ...authModal,
      view: "login",
    });
  };

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

      <Modal open={authModal.open} onClose={onClose}>
        {authModal.view === "login" && (
          <div>
            <h1>Login</h1>
            <button onClick={onOpenRegister}>Перейти на регистрация</button>
          </div>
        )}
        {authModal.view === "register" && (
          <div>
            <h1>Register</h1>
            <button onClick={onOpenLogin}>Перейти на авторизации</button>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default NavMenu;
