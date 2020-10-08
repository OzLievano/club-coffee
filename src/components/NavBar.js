import React from 'react';
import {Link} from 'react-router-dom'
import styled from 'styled-components';
import coffeeLogo from '../coffeeLogo.jpg'

const NavBarWrapper = styled.div`
    display:flex;
    background-color:#c5aa6a;
    justify-content:flex-start;
    align-items:center;
    color:black;
    font-size:2rem;
    font-weight:bold;
    a{
        text-decoration:none;
        padding:.5em;
    }
    img{
        margin-left:1em;
    }
`;
const NavBar = () => {
    return (
        <NavBarWrapper>
            <img src={coffeeLogo} alt="coffee logo" style={{height:'10vh'}}></img>
            <Link to ="/">Home</Link>
            <Link to="/order-coffee">Order Coffee</Link>
        </NavBarWrapper>
    )
}

export default NavBar
