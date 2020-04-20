import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Navigation from './components/Navigation';
import Others from './components/Others';

import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import JobsSection from './components/JobsSection';


function App() {
  return (
    <Router >
      <Provider store={store}>
        <div className="App">
          <Navbar />
          <div className="showcase centerFlex">
            <Navigation />
            <Switch>
              <Route exact path="/" component={Others}></Route>

              <Route exact path="/jobs-information" component={JobsSection}></Route>

            </Switch>

          </div>

        </div>
      </Provider>
    </Router>
  );
}

export default App;
