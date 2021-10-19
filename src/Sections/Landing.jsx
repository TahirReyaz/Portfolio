import React from 'react';
import EnergyButton from '../Components/EnergyButton/EnergyButton';

const Landing = () => {

    return (
        <section id="landing" style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
            <h3>Hi, I am</h3>
            <h1>Tahir Reyaz</h1>
            <EnergyButton>Resume</EnergyButton>
        </section>
    );
}

export default Landing;