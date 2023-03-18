import React from "react";
import "./Styles/AddTask.css";
import Button from "./Styles/Button.css";

const AddTask = () => {
	return (
		<div className="add-task-container">
			<input type="text" className="add-task-input" />
			<Button>Adicionar</Button>
		</div>
	);
};

export default AddTask;
