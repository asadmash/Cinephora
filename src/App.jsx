import React, { useState, useEffect } from 'react';

const Card = ({title}) => {
  const [hasLiked, setHasLiked]= useState(false);

  useEffect(() => {
    console.log(`${title} has been liked: ${hasLiked}`)
  })
  return(
    <div className='card'>
      <h2>{title}</h2>

      {/* button to liked or unliked */}
      <button onClick={() => setHasLiked(!hasLiked)}>
        {hasLiked ? '❤️' : '🤍'}
      </button>
    </div>
  )
}

const App = () => {
  return (
    <div className='card-container'>
      <Card title="Star wars" rating={5} isCool={true}/>
      <Card title="Avater"/>
      <Card title="The Lion King"/>
    </div>
  )
}

export default App