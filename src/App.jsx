// IMPORT THE SEACH COMPONENT
import { useEffect, useState } from "react";
import Search from "./components/Search";
import Spinner from "./components/Spinner";
import MovieCard from "./components/MovieCard";
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

  // loading state
  const [isLoading, setIsLoading] = useState(false);

  // function to fetch movies data
  const fetchMovies = async () => {
    // turn on the loading
    setIsLoading(true);
    // reset set error message
    setErrorMessage("");
    try {
      // the fetching endpoint
      const endpoint = `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;
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
    } catch (error) {
      console.error(`Error fetching movies: ${error}`);
      setErrorMessage("Error fetching movies, Please try again later.");
    } finally {
      // make the loading false
      setIsLoading(false);
    }
  };

  // useEffect hook for movie fethching
  useEffect(() => {
    fetchMovies();
  }, []);

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

          {/* show error message */}
          <section className="all-movies">
            <h2 className="mt-[40px]">All Movies</h2>
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
