import React, { CSSProperties } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

// import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom"
import { Nav, Navbar } from 'react-bootstrap';
import {AiFillCalculator} from 'react-icons/ai'
import {FaCalculator} from 'react-icons/fa'
import FixedPage from './pages/Fixed';
import FloatingPage from './pages/Floating';
import AboutPage from './pages/About';
import { Form } from 'react-bootstrap';

function App() {
  let link_style : CSSProperties = {
    textDecoration : 'inherit',
    color : 'inherit'
  }
  return (
    <>
      <Router>
        <Redirect exact from="/" to="/fixed" />
        <Navbar bg="dark" variant="dark" expand="lg">
          <Navbar.Brand> <FaCalculator/> Type Calculator </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Nav.Link><Link to="/float" style={link_style}>Floating Point</Link></Nav.Link>
              <Nav.Link><Link to="/fixed"  style={link_style}>Fixed Point</Link></Nav.Link>
              <Nav.Link><Link to="/about"  style={link_style}>About</Link></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Switch>
          <Route path="/float"><FloatingPage></FloatingPage></Route>
          <Route path="/fixed"><FixedPage></FixedPage></Route>
          <Route path="/about"><AboutPage></AboutPage></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
