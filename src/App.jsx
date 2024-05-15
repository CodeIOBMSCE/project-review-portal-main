import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import ProjectList from "./components/ProjectList/ProjectList";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// function App() {
// 	return (
// 		<ChakraProvider>
// 			<Navbar />
// 			<ProjectList />
// 		</ChakraProvider>
// 	);
// }
import Home from "./pages/Home/Home";
import NewProject from "./pages/NewProject/NewProject";
import Notification from "./pages/Notification/Notification";
import Project from "./pages/Project/Project";
function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/newproject" element={<NewProject />} />
				<Route path="/notification" element={<Notification />} />
				<Route path="/project" element={<Project />} />
			</Routes>
		</Router>
	);
}
export default App;
