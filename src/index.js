import React from "react";
import ReactDOM from "react-dom/client";
import { GoogleOAuthProvider } from "@react-oauth/google";
import App from "./App";
import { AppProvider } from "./context";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GoogleOAuthProvider clientId="733043400218-eg6bt9ide586p3ol6fi1ep2asmsbdh2f.apps.googleusercontent.com">
    <React.StrictMode>
      <AppProvider>
       <App />
      </AppProvider>
    </React.StrictMode>
  </GoogleOAuthProvider>
);

