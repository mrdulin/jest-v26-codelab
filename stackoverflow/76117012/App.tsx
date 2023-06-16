import React, { useState } from 'react';

function App() {
	const [selectedValue, setSelectedValue] = useState();
	function selectionChange(value) {
		console.log(value);
		setSelectedValue(value);
	}
	return (
		<div className='App'>
			<select value={selectedValue} data-testid='Oshop' onChange={(e) => selectionChange(e.target.value)}>
				<option value='fruit'>Fruit</option>
				<option value='vegetable'>Vegetable</option>
				<option value='meat'>Meat</option>
			</select>
		</div>
	);
}

export default App;
