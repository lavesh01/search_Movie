import React , {useEffect, useState} from 'react';

import styled from 'styled-components';

const Container = styled.div``

const MovieDetails = (movies) => {
    const [movie, setMovie] = useState("");
    
    const imdbID = movies.map((movie) => movie.imdbID);
    console.log(imdbID);
    
    useEffect(() => {    
        const getMovies = async () => {   
            fetch(`https://www.omdbapi.com/?i=${imdbID}&page=1&apikey=4071b801`)
              .then(res => res.json())
              .then(data =>  setMovie(data.Search));
        }
        getMovies();
    },[]);
    
  return (
    <Container>

    </Container>
  )
}

export default MovieDetails