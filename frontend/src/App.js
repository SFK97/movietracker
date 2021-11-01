import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import HomeScreen from "./screens/HomeScreen";
import FavouriteScreen from "./screens/FavouriteScreen";
import CompletedScreen from "./screens/CompletedScreen";
import WatchlistScreen from "./screens/WatchlistScreen";
import AddScreen from "./screens/AddScreen";

import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Navbar />
        <main>
          <Switch>
            <Route exact path="/" component={HomeScreen} />
            <Route exact path="/completedmovies" component={CompletedScreen} />
            <Route exact path="/favouritemovies" component={FavouriteScreen} />
            <Route exact path="/watchlistmovies" component={WatchlistScreen} />
            <Route exact path="/addmovies" component={AddScreen} />
          </Switch>
        </main>
      </Router>
    </GlobalProvider>
  );
}

export default App;
