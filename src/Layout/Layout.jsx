import { Navigate, Route, Routes } from "react-router-dom"

import Header from "../components/Header";
import SideBar from "../components/SideBar";
import { Dashboard } from "../Pages/Dashboard";
import { Orders } from "../Pages/Orders";

export default function Layout() {
	return (
		<>
			<div className="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full" data-sidebar-position="fixed" data-header-position="fixed">
				<SideBar></SideBar>
				<div className="body-wrapper">
					<Header></Header>
					<div className="container-fluid">
						<Routes>
							<Route path="/" element={ <Dashboard></Dashboard> }></Route>
							<Route path="/dashboard" element={ <Dashboard></Dashboard> }></Route>
							<Route path="/orders" element={ <Orders></Orders> }></Route>
							<Route path="/*" element={ <Navigate to="/"></Navigate> }></Route>
						</Routes>
					</div>
				</div>
			</div>
		</>
	);
}
