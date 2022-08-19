import logo from '../images/logo.png';
import {FaBars} from 'react-icons/fa'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';
import { AuthContext } from './Auth';
import React, { useContext } from "react";

const Nav = styled.nav`
    background: #283618;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    height: 60px;
    /* margin-top: -80px; */
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    font-size: 1.5rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`
const NavbarContainer = styled.div`
    display: flex;     
    justify-content: space-evenly;
    height: 60px;
    z-index: 1;
    width: 100%;
    padding:0 24px;
    max-width: 1100px;
`
const NavLogo = styled(Link)`
    cursor: pointer;
    display: flex;
    position: absolute;
    left: 50px;
    top: -5px;
`
const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }
`
const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`
const NavItem = styled.li`
    height: 60px;

`
const NavLinkScroll = styled(HashLink)`
    color: #ffffff;
    display: flex;
    align-items: center;
    font-weight: bolder;
    text-decoration: none;
    padding: 0 3rem;
    height: 100%;
    cursor: pointer;

    &.active {
        border-bottom: 3px solid #ffffff;
    }

    &:hover {
        border-bottom: 3px solid #ffffff ;
    }
`
const NavLinks = styled(Link)`
    color: #ffffff;
    display: flex;
    align-items: center;
    font-weight: bolder;
    text-decoration: none;
    padding: 0 3rem;
    height: 100%;
    cursor: pointer;

    &.active {
        border-bottom: 3px solid #ffffff;
    }

    &:hover {
        border-bottom: 3px solid #ffffff ;
    }
`
const NavBtn = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px){
        display: none;
    }
    
`
const NavBtnLink = styled(Link)`
    border-radius: 50px;
    background: #e2d571;
    white-space: nowrap;
    padding: 10px 12px;
    color: #010606;
    font-size: 16px;
    font-weight: bolder;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: #b2b2b2;
        color: #010606;
    }
`

const Navbar = ({toggle}) => {

    const { logOut, isSignedIn } = useContext(AuthContext)
    let signedIn = isSignedIn;


    return (
    <>
        <Nav>
            <NavbarContainer>
                <NavLogo to='/'><img src={logo} height={70} width={70} alt='logo' /></NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinkScroll to="/#home">Home</NavLinkScroll>
                    </NavItem>
                    <NavItem>
                        <NavLinkScroll to="/#about">About</NavLinkScroll>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="/search">Search</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="/glossary">Glossary</NavLinks>
                    </NavItem>
                    {signedIn && <NavItem>
                        <NavLinks to="/account">Account</NavLinks>
                    </NavItem>}
                </NavMenu>
                { signedIn && <NavBtn onClick={logOut}><NavBtnLink to="/">Log Out</NavBtnLink></NavBtn> } 
                { !signedIn && <NavBtn><NavBtnLink to="/">Sign up/Sign In</NavBtnLink></NavBtn> }
                
            </NavbarContainer>
        </Nav>
    </>
    );
};

export default Navbar;

