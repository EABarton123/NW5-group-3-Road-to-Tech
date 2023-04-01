import React from "react";

// Functional Componenet
const Input = ({ type, placeholder, value, onChange }) => {
	return (
		<Input
			value={value}
			onChange={onChange}
			type={type}
			placeholder={placeholder}
		/>
	);
};

export default Input;
