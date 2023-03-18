import React from "react";
import Task from "./Task";

const Tasks = ({ tasks }) => {
	return (
		<>
			{tasks.map((task) => (
				<Task task={task.title} />
			))}
		</>
	);
};

export default Tasks;
