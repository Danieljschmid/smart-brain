import React from 'react';

const Navigation = ({onRouteChange, isSignedIn}) => {
	if (isSignedIn) {
		return (
			<nav style={{display: 'flex', justifyContent: 'flex-end'}}>
				<p
					onClick={() => onRouteChange('signout')}
					className="text-xl text-white hover:text-gray-400 p-6 cursor-pointer"
				>
					Sign Out
				</p>
			</nav>
		);
	} else {
		return (
			<nav style={{display: 'flex', justifyContent: 'flex-end'}}>
				<p
					onClick={() => onRouteChange('signin')}
					className="text-xl text-white hover:text-gray-400 p-6 cursor-pointer"
				>
					Sign In
				</p>
				<p
					onClick={() => onRouteChange('register')}
					className="text-xl text-white hover:text-gray-400 p-6 cursor-pointer"
				>
					Register
				</p>
			</nav>
		);
	}
};

export default Navigation;
