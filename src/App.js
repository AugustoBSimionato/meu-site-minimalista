import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faThreads, faGoogle, faAppStore } from '@fortawesome/free-brands-svg-icons';
import React, { useState, useEffect } from "react";
import "./App.css";
import profileImage from "./profile.jpg";

function App() {
  const [theme, setTheme] = useState("");

  useEffect(() => {
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
    const savedTheme = localStorage.getItem("theme") || systemTheme;
    setTheme(savedTheme);
    document.body.className = savedTheme;
  }, []);

  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-header">
          <div className="profile-info">
            <h2 className="profile-name">Augusto B. Simionato</h2>
            <p className="profile-location">Cornélio Procópio, PR · Bauru, SP</p>
          </div>
          <img src={profileImage} alt="avatar" className="profile-avatar" />
        </div>

        <div className="profile-links">
          <div className="profile-links-row">
            <a href="#" className="profile-link">
              <FontAwesomeIcon icon={faInstagram} /> gutobaroni
            </a>
            <a href="#" className="profile-link">
              <FontAwesomeIcon icon={faThreads} /> gutobaroni
            </a>
          </div>

          <div className="profile-links-row">
            <a href="#" className="profile-link">
              <FontAwesomeIcon icon={faGoogle} /> guto.baroni@gmail.com
            </a>
            <a href="#" className="profile-link"> 
              <FontAwesomeIcon icon={faLinkedin} /> augustobaronisimionato
            </a>
          </div>

          <div className="profile-links-row">
            <a href="https://apps.apple.com/br/app/wibby/id6479219831?l=en-GB&mt=12" className="profile-link">
              <FontAwesomeIcon icon={faAppStore} /> Wibby
            </a>
            <a href="#" className="profile-link">
              <FontAwesomeIcon icon={faAppStore} /> MoneeBuddy
            </a>
            <a href="#" className="profile-link">
              <FontAwesomeIcon icon={faAppStore} /> Loop
            </a>
            <a href="#" className="profile-link">
              <FontAwesomeIcon icon={faAppStore} /> CheckIt
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
