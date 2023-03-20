import React from "react";
import Task from "./Task";

const Tasks = ({
	tasks,
	handleTaskClick,
	handleTaskExclusion,
	handleTaskDetails,
}) => {
	return (
		<>
			{tasks.map((task) => (
				<Task
					task={task}
					handleTaskClick={handleTaskClick}
					handleTaskExclusion={handleTaskExclusion}
					handleTaskDetails={handleTaskDetails}
				/>
			))}
		</>
	);
};

export default Tasks;
