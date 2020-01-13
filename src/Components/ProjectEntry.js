import React from 'react';

import '../CSS/App.css';
import '../CSS/skeleton.css';


export default function ProjectEntry(props) {
  return (
    <a className="hyperlinkDecor" target="_blank" rel="noopener noreferrer" href={props.link}> 
      <h5 className="primaryText RalewayRegular">
        <span className="projectLink"> {props.title} <br/>
          <span className="ProximaNova subtext"> {props.premise} </span>
        </span>
      </h5>
    </a>
  )
};