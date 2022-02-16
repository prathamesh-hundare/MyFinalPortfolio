import React from 'react';
import './topbar.scss';
import {Person , Mail , EmojiPeople} from '@material-ui/icons';

export default function Topbar({menuOpen , setmenuOpen}) {
  return <div className={'topbar ' +(menuOpen && "active")}>
    <div className="wrapper">
      <div className="left">
        <a href="#intro" className='logo'>Portfolio.</a>
        <div className="itemContainer">
          <Person className='icon'/>
          <span>+91 7798016080</span>
        </div>
        <div className="itemContainer">
          <Mail className='icon'/>
          <span>hundareprathamesh0009@gmail.com</span>
        </div>
      </div>
      <div className="center">
        <EmojiPeople className='ic'/>
      </div>
      <div className="right">
        <div className="hamburger" onClick={()=>setmenuOpen(!menuOpen)}>
          <span className='line1'></span>
          <span className='line2'></span>
          <span className='line3'></span>
        </div>
      </div>
    </div>
  </div>;
}
