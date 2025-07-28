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

// state for storing movies data after fetch
const [movieList, setMovieList] = useState([]);

// loading state
const [isLoading, setIsLoading] = useState(false);

// function to fetch movies data
const fetchMovies = async () => {
  try{
    // the fetching endpoint
const endpoint = `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;
// get the response
const response = await fetch(endpoint, API_OPTIONS);
// if the response is not ok
if(!response.ok){
  throw new Error(`Failed to fetch movies.`);
}
// parse the response
const data = await response.json();

// another error handling
if(data.response === 'false'){
  setErrorMessage(data.Error || 'Failed to fetch movies.');
  // set movies list to blank
  setMovieList([]);
  return;
}
// populate the moviesList array with the data
setMovieList(data.result || []);
  } catch(error){
    console.error(`Error fetching movies: ${error}`);
    setErrorMessage('Error fetching movies, Please try again later.')
  }
}

// useEffect hook for movie fethching
useEffect(() => {
  fetchMovies();
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