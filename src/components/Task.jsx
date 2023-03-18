import React from "react";
import "./Styles/Task.css";
import { CgClose, CgInfo } from "react-icons/cg";

const Task = ({ task, handleTaskClick, handleTaskExclusion }) => {
	return (
		<div
			className="task-container"
			style={task.completed ? { borderLeft: "6px solid chartreuse" } : {}}
		>
			<div
				className="task-title"
				onClick={() => handleTaskClick(task.id)}
			>
				{task.title}
			</div>

			<div className="buttons-container">
				<button className="info-task-button">
					<CgInfo />
				</button>

				<button
					className="remove-task-button"
					onClick={() => handleTaskExclusion(task.id)}
				>
					<CgClose />
				</button>
			</div>
		</div>
	);
};

export default Task;
