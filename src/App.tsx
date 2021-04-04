import React, { CSSProperties } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

// import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import { Nav, Navbar } from 'react-bootstrap';
import {AiFillCalculator} from 'react-icons/ai'
import {FaCalculator} from 'react-icons/fa'
import QFixed from './pages/QFixed';

function App() {
  let link_style : CSSProperties = {
    textDecoration : 'inherit',
    color : 'inherit'
  }
  return (
    <>
      <Router>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand> <FaCalculator/> Type Calculator </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Nav.Link><Link to="/float32" style={link_style}>Float32</Link></Nav.Link>
              <Nav.Link><Link to="/float64" style={link_style}>Float64</Link></Nav.Link>
              <Nav.Link><Link to="/qfixed"  style={link_style}>Q-Fixed</Link></Nav.Link>
              <Nav.Link><Link to="/fixed_arithmetic" style={link_style}>Fixed Arithmetic</Link></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Switch>
          <Route path="/float32"></Route>
          <Route path="/float64"></Route>
          <Route path="/qfixed"><QFixed></QFixed></Route>
          <Route path="/fixed_arithmetic"></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
