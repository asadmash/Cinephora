import React from 'react'

const Search = ({searchTerm, setSearchTerm}) => { //STEP:02-> RECIVE THE PROPS AND DESTRUCTE IT
  return (
    // STEP:01-> STYPE THE SEARCH BAR TEXT
    <div className='text-white text-3xl'>{searchTerm}</div>
  )
}

export default Search