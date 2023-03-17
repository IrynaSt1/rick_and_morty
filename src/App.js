import "./App.css";
import React, { useState, useEffect } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import Home from "./pages/Home";
import SingleCharacter from "./pages/SingleCharacter";
import google from "./assets/google.svg";

function App() {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log("Login Failed:", error),
  });

  useEffect(() => {
    if (user) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          setProfile(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [user]);
  const logOut = () => {
    googleLogout();
    setProfile(null);
  };

  return (
    <>
      {profile ? (
        <div className="logout">
          <button className="buttonLogOut" onClick={logOut}>
            <span className="buttonText">Log out</span>
          </button>
          <img className="profile" src={profile.picture} alt="Profile" />
        </div>
      ) : (
        <button className="login" onClick={() => login()}>
          <img src={google} alt="google login" className="google"></img>
          <span className="buttonText">Sign in</span>
        </button>
      )}
      <HashRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/characters/:id" element={<SingleCharacter />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
