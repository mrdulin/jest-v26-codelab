import React, { useState } from 'react';

export const SearchMenu = () => <input />;

const Toggle = () => {
	const [dropdownShown, setDropdownShown] = useState(false);

	return (
		<div
			className='search-type'
			onMouseOver={() => setDropdownShown(true)}
			onMouseLeave={() => setDropdownShown(false)}
		>
			<h1>Hover over me to hide/unhide the input</h1>
			{dropdownShown && <SearchMenu />}
		</div>
	);
};

export default Toggle;
