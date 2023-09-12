import { Navigate, Route, Routes } from "react-router-dom"

import Header from "../components/Header";
import SideBar from "../components/SideBar";
import { Dashboard } from "../Pages/Dashboard";
import { Orders } from "../Pages/Orders";

export default function Layout() {
	return (
		<>
			<SideBar></SideBar>
			<main className="main-content position-relative border-radius-lg ">
				<Header></Header>
				<div className="container-fluid py-4">
					<Routes>
						<Route path="/" element={ <Dashboard></Dashboard> }></Route>
						<Route path="/dashboard" element={ <Dashboard></Dashboard> }></Route>
						<Route path="/orders" element={ <Orders></Orders> }></Route>
						<Route path="/*" element={ <Navigate to="/"></Navigate> }></Route>
					</Routes>
				</div>
			</main>
		</>
	);
}
