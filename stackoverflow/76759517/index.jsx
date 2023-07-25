import React, { useState } from 'react';

export function App() {
	const [isDragging, setIsDragging] = useState(false);
	const [selectedFile, setSelectedFile] = useState(null);

	const handleDragEnter = (e) => {
		e.preventDefault();
		setIsDragging(true);
	};

	const handleDragLeave = (e) => {
		e.preventDefault();
		setIsDragging(false);
	};

	const handleDragOver = (e) => {
		e.preventDefault();
	};

	const handleDrop = (e) => {
		e.preventDefault();
		setIsDragging(false);
		const file = e.dataTransfer.files[0];
		setSelectedFile(file);
		console.log(file);
	};

	const handleFileInputChange = (e) => {
		const file = e.target.files[0];
		setSelectedFile(file);
		console.log(file);
	};

	return (
		<div
			className={`dropzone ${isDragging ? 'dragging' : ''}`}
			data-testid='dropzone'
			onDragEnter={handleDragEnter}
			onDragLeave={handleDragLeave}
			onDragOver={handleDragOver}
			onDrop={handleDrop}
		>
			<input
				type='file'
				id='input-file-upload'
				className='inputFile'
				data-testid='input-field'
				onChange={handleFileInputChange}
			/>
			<label htmlFor='input-file-upload' id='label-file-upload'>
				<div>{selectedFile ? <p>Selected File: {selectedFile.name}</p> : <p>Drag and drop files</p>}</div>
			</label>
		</div>
	);
}
