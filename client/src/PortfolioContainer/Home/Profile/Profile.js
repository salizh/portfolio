import React from "react";
import Typical from "react-typical";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className='colz-icon'>

            <a href="https://www.instagram.com/6ix.noms">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="https://vm.tiktok.com/ZMLPu7x1w/">
            <i class="fa fa-video-camera" aria-hidden="true"></i>
            </a>

            </div>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hi, I'm <span className="highlighted-text">Sali</span>.
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Program Coordinator",
                    3000,
                    "Science Graduate",
                    3000,
                    "Avid Foodie",
                    3000,
                    "Aspiring Web Developer",
                    3000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
              </span>
            </span>
          </div>
          <div className='profile-options'>
            <a href="mailto:sali.zhang@hotmail.com" class="mail">
              <button className='btn primary-btn'> 
                {""}
                Contact Me {" "}
              </button>
            </a>
              <a href="Zhang.pdf" download="Ehiedu Zhang.pdf">
                  <button className='btn highlighted-btn'>Get Resume</button>
              </a>
          </div>
        </div>
        <div className='profile-picture'>
          <div className='profile-picture-background'></div>
        </div>
      </div>
    </div>
  );
}
