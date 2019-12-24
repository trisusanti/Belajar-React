import React, { useState } from "react";
import Home from "./pages/home";
import About from "./pages/about";
import Profile from "./pages/profile";
import { Switch, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import BottomNavigation from "./components/bottom-nav";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/profile" component={Profile} />
      </Switch>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <BottomNavigation />
      </div>
    </div>
  );
}

export default App;
