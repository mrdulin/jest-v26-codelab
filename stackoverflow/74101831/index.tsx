import React, { useCallback, useState } from "react";

export interface ModalContextType {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  showModal: (title: string, content: string, hideCloseButton: boolean) => void;
  closeModal: () => void;
  titleText: string;
  contentText: string;
  hideCloseButton: boolean;
}

export const ModalContext = React.createContext<ModalContextType>({} as ModalContextType)

export const ModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [titleText, setTitleText] = useState<string>('');
  const [contentText, setContentText] = useState<string>('');
  const [hideCloseButton, setHideCloseButton] = useState<boolean>(false);

  const showModal = useCallback((title, content, hideCloseButton) => {
    setIsOpen(true);
    setTitleText(title);
    setContentText(content);
    setHideCloseButton(hideCloseButton);
  }, []);

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <ModalContext.Provider
      value={{
        isOpen,
        setIsOpen,
        showModal,
        closeModal,
        titleText,
        contentText,
        hideCloseButton
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};