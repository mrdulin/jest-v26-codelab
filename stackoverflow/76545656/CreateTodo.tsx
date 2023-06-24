import React, { useState } from 'react';

export const CreateTodo = ({ onAdd }) => {
	const [inputs, setInputs] = useState({
		text: '',
		completed: false,
		id: new Date().valueOf(),
	});

	const { text, completed } = inputs;

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!text) return;
		onAdd(inputs);
	};

	const handleChange = ({ target: { name, value, checked } }) => {
		setInputs((prev) => {
			return {
				...prev,
				[name]: name === 'completed' ? checked : value,
			};
		});
	};

	return (
		<form onSubmit={handleSubmit}>
			<input type='checkbox' checked={completed} name='completed' onChange={handleChange} />
			<input type='text' name='text' value={text} onChange={handleChange} />
			<input type='submit' hidden />
		</form>
	);
};
