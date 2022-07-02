import "./App.css";
import "./index.css";
import "./resources/css/header.css";
import React, { Suspense, useState} from "react";
import {Route,BrowserRouter as Router,Routes} from "react-router-dom";

import Header from "./components/header";

const LazyHome = React.lazy(()=>import("./components/home"))
const LazyCrew = React.lazy(()=>import("./components/crew"))
const LazyTech = React.lazy(()=>import("./components/technology"))
const LazyDest = React.lazy(()=>import("./components/destination"))


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
          <Route path="/" exact element={<Suspense fallback={<h1>Loading</h1>}>
                                            <LazyHome changeBg={changeBg}/>
                                          </Suspense>}
                                          />
          <Route path="/dest" exact element={<Suspense fallback={<h1>Loading</h1>}>
                                            <LazyDest changeBg={changeBg}/>
                                          </Suspense>}/>
          <Route path="/crew" exact element={<Suspense fallback={<h1>Loading</h1>}>
                                            <LazyCrew changeBg={changeBg}/>
                                          </Suspense>} />
          <Route path="/tech" exact element={<Suspense fallback={<h1>Loading</h1>}>
                                            <LazyTech changeBg={changeBg}/>
                                          </Suspense>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
