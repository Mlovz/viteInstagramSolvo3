import React, { useEffect } from "react";
import cls from "./modal.module.scss";
import Portal from "../Portal/Portal";

const Modal = ({ open, onClose, children }) => {
  useEffect(() => {
    const fun = (e) => {
      if (e.key === "Escape" && onClose) {
        onClose();
      }
    };

    window.addEventListener("keydown", fun);

    return () => {
      window.addEventListener("keydown", fun);
    };
  }, [onClose]);

  return (
    <Portal>
      <div
        className={`${cls.modal} ${open ? cls.active : ""}`}
        onClick={onClose}
      >
        <div
          className={`${cls.box} ${open ? cls.active : ""}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className={cls.close} onClick={onClose}>
            &times;
          </div>

          <div className={cls.content}>{children}</div>
        </div>
      </div>
    </Portal>
  );
};

export default Modal;
