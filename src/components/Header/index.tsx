import Logo from "./../../assets/img/logo.svg"
import { useState } from "react";
import "./style.scss";
import { GrLanguage } from "react-icons/gr";
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
						<li> <a href="#sobre-mim">Sobre mim</a> </li>
						<li> <a href="#projetos">Projetos</a> </li>
						<li> <a href="#conhecimentos">Conhecimentos</a> </li>
						<li> <a href="#ciencia">Ciência</a> </li>
						{/* <li><GoogleTranslate/></li> */}
					</ul>
					
						<GoogleTranslate/>
					
				</nav>
				
			</div>
		</header>
	)
}