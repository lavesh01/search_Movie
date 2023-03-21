import React from 'react'
import styled from "styled-components";

const Navbar = styled.div`
    width: 100%;
    height: 8vh;
    background-color: black;
    color: white;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`
const Heading = styled.h1`
    padding: 1rem;
`
const Span = styled.span`
    color: royalblue;
`


const Header = () => {
  return (
    <Navbar>
        <Heading> Movie<Span>DB</Span> </Heading>
    </Navbar>
  )
}

export default Header;
