import React from "react";
import NavBar from "./components/navBar";
import Home from "./components/home";
import Music from "./components/music";
import Movies from "./components/movies";
import MusicVideo from "./components/musicvideo";
import TVShow from "./components/tvShow";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/music" exact component={Music} />
          <Route path="/movies" exact component={Movies} />
          <Route path="/TVShow" exact component={TVShow} />
          <Route path="/MusicVideo" exact component={MusicVideo} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
