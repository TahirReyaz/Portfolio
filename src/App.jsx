import React from "react";
import "./styles.css";
import Landing from "./Sections/Landing";
import Social from "./Components/Socials/Social";
import About from "./Sections/About";
import Projects from "./Sections/Projects";
import Footer from "./Sections/Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Landing />
        <Social />
        <About />
        <Projects />
        <Footer />
      </header>
    </div>
  );
}

export default App;
