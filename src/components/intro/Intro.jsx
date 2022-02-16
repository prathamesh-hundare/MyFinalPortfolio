import React, { useEffect , useRef } from 'react';
import './intro.scss';
import { init } from 'ityped';

export default function Intro() {

  const textRef = useRef();

  useEffect(()=>{
    init(textRef.current,{
      showCursor:true,
      backDelay:1000,
      backSpeed:60,
      typeSpeed:60,
      strings:['Front-End Web Developer','Problem Solver']
    })
  },[])

  return <div className='intro' id='intro'>
    <div className="left">
      <div className="imgContainer">
        <img src="assets/me.png" alt="" />
      </div>
    </div>
    <div className="right">
      <div className="wrapper">
        <h2>Hi there, I'm</h2>
        <h1>Prathamesh</h1>
        <h3>A <span ref={textRef}></span></h3>
      </div>
      <a href="#about">
        <img src="assets/Arrow.png" alt="" />
      </a>
    </div>
  </div>;
}
