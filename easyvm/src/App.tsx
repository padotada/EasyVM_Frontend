import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Dashboard from "./pages/dashboard";
import ExistingAllocation from "./pages/existing_allocation";
import Login from "./pages/login";
import NewAllocation from "./pages/new_allocation";
import Settings from "./pages/settings";

interface NavLinkProps {
	to: string;
	children: React.ReactNode;
}

const Home: React.FC = () => (
	<div className="container">
		<header>
			<h1>Cyber @ UCI Frontend Page</h1>
			<p>Cool hackers and cybersecurity stuff blah blah blah blah</p>
		</header>
	</div>
);

const NavLink: React.FC<NavLinkProps> = ({ to, children }) => (
	<Link
		to={to}
		style={{ marginRight: "1rem" }}
	>
		{children}
	</Link>
);

export default function App() {
	return (
		<Router>
			<nav>
				<div className="nav-content">
					<Link to="/">
						<strong>Cyber @ UCI</strong>
					</Link>

					<div className="nav-links">
						<NavLink to="/about">About Us</NavLink>
						<NavLink to="/events">Events</NavLink>
						<NavLink to="/board">Board</NavLink>
						<NavLink to="/resources">Resources</NavLink>
						<Link to="/join">Join Us</Link>
					</div>
				</div>
			</nav>

			<main>
				<Routes>
					<Route
						path="/"
						element={<Home />}
					/>
					<Route
						path="/about"
						element={<Dashboard />}
					/>
					<Route
						path="/board"
						element={<ExistingAllocation />}
					/>
					<Route
						path="/events"
						element={<Login />}
					/>
					<Route
						path="/resources"
						element={<NewAllocation />}
					/>
					<Route
						path="/join"
						element={<Settings />}
					/>
				</Routes>
			</main>
		</Router>
	);
}
