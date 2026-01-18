import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import ExistingAllocations from "./pages/existing_allocations";
import Login from "./pages/login";
import NewAllocation from "./pages/new_allocation";
import Settings from "./pages/settings";

import logo from "./assets/logo.png";

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
}

const Home: React.FC = () => (
  <div className="home-container" style={{ 
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start', 
    justifyContent: 'center',
    minHeight: '80vh',        
    maxWidth: '900px',        
    margin: '0 auto',         
    padding: '0 2rem'
  }}>
    <header style={{ textAlign: 'left' }}>
      <h1>
        Easy<span style={{ color: 'white' }}>VM</span>
      </h1>
      
      <p style={{ 
        fontSize: '1.25rem', 
        lineHeight: '1.6', 
        color: '#cbd5e1', 
        maxWidth: '650px',
        marginBottom: '2.5rem'
      }}>
        A custom infrastructure management platform designed for <strong>Cyber@UCI</strong>. 
        Streamline the deployment of mock competition networks with a lightweight 
        interface to visualize and manage virtual machines on our Proxmox VE server rack.
      </p>
    </header>
  </div>
);

const NavLink: React.FC<NavLinkProps> = ({ to, children }) => (
  <Link
    to={to}
    style={{ marginRight: "1rem",
      color: "white",         
      textDecoration: "none",
      fontWeight: "500"
    }}
  >
    {children}
  </Link>
);

export default function App() {
  return (
    // <Router> was here - It is now safely in main.tsx
    <>
      <nav style={{ 
        padding: '1rem 0', 
        color: 'white',
        position: 'fixed', 
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
      }}>
        <div className="nav-content" style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          maxWidth: '1700px', 
          margin: '0 auto', 
          padding: '0 2rem'    
        }}>
          <Link to="/" style={{ 
            display: 'flex',         
            alignItems: 'center',     
            gap: '10px',             
            textDecoration: 'none', 
            color: 'white' 
          }}>
            <img 
              src={logo} 
              alt="Cyber @ UCI Logo" 
              style={{ height: '32px', width: 'auto' }} 
            />
            <strong style={{ fontSize: '1.2rem' }}>Cyber @ UCI</strong>
          </Link>

          <div className="nav-links" style={{ display: 'flex', gap: '1rem' }}>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/existing_allocations">Existing Allocations</NavLink>
            <NavLink to="/new_allocation">New Allocation</NavLink>
            <Link to="/settings" style={{ color: 'white', textDecoration: 'none' }}>Settings</Link>
          </div>
        </div>
      </nav>
        
      <main style={{ paddingTop: '80px', paddingLeft: '2rem', paddingRight: '2rem' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/existing_allocations" element={<ExistingAllocations />} />
          <Route path="/new_allocation" element={<NewAllocation />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </main>
    </>
  );
}