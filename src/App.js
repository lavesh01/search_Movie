import './index.css';

import React , {useState} from 'react'

import Header from "./components/Header"
import MovieList from "./components/MovieList"
import SearchBar from "./components/SearchBar"

const App = () => {
    const [movies, setMovies] = useState([]);
  return (
    <div className="App">
    <Header />
    <SearchBar setMovies={setMovies} />
    <MovieList movies={movies} />
    </div>
  )
}

export default App;