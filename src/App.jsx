// IMPORT THE SEACH COMPONENT
import { useEffect, useState } from 'react';
import Search from './components/Search';
// API BASE URL
const API_BASE_URL = ' https://api.themoviedb.org/3';
// API KEY
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
// API OPTIONS
const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`
  }
}
const App = () => {
  // CREATE A STATE TO PASS searchTerm PROPS TO SEARCH BAR CHILD COMPONENT
const [searchTerm, setSearchTerm] = useState('');

// state for error showcase
const  [errorMessage, setErrorMessage] = useState('');

// function to fetch movies data
const fetchMovies = async () => {
  try{

  } catch(error){
    console.error(`Error fetching movies: ${error}`);
    setErrorMessage('Error fetching movies, Please try again later.')
  }
}

// useEffect hook for movie fethching
useEffect(() => {
  
}, [])

  return (
    <main>
      <div className="pattern">
        <div className="wrapper">
          <header>
             {/*  IMPORT HERO IMAGE */}
            <img src="./hero-img.png" alt="hero-banner" />
            {/*  CREATE A HEADER AND DUMMY SEARCH ELEMENT */}
            <h1>Find <span className='text-gradient'>Movies</span> You'll Enjoy Without the Hassle</h1>
            {/* IMPORT THE SEARCH COMPONENT,  PASS THE STATE PROPS */}
            <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/> 
          </header>

          {/* show error message */}
          <section className='all-movies'>
<h2>All Movies</h2>
{errorMessage && <p className='text-red-500'>{errorMessage}</p>}
          </section>
        </div>
      </div>
    </main>
  )
}

export default App