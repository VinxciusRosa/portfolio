import React from "react";

import Logo from "./../../assets/img/logo.svg"
import { useState } from "react";
import "./style.scss";
import { GoogleTranslate } from "./../GoogleTranslate";

export function Header(){
	const [menuOpened, setMenuOpened] = useState<boolean>(false);

	return (
		<header>
			<div className={`menu-section ${menuOpened ? "on" : ""}`}>
				<div className="menu-toggle" onClick={() => setMenuOpened(!menuOpened)}>
					<div className="line"></div>
					<div className="line"></div>
					<div className="line"></div>
				</div>
				<nav>
					<a href="#">
					<img src={Logo} alt="logo-vinicius" /> 
					</a>
					<ul>
						{/* <li> <a href="#" className="active">Home</a> </li> */}
						{/* <li> <img src={Logo} alt="logo-vinicius" /> </li> */}
						<li> <a href="#sobre-mim">About me</a> </li>
						<li> <a href="#projetos">Projects</a> </li>
						<li> <a href="#conhecimentos">Knowledge</a> </li>
						<li> <a href="#ciencia">Science</a> </li>
					</ul>
					<GoogleTranslate/>
				</nav>
				
			</div>
		</header>
	)
}