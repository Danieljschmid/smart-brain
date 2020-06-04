import React from 'react';

const Rank = function({name, entries}) {
	return (
		<div>
			<div className="text-white text-xl">{`${name}, your current entry count is...`}</div>
			<div className="text-white text-2xl">{entries}</div>
		</div>
	);
};

export default Rank;
