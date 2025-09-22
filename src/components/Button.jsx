import React from "react";

const Button = ({ btn_key, sound_id }) => {
	return (
		<button
			tabIndex={0}
			onClick={(e) => document.getElementById(btn_key).play()}
			className="p-4 g-border rounded-md no-line-h text-center text-xl font-semibold drum-pad s-shadow"
		>
			{btn_key}
			<audio id={btn_key} src={sound_id} className="clip"></audio>
		</button>
	);
};

export default Button;
