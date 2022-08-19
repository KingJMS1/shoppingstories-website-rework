import HomeHeader from '../components/HomeHeader.js'
import HomeSection from '../components/HomeSection.js'
import LoginSignUpForm from '../components/LoginSignUpForm.js'
import AboutSection from '../components/AboutSection.js'
import { AuthContext } from '../components/Auth';
import React, { useContext } from 'react';

const Home = () => {
  const { isSignedIn } = useContext(AuthContext)
  let signedIn = isSignedIn;

  return (
    <>  
        <HomeHeader />
        { !signedIn && <LoginSignUpForm /> }
        <HomeSection id="home"/> 
        <AboutSection name = "about" id="about"/>
    </>
  )
}

export default Home