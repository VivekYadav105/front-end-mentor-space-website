import "./App.css";
import "./index.css";
import "./resources/css/header.css";
import React, { useState} from "react";
import {Route,BrowserRouter as Router,Routes} from "react-router-dom";
import Destination from "./components/destination";
import Home from "./components/home";
import Crew from "./components/crew";
import Technology from "./components/technology";
import Header from "./components/header";


function App() {
  const [bg, setBg] = useState("home");

  function changeBg(i) {
    setBg(i);
  }

  return (
    <div className="App" style={{ backgroundImage: `url(${bg})` }}>
      <Router>
        <Header></Header>
        <Routes>
          <Route path="/" exact element={<Home changeBg={changeBg} />} />
          <Route path="/dest" exact element={<Destination changeBg={changeBg} />}/>
          <Route path="/crew" exact element={<Crew changeBg={changeBg} />} />
          <Route path="/tech" exact element={<Technology changeBg={changeBg} />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
