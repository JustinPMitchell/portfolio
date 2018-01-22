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

class Footer extends Component {
  render() {
    return (
      <Router>
        <div className="Footer">
          Footer
        </div>
      </Router>
    );
  }
}

export default Footer;