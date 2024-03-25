import React from "react";
import "./style.scss";
import { AiOutlineCloudDownload } from "react-icons/ai";
import Avatar from "./../../assets/img/avatar.png";
import CV from "./../../assets/img/CV.pdf";


export function Sobre(){
	return (
		<div id="sobre-mim">
			<img src={Avatar} alt="avatar" />

			<div className="sobre-descricao">
				<h1>About me</h1>
				<p>My name is Vinicius Carvalho Rosa, I am 23 years old. I graduated in Systems Analysis and Development from the Federal Institute of São Paulo, with emphasis on a scientific initiation and extension scholarship, contributing to the publication of 8 articles in scientific journals and periodical annals, addressing interfaces on the topics: black holes, education and computing.
					<br/><br/>
					I have 3 years of experience in developing data solutions on the Microsoft Azure platform, I highlight my specialization in creating ETL pipelines and process optimization. Using tools such as Apache Spark, Python, SQL, Databricks, Data Factory, Data Lake and Synapse Analytics.				</p>
				<a href={CV} >
					<button><AiOutlineCloudDownload/>Curriculum</button>
				</a>
			</div>
		</div>
	);
}