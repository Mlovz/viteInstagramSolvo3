import React, { useState } from "react";

const useModal = () => {
  const [open, setOpen] = useState(false);

  const onOpen = () => {
    // if (view) {
    //   setOpen({
    //     ...open,
    //     view: "login",
    //     isOpen: true,
    //   });
    // }

    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return { open, onOpen, onClose };
};

export default useModal;
