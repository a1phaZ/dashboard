import React from "react";
import './styles.css';
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import MainSection from "./components/MainSection";

const progressData = require('./data/progress.json');
const timelineData = require('./data/timeline.json');

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
  
      <MainSection
        progressData={progressData}
        timelineData={timelineData}
      />
    </div>
  );
}

export default App;
