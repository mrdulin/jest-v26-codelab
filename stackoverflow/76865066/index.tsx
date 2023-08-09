import React from 'react';

export function App() {
	const [inputValue, setInputValue] = React.useState('');
	const inputRef = React.useRef<HTMLInputElement>(null);

	const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		if (inputRef.current) {
			inputRef.current.value = inputRef.current.value + '1';
			setInputValue(inputRef.current.value);
		}
	};

	return (
		<form>
			<label htmlFor='password-input'>비밀번호</label>
			<input ref={inputRef} type='password' id='password-input' name='password-input' value={inputValue} />
			<button
				className='insert'
				onClick={(e) => {
					handleClick(e);
				}}
			>
				입력
			</button>
		</form>
	);
}
