import React , {useState} from 'react'

import Header from "../components/Header"
import MovieList from "../components/MovieList"
import SearchBar from "../components/SearchBar"

const Home = () => {
    const [movies, setMovies] = useState([]);
  return (
    <>
    <Header />
    <SearchBar setMovies={setMovies} />
    <MovieList movies={movies} />
    </>
  )
}

export default Home;