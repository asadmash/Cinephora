// IMPORT THE SEACH COMPONENT
import { useEffect, useState } from "react";
import Search from "./components/Search";
import Spinner from "./components/Spinner";
import MovieCard from "./components/MovieCard";
import { useDebounce } from "react-use";
import { getTrendingMovies, UpdateSearchCount } from "./appwrite";

// API BASE URL
const API_BASE_URL = " https://api.themoviedb.org/3";
// API KEY
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
// API OPTIONS
const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};
const App = () => {
  // CREATE A STATE TO PASS searchTerm PROPS TO SEARCH BAR CHILD COMPONENT
  const [searchTerm, setSearchTerm] = useState("");

  // state for error showcase
  const [errorMessage, setErrorMessage] = useState("");

  // state for storing movies data after fetch
  const [movieList, setMovieList] = useState([]);

  // state for tending movies
  const [trendingMovies, setTrendingMovies] = useState([]);

  // loading state
  const [isLoading, setIsLoading] = useState(false);

  // debounce state
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");

  // debounce the search term to prevent too many api request
  useDebounce(() => setDebouncedSearchTerm(searchTerm), 800, [searchTerm]);


  // function to fetch movies data
  const fetchMovies = async (query = "") => {
    // turn on the loading
    setIsLoading(true);
    // reset set error message
    setErrorMessage("");
    try {
      // the fetching endpoint
      const endpoint = query
        ? `${API_BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
        : `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;
      // get the response
      const response = await fetch(endpoint, API_OPTIONS);
      // if the response is not ok
      if (!response.ok) {
        throw new Error(`Failed to fetch movies.`);
      }
      // parse the response
      const data = await response.json();

      // another error handling
      if (data.response === "False") {
        setErrorMessage(data.Error || "Failed to fetch movies.");
        // set movies list to blank
        setMovieList([]);
        return;
      }
      // populate the moviesList array with the data
      setMovieList(data.results || []);
      // console.log(data.results);

      // trigger the search count update when a query result exists
      if(query && data.results.length > 0){
        await UpdateSearchCount(query, data.results[0])
      }
    } catch (error) {
      console.error(`Error fetching movies: ${error}`);
      setErrorMessage("Error fetching movies, Please try again later.");
    } finally {
      // make the loading false
      setIsLoading(false);
    }
  };

// function to deal with trending movies data
const loadTrendingMovies  = async () =>{
  try {
    const movies = await getTrendingMovies();
    setTrendingMovies(movies);
  } catch (error) {
    console.error(`Error fetching trending movies:${error}`);
    
  }
}


  // useEffect hook for movie fethching
  useEffect(() => {
    fetchMovies(debouncedSearchTerm);
  }, [debouncedSearchTerm]);


  // effect for show trending movies
useEffect(() => {
 loadTrendingMovies();
}, [])


  return (
    <main>
      <div className="pattern">
        <div className="wrapper">
          <header>
            {/*  IMPORT HERO IMAGE */}
            <img src="./hero-img.png" alt="hero-banner" />
            {/*  CREATE A HEADER AND DUMMY SEARCH ELEMENT */}
            <h1>
              Find <span className="text-gradient">Movies</span> You'll Enjoy
              Without the Hassle
            </h1>
            {/* IMPORT THE SEARCH COMPONENT,  PASS THE STATE PROPS */}
            <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          </header>
          {/* trending movies ui and conditional rendering logic */}

       
          <section className="all-movies">
            <h2>All Movies</h2>
            {/* conditionally check every state and load appropriate content */}
            {isLoading ? (
              <Spinner />
            ) : errorMessage ? (
              <p className="text-red-500">{errorMessage}</p>
            ) : (
              <ul>
                {movieList.map((movie) => (
                  // pass props to movie card
                  <MovieCard key={movie.id} movie={movie} />
                ))}
              </ul>
            )}
          </section>
        </div>
      </div>
    </main>
  );
};

export default App;
