import React, { useState } from "react";
import Tasks from "./components/Tasks";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import { useNavigate } from "react-router-dom";

const App = () => {
	const navigate = useNavigate();
	const [tasks, setTasks] = useState([]);

	const handleTaskClick = (taskId) => {
		const newTasks = tasks.map((task) => {
			if (task.id === taskId)
				return { ...task, completed: !task.completed };
			return task;
		});
		setTasks(newTasks);
	};

	const handleTaskAddition = (taskTitle) => {
		const newTasks = [
			...tasks,
			{
				title: taskTitle,
				id: uuidv4(),
				completed: false,
			},
		];

		setTasks(newTasks);
	};

	const handleTaskExclusion = (taskId) => {
		const newTasks = tasks.filter((task) => task.id !== taskId);
		setTasks(newTasks);
	};

	const handleTaskDetails = (task) => {
		navigate(`/${task}`);
	};

	return (
		<div className="container">
			<>
				<Header />
				<AddTask handleTaskAddition={handleTaskAddition} />
				<Tasks
					tasks={tasks}
					handleTaskClick={handleTaskClick}
					handleTaskExclusion={handleTaskExclusion}
					handleTaskDetails={handleTaskDetails}
				/>
			</>
		</div>
	);
};

export default App;
