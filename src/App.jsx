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
        </div>
      </div>
    </main>
  )
}

export default App