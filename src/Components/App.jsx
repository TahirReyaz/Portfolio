import React from "react";
import Landing from "./Landing";
import Social from "./Social";
import About from "./About";
import Projects from "./Projects";
import Footer from "./Footer";

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
