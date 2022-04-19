import React from 'react';
import mypic from '../../images/myself.jpg';

const About = () => {
    return (
        <div className='container'>
            
            <div className="row">
                <div className="col-md-6">
                  <div className="py-5">
                      <img className=" img-fluid" src={mypic} alt=""/>
                  </div>
              </div>
                  <div className="col-md-6">
                      <div className="pe-3 d-flex flex-column justify-content-center h-100">
                        <h1 className=" fw-bold ">About Myself</h1>
                          <p className="fs-5 text-muted">My name is "MD HAKIMUR JAMAN". I also have a nickname it's called "MANIK". I am studying Computer Science and Technology at "Chongqing University of Technology" in China. I want to acquire higher skills in Computer Science in hte feture.</p>
                            
                      </div>
                  </div>
                  
              </div>
        </div>
    );
};

export default About;