import { act, renderHook } from '@testing-library/react-hooks';
import React, { FC, useEffect, useMemo, useState } from 'react';

interface PropsCtx {
	input: string;
	myval: string;
	setMyVal: React.Dispatch<React.SetStateAction<string>>;
}
const placeholder: PropsCtx = {
	input: '',
	myval: '',
	setMyVal: (prev) => prev,
};
const CTX = React.createContext<PropsCtx>(placeholder);
interface PropsProvider {
	input: string;
	children: React.ReactNode;
}
const MyProvider: FC<PropsProvider> = ({ children, input }) => {
	const [myval, setMyVal] = useState<PropsCtx['myval']>(placeholder.myval);
	const value = useMemo<PropsCtx>(() => ({ input, myval, setMyVal }), [input, myval, setMyVal]);
	return <CTX.Provider value={value}>{children}</CTX.Provider>;
};

const Wrapper: FC<PropsProvider> = ({ input, children }) => <MyProvider input={input}>{children}</MyProvider>;

interface PropsUse {
	newinput: string;
}
const useFromProvider = (props: PropsUse) => {
	const { input, myval, setMyVal } = React.useContext(CTX);
	useEffect(() => {
		setTimeout(() => {
			setMyVal(props.newinput);
		}, 1000);
	}, []);

	return { input, myval, setMyVal };
};

describe('useFromProvider', () => {
	it('should return context results', async () => {
		const wrapper = ({ children }) => <Wrapper input={'hello'}>{children}</Wrapper>;
		const { result } = renderHook(() => useFromProvider({ newinput: 'goodbye' }), { wrapper });

		expect((result as any).current.input).toBeTruthy();
	});
});
