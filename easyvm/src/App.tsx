import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Dashboard from "./pages/dashboard";
import ExistingAllocation from "./pages/existing_allocation";
import NewAllocation from "./pages/new_allocation";
import Settings from "./pages/settings";
import Login from "./pages/login";
import "./App.css";

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route
					path="/"
					element={<Login />}
				/>
				<Route
					path="/dashboard"
					element={<Dashboard />}
				/>
				<Route
					path="/existing-allocation"
					element={<ExistingAllocation />}
				/>
				<Route
					path="/new-allocation"
					element={<NewAllocation />}
				/>
				<Route
					path="/settings"
					element={<Settings />}
				/>
			</Routes>
		</>
	);
}

export default App;
