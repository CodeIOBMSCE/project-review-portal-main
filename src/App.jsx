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
import AddRubics from "./pages/AddRubics/AddRubics";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/project/new" element={<NewProject />} />
				<Route path="/notification" element={<Notification />} />
				<Route path="/project" element={<Project />} />
				<Route path="/rubics/add" element={<AddRubics />} />
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<SignUp />} />
				<Route path="/login/password-reset" element={<ForgotPassword />} />
			</Routes>
		</Router>
	);
}
export default App;
