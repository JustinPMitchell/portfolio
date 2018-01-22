import React, { Component } from 'react';
import Navbar from './Navbar.js';
import Footer from './Footer.js';
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

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
