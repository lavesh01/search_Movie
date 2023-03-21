import "./Loader.css";

import React , {useEffect, useState} from 'react';

import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  top: 10px; 
  z-index: 0;
`

const Container = styled.div`
  width: 70%;
  height: 60vh;
  background-color: #fff;
  display: flex; 
  justify-content: center;
  align-items: center;
`
const Left = styled.div``

const Img = styled.img`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 2rem;
  width: 200px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0) 0px 22px 40px 6px;
`

const Right = styled.div`
  display: flex;
  flex-direction: column;
  height: 350px;
  justify-content: space-between ;
  padding: 1.5rem 0;
`

const Title = styled.h1`
  font-weight: 600;
  font-size: 2.5rem;
  color: royalblue;
`
const Description = styled.p``

const Rating = styled.span``

const Span = styled.span`
  padding: .2rem;
  border: 1.5px solid black;
  border-radius: 20px;
  margin-right: 1rem;
  &:hover{
    background-color: black;
    color: white;
    transition: all 0.5s ease;
  }
`
const Duration = styled.span`
  padding-right: 2rem;
`

const Genre = styled.p``

const Actors = styled.p``

const Bold = styled.span`
  font-weight: 700;
`

const MovieDetails = ({imdbID}) => {
    const [ movie, setMovie ] = useState([]);
    const [ loading, setLoading ] = useState(false);
    
    useEffect(() => {   

        const getMovie = async () => {   

            fetch(`https://www.omdbapi.com/?i=${imdbID}&page=1&apikey=${process.env.REACT_APP_API_KEY}`)
              .then(res => res.json())
              .then(data =>  {
                setMovie(data);
                setLoading(true);
              });
        }
        getMovie();
    },[imdbID]);
    
  return (
    <>
    {loading ?
    
      <Wrapper> 
      <Container>
        <Left>
          <Img src={movie.Poster} />
        </Left>

        <Right>

            <Title>{movie.Title}</Title>
            <Description><em>{movie.Plot}</em></Description>
          
              {movie.Ratings?.map((rating, id) => (
                <Rating key={id}>
                  <span><Bold>{rating.Source} </Bold>: </span>
                  <Span>{rating.Value}</Span>
                </Rating>
              ))}

            <Duration>
            <span><Bold>Runtime</Bold>: {movie.Runtime} </span>
            <span><Bold>Released</Bold>: {movie.Released} </span> 
            </Duration>

            <Genre><Bold> Genre </Bold>: {movie.Genre}</Genre>
            <Actors><Bold> Actors </Bold>: {movie.Actors}</Actors>
          
        </Right>
          
      </Container>
          </Wrapper> :
          <div className="center">
        <div className="loader">
            <span className="loader-text">loading</span>
            <span className="load"></span>
        </div>
        </div>

    }

    </>
  
  )
}

export default MovieDetails;