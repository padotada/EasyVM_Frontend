import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';   
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from "react-oidc-context";
import App from './App.tsx';
import './index.css';

const oidcConfig = {
  authority: "https://auth.cyberuci.com/if/user/#/library/",
  /*
  Replace with the OAuth2/OpenID Provider
  */
  client_id: "THE_CLIENT_ID",
  /*
  Replace with the client ID
  */
  redirect_uri: "http://localhost:5173/login",
  scope: "openid profile email groups", 
  onSigninCallback: () => {
    window.history.replaceState({}, document.title, window.location.pathname);
  },
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider {...oidcConfig}>
      <Router>
        <App />
      </Router>
    </AuthProvider>
  </React.StrictMode>
);