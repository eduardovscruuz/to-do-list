import React from "react";
import { useParams } from "react-router-dom";
import Button from "./Button";
import "./Styles/TaskDetails.css";
import { useNavigate } from "react-router-dom";

const TaskDetails = () => {
	const navigate = useNavigate();
	const params = useParams();

	const backButton = () => {
		navigate("/");
	};

	return (
		<>
			<div className="container">
				<div className="back-button-container">
					<Button onClick={backButton}>Voltar</Button>
				</div>
				<div className="task-detail-container">
					<h2>{params.taskTitle}</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing
						elit. Molestias voluptatibus ullam reiciendis saepe
						iusto hic recusandae deleniti? Reiciendis est sit optio,
						incidunt, laborum blanditiis, amet natus provident velit
						ipsum sed!
					</p>
				</div>
			</div>
		</>
	);
};

export default TaskDetails;
