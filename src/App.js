import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/containers/Home"

function App() {
  return (
    <main>
      <section>
        <Router>
          <Switch>

            <Home />
          </Switch>
        </Router>
      </section>
    </main>
  );
}

export default App;
