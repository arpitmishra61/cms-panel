//importing styles and essential files
import React from 'react';
import './App.css';

//Provider helps redux component to access the store
import { Provider } from 'react-redux';
import store from './store';

//react-router-dom is used for routing
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//importing child components
import Navbar from './components/navigation/Navbar';
import Navigation from './components/navigation/Navigation';
import DashboardSection from './components/sections/DashboardSection';
import JobsSection from './components/sections/JobsSection';

//App component
function App() {
  return (
    <Router >
      <Provider store={store}>
        <div className="App">
          <Navbar />
          <div className="showcase centerFlex">
            <Navigation />
            <Switch>
              <Route exact path="/" component={DashboardSection}></Route>

              <Route exact path="/jobs-information" component={JobsSection}></Route>

            </Switch>

          </div>

        </div>
      </Provider>
    </Router>
  );
}

export default App;
