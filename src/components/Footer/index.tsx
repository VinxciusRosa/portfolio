import React from "react";
import {  FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaGithub} from "react-icons/fa" ;

import { BsFillTelephoneFill, BsFillGeoAltFill, BsMailbox2 } from "react-icons/bs"
import { GoogleTranslate } from "./../GoogleTranslate";
import "./style.scss";


export function Footer(){
	// Get url from .env.local
	return (
		<footer id="footer">
			{/* <hr/> */}
			<h1>Contact<span translate="no">.</span></h1>
			<div className="icons-footer">
				<ul className="ul-icons">
					{/* <a href="https://www.instagram.com/vinxcin/" target="_blank" rel="noopener noreferrer"><li><FaInstagram/></li></a> */}
					<a href="https://www.linkedin.com/in/vinicius-carvalho-rosa/" target="_blank" rel="noopener noreferrer"><li><FaLinkedin/></li></a>
					<a href="https://github.com/VinxciusRosa" target="_blank" rel="noopener noreferrer"><li><FaGithub/></li></a>
					<a href="https://www.youtube.com/channel/UCEC59UZt1zUE-WJCYMAbZXA" target="_blank" rel="noopener noreferrer"><li><FaYoutube/></li></a>
				</ul>
				
				<ul>
					<li><BsMailbox2/></li>
					<li>vinxciusrosa@gmail.com</li>
				</ul>	
			</div>

			<ul className="madeby">
				<li>Made by - Vinicius Carvalho Rosa </li>
				<li>© 2024</li>
			</ul>
			
			{/* <GoogleTranslate /> */}
		</footer>
	);
}