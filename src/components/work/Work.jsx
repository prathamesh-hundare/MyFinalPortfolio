import React from 'react';
import './works.scss';
import InWork from '../inwork/InWork';
import {products} from '../../data';

export default function Work() {
  return <div className='work' id='work'>
    <div className="wktexts">
      <h1 className="wktitle">
        Create & Inspire. It's Us..!
      </h1>
      <p className='wkdesc'>
        This is a creative portfolio that your work has been waiting for.
        Beautiful designs, stunning portfolio styles & a whole lot more awaits
        inside. 
      </p>
      <p className='eg'><i>Some of my designs :</i></p>
    </div>
    <div className="wklist">
      {products.map(item=>(
        <InWork key={item.id} img={item.img} link={item.link} title={item.title}/>
      ))}
    </div>
  </div>;
}
