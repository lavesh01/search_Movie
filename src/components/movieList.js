import React , {useState} from 'react'

import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`
const Contain = styled.div`
    width: 33%;
    background-color: white;
    box-shadow: 0px 0px 8px #ddd;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    max-height: 300px;
    overflow-y: scroll; 
    &::-webkit-scrollbar {
      display: none; 
    }
`
const Box = styled.div`
    display: flex;
    padding: 15px;
    border-bottom: 1px solid black;
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-left: 10px;
`
const Img = styled.img`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  width: 20%;
  `
const Title = styled.title`
  display: flex;
  font-weight: 600;
  font-size: 1.5rem;
`
const MovieDetail  = styled.div`
  display: flex;
  justify-content: space-around;
  font-size: 0.8rem;
`
const Type = styled.div`
`
const Year = styled.div`
`


const MovieList = ({movies}) => {
  const [imdbID, setimdbID] = useState("");
  const handleClick = (id) => {
    setimdbID(id);
    console.log(id);
    console.log(imdbID);
  }
  return (
    <>

    <Container>
      <Contain>
        {movies?.map((movie,id) => (
            
            <Box key={id} onClick={handleClick(movie.imdbID)} >
              <Img src={movie?.Poster} alt="poster" />

            <Wrapper>
              <Title>{movie.Title}</Title>
              
              <MovieDetail>
                <Year><span style={{fontWeight:"700"}}>• </span>{movie?.Year}</Year>
                <Type><span style={{fontWeight:"700"}}>• </span>{movie?.Type}</Type>
              </MovieDetail>

            </Wrapper>
            
            </Box>
          
        ))}
      </Contain>
    </Container>

    </>
  )
}

export default MovieList;



            