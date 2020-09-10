import React from 'react';
import ProjectEntry from '../Components/ProjectEntry';
import '../CSS/App.css';
import '../CSS/skeleton.css';

const projects = [
	[ "Real-Time Spyfall", "Popular Spyfall card game, recreated as a React web app, built on Firebase Real-Time Database and Hosting", "https://github.com/AndyDuLy/Spyfall" ],
	[ "Daily Weather Cron", "Recurring weather SMS alerts with Twilio SMS, OpenWeatherMap, deployed on Google Cloud Functions with a Cloud Scheduler Cron Job", "https://github.com/AndyDuLy/Daily-Weather" ],
	[ "brittanyduly.ca", "Portfolio Website for Brittany Du Ly. Built with React/MUI.", "https://www.brittanyduly.ca" ],
	[ "Typing Speed Game", "Pure JavaScript DOM typing speed game.", "https://andyduly.github.io/Typing-Time-Crunch/" ],
	[ "P.I.G Dice Game", "Pure JavaScript DOM P.I.G dice game.", "https://andyduly.github.io/Pig-Dice-Game/" ],
];

export default function Landing() {
  return (
		<div className="container">
			<div className="row">
				<div className="six columns">
					<h4 className="emphasisText RalewayRegular topPadding">
						Projects
					</h4>

					{projects.map((entry) => {
						return (
							<ProjectEntry
								title={entry[0]}
								premise={entry[1]}
								link={entry[2]}
							/>
						)
					})}
				</div>
				
				<div className="six columns">
					<h4 className="emphasisText RalewayRegular topPadding">
						Professional Work
					</h4>
					
					<ProjectEntry 
						title="Ionic React To-Do List App" 
						premise="Medium tutorial on building a to-do list app in Ionic React." 
						link="https://medium.com/@benchedms/how-to-make-a-to-do-app-with-ionic-react-d92ece061284"
					/>
					<ProjectEntry 
						title="Payout Prime" 
						premise="Medium Case Study on how Payout Prime was built." 
						link="https://medium.com/@benchedms/case-study-payout-prime-d21c16d81ae5"
					/>
				</div>
			</div>

			<div className="row topMinorPadding">
				<div className="twelve columns">
					<h4 className="emphasisText RalewayRegular topPadding">
						Hackathon Projects
					</h4>
					
					<ProjectEntry 
						title="ParknGo" 
						premise="Web App platform crowdsourcing parking solutions. Incubated at Boston University, now Parkaze Inc.
										Built in HTML (Bootstrap), CSS, JavaScript (Node), and MongoDB." 
						link="https://devpost.com/software/park-n-go-f7dvwi"
					/>
					<ProjectEntry 
						title="noFluenza" 
						premise="Web App platform streamlining influenza vaccine form processes. Awarded 'Best Healthcare Hack'.
										Built in HTML, CSS, JavaScript, Python (Flask), and MongoDB." 
						link="https://devpost.com/software/influenza"
					/>
					<ProjectEntry 
						title="LIFEfficiency" 
						premise="Web App platform crowdsourcing tasks and errands. Awarded 'Best Software'.
										Built in HTML, CSS, JavaScript (Node), and MongoDB." 
						link="https://devpost.com/software/lifefficiency"
					/>
					<ProjectEntry 
						title="Netcon" 
						premise="Android App streamlining and enhancing professional networking. Awarded Third Place Overall.
										Built in Java (Android Studio), Python (Flask)." 
						link="https://devpost.com/software/netcon-hb6dki"
					/>
				</div>
			</div>
		</div>
	);
}
