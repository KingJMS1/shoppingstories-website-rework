import React from 'react'
import styled from 'styled-components'
import aboutImage from '../images/aboutImage.jpeg'

const InfoContainer = styled.div`
    margin: 0;
    background-color: #f6f1cb;
    min-height: 100%;
    padding-top: 60px;
    @media screen and (max-width: 786px) {
        padding: 100px 0;
    }
`
const InfoWrapper = styled.div`
    margin: 0;
    background-color: #f6f1cb;
    display: grid;
    z-index: 1;
    height: 860px;
    width: 100%;
    max-width: fit-content;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: -50px;
    padding: 0 24px;
    justify-content: center;
`
const InfoRow = styled.div`
    margin: 0;
    display: grid;
    width: 100%;
    background-color: #f6f1cb;
    grid-auto-columns: minmax(auto, 1fr);
    grid-template-areas: 'col0 col0' 'col1 col2' 'col3 col3';

    @media screen and (max-width: 786px) {
        grid-template-areas: 'col0' 'col1' 'col2' 'col3';
    }
`
const Column0 = styled.div`
    text-align: center;
    margin-bottom: -30px;
    grid-area: col0;
    position: relative;
`
const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
    display: flex;
    width: 100%;
    background-color: #f6f1cb;
`
const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
    display: flex;
    width: 100%;
    background-color: #f6f1cb;
`
const Column3 = styled.div`
    grid-area: col3;
    width: 100%;
    background-color: #f6f1cb;
`
const TextWrapper = styled.div`
    width: 100%;
    padding-top: 0;
    padding-bottom: 60px;
`
// const TopLine = styled.p`
//     color: #01bf71;
//     font-size: 16px;
//     line-height: 16px;
//     font-weight: 700;
//     letter-spacing: 1.4px;
//     text-transform: uppercase;
//     margin-bottom: 16px;`
// `
const Heading = styled.h1`
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color: #010606;

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }    
`
const Subtitle = styled.p`
    width: 100%;
    font-size: 18px;
    line-height: 24px;
    color: #000000;
`
const ImageWrap = styled.div`
    width: 100%;
    height: 100%;
`
const Image = styled.img`
    width: 100%;
    /* margin: 0 0 10px 0; */
    padding-right: 0;
`
const SlideBar = styled.nav`
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: arial, sans-serif;
    max-width: 900px;
    margin: 50px auto;
    overflow-wrap: break-word;
    height: 80px;
    display: block;
    background: #fefff5;
    margin-top: 10px;
    border-radius: 5px;
    box-shadow: 0 4px 8px 5px rgba(0, 0, 0, 0.2), 0 15px 20px 5px rgba(0, 0, 0, 0.19);

    
    input {
        display: none;

        &:checked + label{
            opacity: 1;
            color: #fff;
        }
    }

    label {
        width: 20%;
        height: 80px;
        float: left;
        color: #000;
        opacity: 0.2;
        font-size: 30px;
        display: flex;
        justify-content: center;
        align-items: center;

        &:hover{
            cursor: pointer;
            color: #666;
        }   
    }

    span{
        display: block;
        padding: 10px;
        font-size: 20px;
        font-weight: 900;
        text-align: center;
    }

    .sliderTab{
        width: 20%;
        height: 80px;
        border-radius: 5px;
        background: -webkit-linear-gradient(left, #455c2b, #283618);
    }

    label, .sliderTab {
    transition: all 500ms ease-in-out;
    -webkit-transition: all 500ms ease-in-out;
    -moz-transition: all 500ms ease-in-out;
    }

    .item1{ &:checked ~ .sliderTab{ margin-left: 0%;} }
    .item2{ &:checked ~ .sliderTab{ margin-left: 20%;} }
    .item3{ &:checked ~ .sliderTab{ margin-left: 40%;} }
    .item4{ &:checked ~ .sliderTab{ margin-left: 60%;} }
    .item5{ &:checked ~ .sliderTab{ margin-left: 80%;} }
`
// const TextContainer = styled.div`
//     font-size: 20px;
//     font-weight: 900;
//     text-align: center;
// `

const AboutSection = () => {
    return (
        
            <InfoContainer id='about'>
                <InfoWrapper id='historyRevealed'>
                    <InfoRow>
                        <Column0>
                                <Heading>About History Revealed</Heading>
                        </Column0>
                        <Column1>
                            <ImageWrap>
                                <Image src={aboutImage}/>
                            </ImageWrap>
                        </Column1>
                        <Column2>
                            <TextWrapper>
                                <Subtitle style={{textAlign: 'center'}}>History Revealed, Inc. is an independent, 501(c)(3) non-profit, historical research organization.</Subtitle>
                                <Subtitle>
                                    We focus on learning more about lesser-known individuals and groups of people from the past with a particular emphasis on individuals and 
                                    communities whose stories were not historically told. Using historic documents, artifacts, buildings, and the landscape, we connect the dots 
                                    of information in search of the larger story of these individuals and groups.<br/><br/>Because accessibility of our research is important to 
                                    us, we engage in crowdsourcing to aid us and the public in making research discoveries. We create digital presentations and publications that 
                                    showcase not only the data but also provide historical context and connections.<br/><br/>We actively seek partnerships with universities, museums, 
                                    and other historical organizations to exchange ideas, suggest solutions, and implement strategies to further advance the understanding of historically 
                                    forgotten individuals and communities relating to the American experience.
                                </Subtitle>
                            </TextWrapper>
                        </Column2>
                        <Column3>
                            <SlideBar>
                                <input type="radio" name="slide" className="item1" id="item1" defaultChecked/>
                                <label htmlFor="item1" ><span>History Revealed</span></label>
                                <input type="radio" name="slide" className="item2" id="item2"/>
                                <label htmlFor="item2" ><span>The Project</span></label>
                                <input type="radio" name="slide" className="item3" id="item3"/>
                                <label htmlFor="item3" ><span>Transcription and the Database</span></label>
                                <input type="radio" name="slide" className="item4" id="item4"/>
                                <label htmlFor="item4"><span>The Ledgers</span></label>
                                <input type="radio" name="slide" className="item5" id="item5"/>
                                <label htmlFor="item5"><span>Support and Volunteers</span></label>
                                <div className="sliderTab"/>
                            </SlideBar>
                        </Column3>
                    </InfoRow>
                </InfoWrapper>
                <InfoWrapper style={{'display':'none'}} id='theProject'>
                    <InfoRow>
                        <Column0>
                            <div style={{position: 'absolute', bottom: 0}}>
                                <Heading>The Project</Heading>
                            </div>
                        </Column0>
                        <Column1>
                            <ImageWrap>
                                <Image src={aboutImage}/>
                            </ImageWrap>
                        </Column1>
                        <Column2>
                            <TextWrapper>
                                <Subtitle>
                                    We focus on learning more 
                                    about lesser-known individuals and groups of people from the past with a particular emphasis on individuals and communities whose 
                                    stories were not historically told. Using historic documents, artifacts, buildings, and the landscape, we connect the dots of information 
                                    in search of the larger story of these individuals and groups.<br/><br/>Because accessibility of our research is important to us, we engage 
                                    in crowdsourcing to aid us and the public in making research discoveries. We create digital presentations and publications that showcase 
                                    not only the data but also provide historical context and connections.<br/><br/>We actively seek partnerships with universities, museums, 
                                    and other historical organizations to exchange ideas, suggest solutions, and implement strategies to further advance the understanding 
                                    of historically forgotten individuals and communities relating to the American experience.
                                </Subtitle>
                            </TextWrapper>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>    

    );
};

export default AboutSection;