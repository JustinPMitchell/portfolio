import React, { Component } from 'react';
import './App.css';

class Projects extends Component {
  render() {
    return (
      <div className="Projects">
        <h1>Projects page</h1>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className='project'>
                <img className='project-img' src='./corgi.jpg'></img>
                <div className='project-title'>
                    PROJECT TITLE
                </div>
              </div>
            </div>
            <div className="col">
              <div className='project'>
                <img className='project-img' src='./corgi2.jpg'></img>
                <div className='project-title'>
                    PROJECT TITLE
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className='project'>
                <img className='project-img' src='./corgi3.jpg'></img>
                <div className='project-title'>
                    PROJECT TITLE
                </div>          
              </div>
            </div>
            <div className="col">
              <div className='project'>
                <img className='project-img' src='./corgi4.jpg'></img>
                <div className='project-title'>
                    PROJECT TITLE
                </div>                
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className='project'>
                <img className='project-img' src='./corgi5.jpg'></img>
                <div className='project-title'>
                    PROJECT TITLE
                </div>                
              </div>
            </div>
            <div className="col">
              <div className='project'>
                <img className='project-img' src='./corgi6.jpg'></img>
                <div className='project-title'>
                    PROJECT TITLE
                </div>                
              </div>
            </div>
          </div>          
        </div>
      </div>
    );
  }
}

export default Projects;