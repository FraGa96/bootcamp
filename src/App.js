import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Excercises from './components/exercises/Excercises';
import Header from './components/common/Header/Header';
import Landing from './components/landing/Landing';
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Header />

        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>

          <Route path="/exercises">
            <Excercises />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
