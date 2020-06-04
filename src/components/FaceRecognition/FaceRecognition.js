import React from 'react';
import './FaceRecognition.css';
const FaceRecognition = function({imageUrl, box}) {
	return (
		<div className="m-6 center justify-center">
			<div className="absolute center justify-center">
				<img id="inputImage" alt="" src={imageUrl} className="center" />
				<div
					className="bounding-box rounded"
					style={{top: box.topRow, bottom: box.bottomRow, left: box.leftCol, right: box.rightCol}}
				/>
			</div>
		</div>
	);
};

export default FaceRecognition;
