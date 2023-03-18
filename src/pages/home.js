import React , {useState} from 'react'

import Header from "../components/Header"
import MovieList from "../components/MovieList"
import SearchBar from "../components/SearchBar"

// import MovieDetails from '../components/MovieDetails'



const Home = () => {
    const [movies, setMovies] = useState([]);
  return (
    <>
    <Header />
    <SearchBar setMovies={setMovies} />
    <MovieList movies={movies} />
    {/* <MovieDetails movies={movies} /> */}
    </>
  )
}

export default Home;