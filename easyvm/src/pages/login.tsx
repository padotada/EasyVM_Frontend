import React from 'react';
import { useAuth } from "react-oidc-context";

const Login: React.FC = () => {
  const auth = useAuth();

  if (auth.isLoading) return <div>Loading...</div>;
  if (auth.error) return <div>Encountered error: {auth.error.message}</div>;

  if (auth.isAuthenticated) {
    return (
      <div style={{ color: 'white', padding: '2rem' }}>
        <h2>Welcome, {auth.user?.profile.preferred_username}</h2>
        <p>Email: {auth.user?.profile.email}</p>
        
        <div style={{ marginTop: '1rem', border: '1px solid', padding: '1rem' }}>
          <h4>Your Roles (Authentik Groups):</h4>
          <ul>
            {(auth.user?.profile.groups as string[])?.map(role => (
              <li key={role}>{role}</li>
            ))}
          </ul>
        </div>

        <button 
          onClick={() => auth.removeUser()} 
          style={{ marginTop: '2rem', background: 'red', color: 'white', border: 'none', padding: '0.5rem 1rem', cursor: 'pointer' }}
        >
          Log out
        </button>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '60vh', color: 'white' }}>
      <h1>Sign in to EasyVM</h1>
      <p>Use your Cyber@UCI Discord account via Authentik</p>
      <button 
        onClick={() => auth.signinRedirect()}
        style={{
          backgroundColor: 'white',
          color: 'black',
          padding: '1rem 2rem',
          borderRadius: '8px',
          fontWeight: 'bold',
          border: 'none',
          cursor: 'pointer',
          fontSize: '1.1rem'
        }}
      >
        Login with SSO
      </button>
    </div>
  );
};

export default Login;