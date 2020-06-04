import React from 'react';
import Tilt from 'react-tilt';
import profileImg from './profile.png';
import './Logo.css';

const Logo = function() {
	return (
		<div className="m-4 mt0">
			<Tilt className="Tilt rounded shadow-sm" options={{max: 55}} style={{height: 150, width: 150}}>
				<img className="Tilt-inner rounded" alt="logo" src={profileImg} height="100px" />
			</Tilt>
		</div>
	);
};

export default Logo;
