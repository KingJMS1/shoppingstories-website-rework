import React, { useContext } from 'react'
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import 'typeface-titillium-web'
import 'typeface-noto-sans'
import 'typeface-dancing-script'
import { AuthContext } from '../components/Auth';

const IntroContainer = styled.div`
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    top: 0;
    left: ${({move}) => (move? '0' : '275px')};
    right: 0;
    bottom: 0;
    z-index: 2;
    padding-bottom: 200px;
`
const IntroBox = styled.div`
    margin: 0 auto;
    position: relative;
    width: 550px;
    height: 100px;
`
const IntroOpacity = styled.div`
    
    position: absolute;
    width: 550px;
    height: 100px;
    border-radius: 10px;
    background-color: #787878;
    box-shadow: 0 4px 8px 5px rgba(0, 0, 0, 0.2), 0 15px 20px 5px rgba(0, 0, 0, 0.19);
    opacity: 0.3;
    z-index: 4;
`
const Intro = styled.div`
    text-align: center;
    position: relative;
    padding: 8px;
    font-family: 'Dancing-Script', cursive;
    font-size: 50px;
    font-weight: 900;
    color: #ffffff;
    z-index: 5;
`
const TitleBox = styled.div`
    margin: 0 auto;
    position: relative;
    width: 630px;
    height: 100px;
`
const TitleOpacity = styled.div`
    position: absolute;
    width: 630px;
    height: 135px;
    margin-top: 20px;
    border-radius: 10px;
    background-color: #787878;
    box-shadow: 0 4px 8px 5px rgba(0, 0, 0, 0.2), 0 15px 20px 5px rgba(0, 0, 0, 0.19);
    opacity: 0.3;
    z-index: 5;
`
const Typewriter = styled.div`
    text-align: center;
    position: relative;
    padding: 8px;
    font-family: 'Dancing-Script', cursive;
    font-size: 90px;
    font-weight: 900;
    color: #ffffff;
    z-index: 5;
`
const HomeHeader = () => {
    const [text, setText] = useState('');
    const fullText = "Shopping Stories" 
    const { isSignedIn } = useContext(AuthContext)
    let signedIn = isSignedIn;


    useEffect(() => {
        const tick = () => {
            let updatedText = fullText.substring(0, text.length + 1)
            setText(updatedText) 
        }
        let delta = 300-Math.random()*100;
        let ticker = setInterval(() => { 
            tick();
        }, delta)

        return () =>{ clearInterval(ticker)};
    }, [text]) 

    return ( 
        <IntroContainer move={signedIn}>
            <IntroBox>
                <IntroOpacity/>
                <Intro>History Revealed Presents</Intro>
            </IntroBox>
            <TitleBox>
                <TitleOpacity/>
                <Typewriter>{text}</Typewriter>
            </TitleBox>
        </IntroContainer>
    )
}

export default HomeHeader