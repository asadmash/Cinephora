import React from 'react'

const Search = ({searchTerm, setSearchTerm}) => { //STEP:02-> RECIVE THE PROPS AND DESTRUCTE IT
  return (
    // STEP:01-> STYPE THE SEARCH BAR TEXT
    <div className='search'>
<div>
  {/* STEP:03-> update the searchbar, search image and the input which now show the value of the state and update it on event update */}
  <img src="search.svg" alt="search" />
  <input type="text" placeholder='Search though thousands of movies' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
</div>
    </div>
  )
}

export default Search