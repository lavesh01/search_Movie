import React, {useEffect, useState} from 'react'

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SearchIcon from '@mui/icons-material/Search';
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 1.5rem 0 0 0;
    
`
const Header = styled.h1`
    display: flex;
    padding-bottom: 1rem;
`
const Input = styled.input`
    width: 100%;
    height: 60px;
    background-color: #fff;
    color: #cfcfcf;
    border: none;
    border-radius: 45px;
    box-shadow: 0px 0px 8px #ddd;
    font-size: 1.5rem;
    font-weight: 300;
    margin-left: 5px;
    padding-right: 85px;
    padding-left: 65px;
    &:focus{
        outline: none;
    }
    
`
const Button = styled.button`
    height: 3rem;
    border: none;
    border-radius: 35px;
    padding: 4px 8px;
    margin-left: 4px;
    background-color: royalblue;
    color: white;
    cursor: pointer;
`
const Search = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: royalblue;
`
const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 99;
`

const SearchBar = ({setMovies}) => {
    const [input, setInput ] = useState([]);
    

    const handleChange = (event) => {
        const { value }= event.target;
        setInput(value);
        getMovies(value);
        
    }
    const getMovies = async () => {   
        fetch(`https://www.omdbapi.com/?s=${input}&page=1&apikey=${process.env.REACT_APP_API_KEY}`)
          .then(res => res.json())
          .then(data =>  setMovies(data.Search));
    }
    
    useEffect(() => {
        getMovies();
    },);
    
  return (
    <Container>

        <Header>Find Movies, TV shows and more.</Header>
        
        <Wrapper>

        <Search >
         <SearchIcon style={{fontSize: "2.5rem"}} />
        </Search>
        
        <Input 
            type="text" 
            placeholder="Enter keywords..."
            id="input"
            value={input}
            onChange={handleChange}    
        />

        <Button type="submit">
            <ArrowForwardIcon style={{fontSize:"2rem"}}/>
        </Button>
        
        </Wrapper>
        
    </Container>
  )
}

export default SearchBar