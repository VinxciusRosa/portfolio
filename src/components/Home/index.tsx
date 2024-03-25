import React from "react";

import "./style.scss";
import Foguete from "./../../assets/img/foguete.svg"

export function Home(){
	return (
		<div id="home">
			<div>
				<p>Hello, I am</p>
				<h1>Vinicius.</h1>
				<p>Data Engineer and Front-end developer.</p>
				<a href="https://www.linkedin.com/in/vinicius-carvalho-rosa/" target="_blank">
					<button translate="no">Linkedin</button>
				</a>
			</div>

			<img src={Foguete} alt="foguete" />
		</div>
	);
}