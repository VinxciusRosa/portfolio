import React from "react";
import "./style.scss";
import { FaGithub } from "react-icons/fa";



export function Projetos() {
	return (
		<div id="projetos">
			<h1>Projects</h1>
			<div className="card-projeto">
				<div className="cards">
					<h1 translate="no">CertiPy </h1>
					<p>CertiPy, a personal project that had a significant impact on my university by drastically reducing certificate generation time. I divided the project into three stages: importing data from Google Forms, automatically generating certificates using image manipulation, and automated email delivery of certificates to recipients.</p>
					<a href="https://github.com/VinxciusRosa/CertiPy/blob/main/README.md" target="_blank" rel="noopener noreferrer">
						<button><FaGithub />GitHub</button>
					</a>
				</div>
				<div className="cards">
					<h1 translate="no">COMGÁS APM 3.0 </h1>
					<p>
						In the APM 3.0 project, I worked as a junior data engineer for 12 months, creating multiple pipelines using templates developed in Databricks notebooks to perform data treatments. In Azure Data Factory, I orchestrated pipelines with two main functionalities: one moved data from the raw layer to the trusted layer in Azure Data Lake, executing a Databricks template for initial treatments such as deduplication and column transformations. Another pipeline executed notebooks from the refined layer, where treated data underwent additional calculations. The resulting tables from the refined layer were then stored in Synapse, where they were structured into fact and dimension table schemas. These notebooks were executed through the pipelines created in Data Factory. Additionally, data inserted into Synapse tables served as the database for the Power BI team to build dashboards.</p>
					<a href="https://github.com/VinxciusRosa/CertiPy/blob/main/README.md" target="_blank" rel="noopener noreferrer">
						{/* <button><FaGithub/>GitHub</button> */}
					</a>
				</div>
				<div className="cards">
					<h1 translate="no">BIT SAAS </h1>
					<p>
						Over a period of 12 months, I worked as a front-end developer on an internal project that later evolved into a product at my former company. During this time, I was responsible for developing the front-end of the BIT SAAS IoT platform. I used technologies such as ReactJS, TypeScript, and Material UI to build the user interface. Additionally, I utilized Figma to design the platform layout, ensuring an intuitive and pleasant user experience. My team operated in an agile environment, following the Scrum methodology, which provided me with daily interaction with Scrum practices and rituals. I also had the opportunity to collaborate with the DevOps team, assisting in the creation of environments and other infrastructure-related activities for the project.</p>
					<a href="https://github.com/VinxciusRosa/CertiPy/blob/main/README.md" target="_blank" rel="noopener noreferrer">
						{/* <button><FaGithub/>GitHub</button> */}
					</a>
				</div>

				<div className="cards">
					<h1 translate="no" >AutoPy</h1>
					<p>I developed an algorithm to autonomously download the files of my presentations and send them to my advisor's email. Due to my scientific research, I gave several presentations (lectures and webinars) on research topics. After preparing the slides for these presentations, I would send the files to my advisor for review. To simplify this process, I created the algorithm to automate these repetitive tasks.</p>
					<a href="https://github.com/VinxciusRosa/automatizacao-de-tarefas-python" target="_blank" rel="noopener noreferrer">
						<button><FaGithub />GitHub</button>
					</a>
				</div>

				{/* <div className="cards">
					<h1>Shortly..</h1>
					<p>Hello! wait until the next project...</p>

					<a href="" target="_blank" rel="noopener noreferrer">
						<button><FaGithub />GitHub</button>
					</a>
				</div> */}

			</div>
		</div>
	);
}