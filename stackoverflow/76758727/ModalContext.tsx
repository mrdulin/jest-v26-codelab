import React, { ReactNode, createContext, useContext, useState } from 'react';

type ProviderProps = {
	children: ReactNode;
	value: {
		showModal: boolean;
		setShowModal: (val: boolean) => void;
	};
};

export const ModalContext = createContext<ProviderProps['value'] | undefined>(undefined);

export const useModalContext = () => {
	const context = useContext(ModalContext);
	if (!context) throw new Error('use `useModalContext` only inside `ModalProvider`');
	return context;
};

export type { ProviderProps as ModalProviderProps };

export const ModalProvider = ({ children }: Omit<ProviderProps, 'value'>) => {
	const [showModal, setShowModal] = useState(false);
	return <ModalContext.Provider value={{ showModal, setShowModal }}>{children}</ModalContext.Provider>;
};
