import React from 'react'
import { useState } from 'react';
import './_catagoriesBar.scss'

const keywords = [
  "All",
  "React js",
  "JavaScript",
  "React Native",
  "use of API",
  "Redux",
  "Shoddo Khan",
  "Algorithm Art",
  "Guitar",
  "Bengali Songs",
  "Coding",
  "Cricket",
  "Football",
  "Real Madrid",
  "Christiano Ronaldo",
  "Poor Coder",
  "Shwetabh",
];

const CatagoriesBar = () => {
  const [activeElement, setActiveElement] = useState('all')

  const handleClick = (value) => {
    setActiveElement(value)
  }

  return (
    <div className='categoriesBar'>
      {
        keywords.map((keyValue, index) => (
          <span 
            key={index}
            onClick={() => handleClick(keyValue)}
            className={activeElement === keyValue ? 'active' : ''}
          >
            {keyValue}
          </span>
        ))
      }
    </div>
  )
}

export default CatagoriesBar