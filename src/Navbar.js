import React, { Component } from 'react';
import Projects from './Projects.js';
import About from './About.js';
import Blog from './Blog.js';
import Contact from './Contact.js';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class Navbar extends Component {
  render() {
    return (
      <Router>
        <div className="Navbar">
          <nav className="navbar navbar-light bg-faded">
            <a className="navbar-brand" href='/'>Mitchell</a>
            <a className="navbar-brand" href='/Projects'>Projects</a>
            <a className="navbar-brand" href='/Blog'>Blog</a>
            <a className="navbar-brand" href='/Contact'>Contact</a>
          </nav>

          <div className='content-container'>
            <Route exact path='/' component={About} />
            <Route path='/Projects' component={Projects} />
            <Route path='/Blog' component={Blog} />
            <Route path='/Contact' component={Contact} />
          </div>
        </div>
      </Router>
    );
  }
}

export default Navbar;