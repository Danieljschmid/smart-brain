import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = function({onInputChange, onButtonSubmit}) {
	return (
		<div>
			<p className="text-xl text-white m-5">{'This will detect faces in your pictures. Give it a try!'}</p>
			<div className="justify-center">
				<div className="form center p-6 rounded shadow">
					<input className="text-l w-8/12 mr-2 p-3" type="text" onChange={onInputChange} />
					<button
						className="text-l bg-indigo-800 duration-300 hover:bg-indigo-700 p-3 rounded text-white w-3/12"
						onClick={onButtonSubmit}
					>
						Detect
					</button>
				</div>
			</div>
		</div>
	);
};

export default ImageLinkForm;
