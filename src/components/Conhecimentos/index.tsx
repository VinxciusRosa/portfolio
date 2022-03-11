import "./style.scss";
import React from "./../../assets/img/react.svg";
import CSS from "./../../assets/img/css.svg";
import HTML from "./../../assets/img/html.svg";
import Python from "./../../assets/img/python.svg";
import MYSQL from "./../../assets/img/mysql.svg";
import Spark from "./../../assets/img/spark.png";
import DataBricks from "./../../assets/img/data.png";
import Azure from "./../../assets/img/azure.svg";

export function Conhecimentos(){
	return (
		<div id="conhecimentos">
			<h1>Conhecimentos<br /><span>&</span> Certificações</h1>

			<div className="conhecimentos-icons">
				
				<div className="cards">	
					<div className="cards-p">
						<p translate="no"> React JS</p>
						<img src={React} alt="React"/>						
					</div>
				</div>
				
				<div className="cards">	
					<div className="cards-p">
						<p>CSS</p>
						<img src={CSS} alt="React"/>						
					</div>
				</div>

				<div className="cards">	
					<div className="cards-p">
						<p>HTML</p>
						<img src={HTML} alt="React"/>						
					</div>
				</div>
				
				<div className="cards">	
					<div className="cards-p">
						<p translate="no">Python</p>
						<img src={Python} alt="React"/>						
					</div>
				</div>

				<div className="cards">	
					<div className="cards-p">
						<p>MySQL</p>
						<img src={MYSQL} alt="MySQL"/>						
					</div>
				</div>
				
				<div className="cards">	
					<div className="cards-p">
						<p>Spark</p>
						<img src={Spark} alt="Spark"/>						
					</div>
				</div>

				<div className="cards">	
					<div className="cards-p">
						<p>Databricks</p>
						<img src={DataBricks} alt="DataBricks"/>						
					</div>
				</div>
				
				<div className="cards">	
					<div className="cards-p">
						<p>Azure</p>
						<img src={Azure} alt="Azure"/>						
					</div>
				</div>


			</div>
		</div>
	);
}