import React from "react";
import Task from "./Task";

const Tasks = ({ tasks, handleTaskClick, handleTaskExclusion }) => {
	return (
		<>
			{tasks.map((task) => (
				<Task
					task={task}
					handleTaskClick={handleTaskClick}
					handleTaskExclusion={handleTaskExclusion}
				/>
			))}
		</>
	);
};

export default Tasks;
