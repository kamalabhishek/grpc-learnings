import { createContext, useContext, useState } from "react";

const ModalContext = createContext({
  open: false,
  openModal: () => {},
  closeModal: () => {},
});

export const ModalContextProvider = ({
  children,
}: {
  children: JSX.Element;
}) => {
  const [open, setOpen] = useState(false);

  function openModal() {
    setOpen(true);
  }

  function closeModal() {
    setOpen(false);
  }

  return (
    <ModalContext.Provider value={{ open, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export function useModal() {
  return useContext(ModalContext);
}
