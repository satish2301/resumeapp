import React from 'react';
import { MdCall,MdLocationPin,MdTravelExplore} from "react-icons/md";
import {AiTwotoneMail,AiFillLinkedin} from 'react-icons/ai';
import {FaFirefox,FaGamepad} from 'react-icons/fa'
import {FcReading} from 'react-icons/fc'
import './App.css';
import Typewriter from 'typewriter-effect';

import { Link } from "react-router-dom";
import profile from './profile.jpeg'
function App() {
  return (
    <div className="container-fluid body">
        <div className="container">
          <div className="row">
              <div className="col-md-4 border  left ">
                     <div className="image text-center">
                         <img src={profile}/>
                      </div>
                      <div className="text-center">
                         <h3>SATISH CHANDRA</h3>
                          
                         <Typewriter
                         options={{
                               autoStart:true,
                          loop:true,
                          delay:40,
                          cursor:" ",
                          strings:[
                             "React-Developer",
                           "Front End Developer",
                           "Freelancer",
                          ],
                          }}
                          />
                     
                         <hr/>
                      </div>
                      <div>
                           <h3>CONTACT INFO</h3>
                           <p><MdCall className="fs-4 mx-2"/>6397921573</p>
                           <p><AiTwotoneMail className="fs-4 mx-2"/>webdevelopersatish@gmail.com</p>
                           <p><FaFirefox className="fs-4 mx-2"/><a href="https://portfoliowebsitesatish.netlify.app" target="_blank">portfoliowebsitesatish.netlify.app</a></p>
                           <p><AiFillLinkedin className="fs-4 mx-2"/><a href="https://linkedin.com/in/satish-chandra-a07aa623a" target="_blank">linkedin.com/in/satish-chandra-a07aa623a</a></p>
                           <p><MdLocationPin className="fs-4 mx-2"/>Moradabad,Uttar Pradesh</p>
                           <hr/>
                      </div>
                      <div>
                         <h3>EDUCATION</h3>
                         <p className="mx-2">Post Graduation</p>
                         <ul className="mx-3">
                             <li>MCA</li>
                             <li>CCSIT,Teerthanker Mahaveer University,
                                 Moradabad, Uttar Pradesh.
                             </li>
                             <li>Year :- 2023</li>
                           </ul>

                           <p className="mx-2">Graduation</p>
                         <ul className="mx-3">
                             <li>MCA</li>
                             <li>Harpal Memorial Degree College , MJPRU University Bareilly,
                              Uttar Pradesh.
                             </li>
                             <li>Year :- 2020</li>
                           </ul> 
                           <p className="mx-2">Intermediate</p>
                         <ul className="mx-3">
                             <li>Intermediate</li>
                             <li>S.D.M Inter College , Moradabad , {<br/>}Uttar Pradesh.
                             </li>
                             <li>Year :- 2016</li>
                           </ul> 
                           <p className="mx-2">High School</p>
                         <ul className="mx-3">
                             <li>High School</li>
                             <li>S.D.M Inter College , Moradabad , {<br/>}Uttar Pradesh.
                             </li>
                             <li>Year :- 2014</li>
                           </ul>
                           <hr/>
                      </div>
                      <div>
                            <h3>LANGUAGE</h3>
                              <ul className="mx-3">
                                 <li>Hindi</li>
                                 <progress value="90" max="100"></progress>
                                 <li>English</li>
                                 <progress value="50" max="100"></progress>
                              </ul>
                      </div>
              </div>
              <div className="col-md-8 border right">
                 <div className="right-about mt-5s">
                    <h2 className="fw-bold">PROFILE</h2>
                    <p>A self-driven & motivated Full Stack
                          Developer who has 6 months of experience.
                          I like to work in an ambitious environment
                          where the allotted projects challenge my
                          abilities to bring out the best in me and
                          benefit the organisation that I work for.
                          </p>

                      <h2 className="fw-bold">EXPERIENCE</h2>
                        <h4>Oblivision Technologies Mohali.</h4>
                        <p>Where I have Developer a restaurant based web plateform in which booking payment and other information will be provide to the user.</p>
                        <h4>Front end website</h4>
                        <p>I have built web application using
                            HTML,CSS,JAVASCRIPT,BOOTSTRAP for various business domain
                              website.
                        </p>
                        <h4>Worked on REACT.JS</h4>
                        <p>I have also  worked on React.js components. </p>

                        <h2 className="fw-bold">PROJECTS </h2>
                        <div className="mx-5">
                        <h4>1:-Restaurant website</h4>
                        <a href="https://w1csq5yrdcz8zlqajygk8w.on.drv.tw/site/Restaruent/" target="-blank" style={{color:"purple"}}>Click here</a>
                        <h4>1:-TMU College website</h4>
                         <a href="https://w1csq5yrdcz8zlqajygk8w.on.drv.tw/site/TMU%20WEBSITE/TMU%20Website/Tmu%20Website.html" target="_blank" style={{color:"purple"}}>Click here</a>
                         <h4>1:-Mobile Reparing website</h4>
                         <a href="https://mobilewebsitepintu.netlify.app/" target="_blank" style={{color:"purple"}}> Click here</a>
                         </div>
                        <h2 className="fw-bold">PROFESSIONAL SKILLS</h2>
                         <div className="d-flex offset-1 mt-3">
                                <div claexssName="mx-3 skill-name">
                                  <p className="fs-2">HTML</p>
                                  <p className="fs-2">CSS</p>
                                  <p className="fs-2">JAVASCRIPT</p>
                                  <p className="fs-2">BOOTSTRAP</p>
                                  <p className="fs-2">REACT</p>
                                  <p className="fs-2">C++</p>
                                  <p className="fs-2">JAVA</p>
                                  <p className="fs-2">PYTHON</p>
                                  
                                </div>
                                    
                                <div className="mx-5 progress_bar">
                                   <p className="fs-2"><progress value="80" max="100"></progress></p>
                                    <p className="fs-2"><progress value="60" max="100"></progress></p>
                                    <p className="fs-2"><progress value="50" max="100"></progress></p>
                                    <p className="fs-2"><progress value="70" max="100"></progress></p>
                                    <p className="fs-2"><progress value="50" max="100"></progress></p>
                                    <p className="fs-2"><progress value="55" max="100"></progress></p>
                                    <p className="fs-2"><progress value="45" max="100"></progress></p>
                                    <p className="fs-2"><progress value="50" max="100"></progress></p>

                                </div>
                         </div>
                         <h2 className="fw-bold mt-4 interest">INTEREST</h2>
                             
                        <span className="mt-3"><FaGamepad className="fs-4 mx-1"/>Gaming</span>
                        <span className="mt-3"><MdTravelExplore className="fs-4 mx-1"/>Travel</span>
                        <span className="mt-3"><FcReading className="fs-4 mx-1"/>Learning</span>

                 </div>
                 
              </div>
          </div>
        </div>  
    </div>
  );
}

export default App;
