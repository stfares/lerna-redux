import React from 'react';
import ReactDOM from 'react-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Component1 from './../packages/site1/src/Root';
import Component2 from './../packages/site2/src/Root';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/site1">Site1</Link>
            </li>
            <li>
              <Link to="/site2">Site2</Link>
            </li>
          </ul>

          <hr />

          <Route exact path="/" render={() => <Component1 name='tarzen' />} />
          <Route path="/site1" render={() => <Component1 name='tarzen' />} />
          <Route path="/site2" component={Component2} />
        </div>
      </Router>
    );
  }
}

var mountNode = document.getElementById('app');
ReactDOM.render(<App />, mountNode);

if (module.hot) {
  module.hot.accept();
}