import React from "react";
import Button from "./components/Button";
import { useEffect } from "react";
import { useState } from "react";

const App = () => {
	const sounds = [
		{ key: "Q", mp3Path: "/Cev_H2.mp3" },
		{ key: "W", mp3Path: "/Dsc_Oh.mp3" },
		{ key: "E", mp3Path: "/Heater_1.mp3" },
		{ key: "A", mp3Path: "/Heater_2.mp3" },
		{ key: "S", mp3Path: "/Heater_3.mp3" },
		{ key: "D", mp3Path: "/Heater_4.mp3" },
		{ key: "Z", mp3Path: "/Heater_5.mp3" },
		{ key: "X", mp3Path: "/Kick_n_Hat.mp3" },
		{ key: "C", mp3Path: "/RP4_KICK.mp3" },
	];

	const [displayText, setDisplayText] = useState("");

	const handleKeyDown = (e) => {
		var btn = document.getElementById(e.key.toUpperCase());
		if (btn) {
			btn.play();

			sounds.forEach((element) => {
				if (element.key === e.key.toUpperCase()) {
					const mp3Name = element.mp3Path.replace(
						/\.mp3|\/|_/g,
						(match) => (match === "_" ? " " : "")
					);
					setDisplayText(mp3Name);
					document.getElementById(mp3Name).classList.add("scale-90");
				}
			});
		}
	};

	const handleKeyUp = (e) => {
		sounds.forEach((element) => {
			if (element.key === e.key.toUpperCase()) {
				document
					.getElementById(
						element.mp3Path.replace(/\.mp3|\/|_/g, (match) =>
							match === "_" ? " " : ""
						)
					)
					.classList.remove("scale-90");
			}
		});
	};

	useEffect(() => {
		document.addEventListener("keydown", handleKeyDown);
		document.addEventListener("keyup", handleKeyUp);

		// Don't forget to clean up
		return function cleanup() {
			document.removeEventListener("keydown", handleKeyDown);
			document.removeEventListener("keyup", handleKeyUp);
		};
	}, []);

	return (
		<div>
			<img src="" className="size-full" />

			<div className="h-screen flex justify-center items-center bg-cover bg-[image:url(/stacked-waves-haikei.svg)]">
				<div
					id="drum-machine"
					className="flex min-w-lg flex-wrap rounded-lg border g-border g-shadow p-8 gap-8"
				>
					<div className="grid grid-cols-3 grid-rows-3 gap-3">
						<Button
							btn_key={sounds[0].key}
							sound_id={sounds[0].mp3Path}
							displayFunc={setDisplayText}
						/>
						<Button
							btn_key={sounds[1].key}
							sound_id={sounds[1].mp3Path}
							displayFunc={setDisplayText}
						/>
						<Button
							btn_key={sounds[2].key}
							sound_id={sounds[2].mp3Path}
							displayFunc={setDisplayText}
						/>
						<Button
							btn_key={sounds[3].key}
							sound_id={sounds[3].mp3Path}
							displayFunc={setDisplayText}
						/>
						<Button
							btn_key={sounds[4].key}
							sound_id={sounds[4].mp3Path}
							displayFunc={setDisplayText}
						/>
						<Button
							btn_key={sounds[5].key}
							sound_id={sounds[5].mp3Path}
							displayFunc={setDisplayText}
						/>
						<Button
							btn_key={sounds[6].key}
							sound_id={sounds[6].mp3Path}
							displayFunc={setDisplayText}
						/>
						<Button
							btn_key={sounds[7].key}
							sound_id={sounds[7].mp3Path}
							displayFunc={setDisplayText}
						/>
						<Button
							btn_key={sounds[8].key}
							sound_id={sounds[8].mp3Path}
							displayFunc={setDisplayText}
						/>
					</div>
					<div className="flex flex-col flex-1 justify-between">
						<div
							id="display"
							className="g-border rounded-md p-4 text-xl font-bold text-center min-h-16"
						>
							{displayText}
						</div>
						<div className="flex self-end">
							<a
								href=""
								className="btn g-border s-shadow rounded-full mr-2 p-3"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width={14}
									height={14}
									viewBox="0 0 24 24"
									className="fill-[#221f1d] size-6"
								>
									<path
										fill="currentColor"
										d="M23.643 4.937c-.835.37-1.732.62-2.675.733a4.67 4.67 0 0 0 2.048-2.578a9.3 9.3 0 0 1-2.958 1.13a4.66 4.66 0 0 0-7.938 4.25a13.23 13.23 0 0 1-9.602-4.868c-.4.69-.63 1.49-.63 2.342A4.66 4.66 0 0 0 3.96 9.824a4.65 4.65 0 0 1-2.11-.583v.06a4.66 4.66 0 0 0 3.737 4.568a4.7 4.7 0 0 1-2.104.08a4.66 4.66 0 0 0 4.352 3.234a9.35 9.35 0 0 1-5.786 1.995a10 10 0 0 1-1.112-.065a13.2 13.2 0 0 0 7.14 2.093c8.57 0 13.255-7.098 13.255-13.254q0-.301-.014-.602a9.5 9.5 0 0 0 2.323-2.41z"
									></path>
								</svg>
							</a>
							<a
								href=""
								className="btn g-border s-shadow rounded-full p-3"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width={14}
									height={14}
									viewBox="0 0 16 16"	
									className="fill-[#221f1d] size-6"
								>
									<path
										fill="currentColor"
										d="M3.468 1.948C5.303 3.325 7.276 6.118 8 7.616c.725-1.498 2.698-4.29 4.532-5.668C13.855.955 16 .186 16 2.632c0 .489-.28 4.105-.444 4.692c-.572 2.04-2.653 2.561-4.504 2.246c3.236.551 4.06 2.375 2.281 4.2c-3.376 3.464-4.852-.87-5.23-1.98c-.07-.204-.103-.3-.103-.218c0-.081-.033.014-.102.218c-.379 1.11-1.855 5.444-5.231 1.98c-1.778-1.825-.955-3.65 2.28-4.2c-1.85.315-3.932-.205-4.503-2.246C.28 6.737 0 3.12 0 2.632C0 .186 2.145.955 3.468 1.948"
									></path>
								</svg>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;
