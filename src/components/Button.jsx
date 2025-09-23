import React from "react";

const Button = ({ btn_key, sound_id, displayFunc }) => {
	return (
		<button
			tabIndex={0}
			onClick={(e) => {
				document.getElementById(btn_key).play();
				displayFunc(
					sound_id.replace(/\.mp3|\/|_/g, (match) =>
						match === "_" ? " " : ""
					)
				);
			}}
			className="btn g-border rounded-md no-line-h text-center text-xl font-semibold drum-pad s-shadow"
			id={sound_id.replace(/\.mp3|\/|_/g, (match) =>
				match === "_" ? " " : ""
			)}
		>
			{btn_key}
			<audio id={btn_key} src={sound_id} className="clip"></audio>
		</button>
	);
};

export default Button;
