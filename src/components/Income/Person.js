import React from "react";

const Person = (props) => {
	const { name, income } = props;
	return (
		<div className="person">
			<p className="name">{name}</p>
			<span class="income">${income} (Bi-weekly)</span>
		</div>
	);
};

export default Person;
