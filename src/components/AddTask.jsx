import React, { useState } from "react";
import "./Styles/AddTask.css";
import Button from "./Button";

const AddTask = ({ handleTaskAddition }) => {
	const [inputData, SetInputData] = useState("");

	const handleInputChange = (e) => {
		SetInputData(e.target.value);
	};

	const handleAddTaskClick = () => {
		handleTaskAddition(inputData);
		SetInputData("");
	};

	return (
		<div className="add-task-container">
			<input
				onChange={handleInputChange}
				value={inputData}
				type="text"
				className="add-task-input"
			/>
			<div className="add-task-button-container">
				<Button onClick={handleAddTaskClick}>Adicionar</Button>
			</div>
		</div>
	);
};

export default AddTask;
