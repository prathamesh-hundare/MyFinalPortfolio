import React from 'react';
import './in.scss';

const InWork = ({img , link , title}) =>{
  return <div className='p'>
    <div className="p-browser">
      <div className="p-circle"></div>
      <div className="p-circle"></div>
      <div className="p-circle"></div>
      <p>{title}</p>
    </div>
    <a href={link} target="_blank" rel="noreferrer">
      <img src={img} alt="" className="p-img" />
    </a>
  </div>;
}

export default InWork;