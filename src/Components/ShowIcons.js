import React from 'react';
import './ShowIcons.css'

export default function ShowIcons({Icons}) {
  return <div className='ShowIcons'>
       {Icons && <Icons className='show-icon'/>}
  </div>;

}
