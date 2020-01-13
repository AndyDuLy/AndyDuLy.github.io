import React from 'react';
import Logo from '../Images/logo.png';

import '../CSS/App.css';
import '../CSS/skeleton.css';


export default function Contact() {
  return (
    <div className="container backgroundColor">
      <div className="row topPadding">
        <div className="twelve columns">
          <a target="_blank" href="/"> <img className="centerImage" src={Logo} height="50px" alt=""/> </a>
        </div>
      </div>

      <div className="row topMinorPadding">
        <div className="three columns">
          <a className="hyperlinkDecor" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/andyduly">
            <h5 align="center" className="primaryText projectLink RalewayRegular"> LinkedIn </h5>
          </a>
        </div>
        <div className="three columns">
          <a className="hyperlinkDecor" target="_blank" rel="noopener noreferrer" href="https://github.com/AndyDuLy">
            <h5 align="center" className="primaryText projectLink RalewayRegular"> Github </h5>
          </a>
        </div>
        <div className="three columns">
          <a className="hyperlinkDecor" target="_blank" rel="noopener noreferrer" href="https://devpost.com/AndyDuLy">
            <h5 align="center" className="primaryText projectLink RalewayRegular"> Devpost </h5>
          </a>
        </div>
        <div className="three columns">
          <a className="hyperlinkDecor" target="_blank" rel="noopener noreferrer" href="https://drive.google.com/open?id=1apDueoMyihJ-xJa9baEI26n9imZ8QB8y">
            <h5 align="center" className="primaryText projectLink RalewayRegular"> Resume </h5>
          </a>
        </div>
      </div>

      <div className="row">
        <p align="center" className="primaryText ProximaNova"> Made with <span className="projectLink"> React, Particle.js, and Skeleton.css </span> </p>
      </div>
    </div>
  );
}
