import React from 'react';

const Hero = () => {
	const handleScroll = () => {
		const nextSection = document.getElementById('discover');

		if (nextSection) {
			nextSection.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return (
		<div>
			<div id='discover'>discover</div>
			<button onClick={handleScroll}>Explore Cars</button>
		</div>
	);
};

export default Hero;
