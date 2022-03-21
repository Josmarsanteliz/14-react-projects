import React, { useState } from 'react';

const Question = ({title,info}) => {
 
const [showMore,setShowMore] = useState(false);

  return <article className='question'>
    <header>
      <h4>{title}</h4>
      <button className='btn' onClick={() => setShowMore(!showMore)}>{showMore ? '-' : '+'}</button>
    </header>
    <p>{showMore ? info : ''}</p>
  </article>
};

export default Question;
