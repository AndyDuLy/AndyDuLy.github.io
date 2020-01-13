import React from 'react';
import ParticleCanvas from './Components/ParticleCanvas';
import Landing from './Sections/Landing';
import Portfolio from './Sections/Portfolio';
import Contact from './Sections/Contact';


function App() {
  return (
    <>
      <ParticleCanvas/>
      <Landing/>
      <Portfolio/>
      <Contact/>  
    </>
  );
}

export default App;
