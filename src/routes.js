import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import App from "./App";
import TaskDetails from "./components/TaskDetails";

function myRoutes() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<App />} />
				<Route path="/:taskTitle" element={<TaskDetails />} />
			</Routes>
		</Router>
	);
}

export default myRoutes;
