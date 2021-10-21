import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import HomeScreen from "./screens/HomeScreen";
import FavouriteScreen from "./screens/FavouriteScreen";
import CompletedScreen from "./screens/CompletedScreen";
import WatchedScreen from "./screens/WatchedScreen";
import AddScreen from "./screens/AddScreen";

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/completedmovies" component={CompletedScreen} />
          <Route exact path="/favouritemovies" component={FavouriteScreen} />
          <Route exact path="/watchedmovies" component={WatchedScreen} />
          <Route exact path="/addmovies" component={AddScreen} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
