import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {Auth0Provider} from "@auth0/auth0-react"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
    domain="dev-x775cyry0ximrwhk.us.auth0.com"
    clientId="qrkGlrp6evVJ5BpPdQm2XAVCbEwQXpfz"
    authorizationParams={{
      redirect_uri: "https://real-estate-full-stack-project-rc10hpb7f.vercel.app"
    }}
    audience="http://localhost:8000"
    scope="openid profile email"
    >
    <App />
    </Auth0Provider>
  </React.StrictMode>
);
