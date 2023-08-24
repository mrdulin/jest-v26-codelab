import React, { useState, useEffect } from 'react';

const App = () => {
	const [users, setUsers] = useState(null);
	const [error, setError] = useState('');

	useEffect(() => {
		const fetchAllUsers = async () => {
			try {
				const response = await fetch('https://jsonplaceholder.typicode.com/users');
				const data = await response.json();
				setUsers(data);
			} catch (err) {
				setError('Something went wrong!');
			}
		};
		fetchAllUsers();
	}, []);

	console.log(users);

	return (
		<>
			<h1>List of Users</h1>
			{error && <div>{error}</div>}
			{users ? <div>{users[0]}</div> : <p>No users found</p>}
		</>
	);
};

export default App;
