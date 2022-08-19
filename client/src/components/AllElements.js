import { Link as LinkRouter} from 'react-router-dom'
import { Link as LinkScroll} from 'react-scroll'
import { FaTimes } from 'react-icons/fa'
import styled, {createGlobalStyle} from 'styled-components';


// ============================================================ //
// *****************   INDIVIDUAL COMPONENTS  *****************
// ============================================================ //

export const ScrollButton = styled(LinkScroll)`
    border-radius: 50px;
    background: ${({primary}) => (primary ? '#01BF71' : '#010606')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30 px')};
    color: ${({dark}) => (dark  ? `#010606`: `#ffffff` )};
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0,2s ease-in-out;

    &:hover{
        transition: all 0,2s ease-in-out;
        background: ${({primary}) => (primary ? '#ffffff' : '#01BF71')};
    }
`

// ============================================================ //
// *****************        ABOUT SECTION     *****************
// ============================================================ //

export const InfoContainer = styled.div`
    color: #ffffff;
    background: ${({lightBg}) => (lightBg ? '#f9f9f9' : '#010606')};

    @media screen and (max-width: 786px) {
        padding: 100px 0;
    }
`
export const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 860px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
`
export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'`: `'col1 col2'`)};

    @media screen and (max-width: 786px) {
        grid-template-areas: ${({imgStart}) => (
            imgStart ? `'col1' 'col2'`: `'col1 col1' 'col2 col2'`
            )};
    }
`
export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`
export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`
export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
`
export const TopLine = styled.p`
    color: #01bf71;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`
export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color: ${({lightText}) => (lightText ? `#f7f8fa`: `#010606`)};

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }    
`
export const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: ${({darkText}) => (darkText ? `#010606`: `#ffffff`)};
`
export const ButtonWrap = styled.div`
    display: flex;
    justify-content: flex-start;
`
export const ImageWrap = styled.div`
    max-width: 555px;
    height: 100%;
`
export const Image = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
`
// ============================================================ //
// *****************        HOME SECTION      *****************
// ============================================================ //
export const Container = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 800px;
    position: relative;
    z-index: 1;

    /* @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    } */
`
export const Background = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`
export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232134;
`

// ============================================================ //
// *******************       HOME HEADER    *******************
// ============================================================ //
export const IntroContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: fixed;
    z-index: 2;
    width: 630px;
    margin: 150px 0 0 550px;
`
export const IntroBox = styled.div`
    margin: 0 auto;
    position: relative;
    width: 550px;
    height: 100px;
`
export const IntroOpacity = styled.div`
    
    position: absolute;
    width: 550px;
    height: 100px;
    border-radius: 10px;
    background-color: #787878;
    box-shadow: 0 4px 8px 5px rgba(0, 0, 0, 0.2), 0 15px 20px 5px rgba(0, 0, 0, 0.19);
    opacity: 0.3;
    z-index: 4;
`
export const Intro = styled.div`
    text-align: center;
    position: relative;
    padding: 8px;
    font-family: 'Dancing-Script', cursive;
    font-size: 50px;
    font-weight: 900;
    color: #ffffff;
    z-index: 5;
`
export const TitleBox = styled.div`
    margin: 0 auto;
    position: relative;
    width: 630px;
    height: 100px;
`
export const TitleOpacity = styled.div`
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
export const Typewriter = styled.div`
    text-align: center;
    position: relative;
    padding: 8px;
    font-family: 'Dancing-Script', cursive;
    font-size: 90px;
    font-weight: 900;
    color: #ffffff;
    z-index: 5;
`

// ============================================================ //
// *****************    LOGIN/SIGN UP FORM    *****************
// ============================================================ //
export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        box-sizing: border-box;
        font-family: 'Titillium Web', sans-serif;
    }
`;
export const FullContainer = styled.div`
    position: absolute;
    padding-top: 180px;
    padding-left: 50px;
    padding-right: 300px;
    align-items: center;
    z-index: 2;
`
export const Wrapper = styled.div`
    overflow: hidden;
    max-width: 390px;
    background: #f6f1cb;
    padding: 30px;
    border-radius: 5px;
    height: ${(props) => props.height};
    /* box-shadow: 0px 15px 20px rgba(0,0,0,0.1); */
    box-shadow: 0 4px 8px 5px rgba(0, 0, 0, 0.2), 0 15px 20px 5px rgba(0, 0, 0, 0.19);
    place-items: center;
`
export const TitleText = styled.div`
    display: flex;
    width: 200%;
    ${props => (props.$mode !== "login" ? `margin-left: 0%;` : 'margin-left: -50%;')}
    
`
export const Title = styled.div`
    width: 50%;
    font-size: 40px;
    font-weight: 700;
    text-align: center;
    transition: all 0.6s cubic-bezier(0.68,-0.55,0.265,1.55);
`
export const SlideControls = styled.div`
    position: relative;
    display: flex;
    height: 50px;
    width: 100%;
    overflow: hidden;
    background: #ffffff;
    margin: 20px 0 10px 0;
    justify-content: space-between;
    border: 1.5px solid lightgray;
    border-radius: 5px;

    .slide{
        height: 100%;
        width: 100%;
        color: #fff;
        font-size: 18px;
        font-weight: 500;
        text-align: center;
        line-height: 48px;
        cursor: pointer;
        z-index: 1;
        transition: all 0.6s ease;
    }
    .signuplabel {
        
    }
    .loginLabel {}

    .sliderTab{
        position: absolute;
        height: 100%;
        width: 50%;
        left: 0;
        z-index: 0;
        border-radius: 5px;
        background: -webkit-linear-gradient(left, #455c2b, #283618);
        transition: all 0.6s cubic-bezier(0.68,-0.55,0.265,1.55);
    }
    .signUpInput {
        display: none;

        
        &:checked ~ .loginLabel {
            color: #000;
        }
        &:checked ~ .signuplabel {
            color: #fff;
            font-weight: bolder;
            cursor: default;
            user-select: none;
        }
        &:checked ~ .sliderTab{
            left: 50%;
        }
    
        
    }

    .loginInput {
        display: none;
        &:checked ~ .signuplabel{
            color: #000;    
        }
        &:checked ~ .loginLabel{
            font-weight: bolder;
            cursor: default;
            user-select: none;
        }

    }
    
`
export const FormContainer = styled.div`
    width: 100%;
    overflow: hidden;
`
export const FormInner = styled.div`
    display: flex;
    width: 200%;
`
export const FormInnerForm = styled.form`
    width: 50%;
    transition: all 0.6s cubic-bezier(0.68,-0.55,0.265,1.55);
`
export const FormField = styled.div`
    height: ${(props) => props.height};
    width: 100%;
    margin-top: ${(props) => props.margintop};
`
export const FormFieldInput = styled.input`
    height: 100%;
    width: 100%;
    outline: none;
    padding-left: 15px;
    border-radius: 5px;
    border: 1px solid lightgrey;
    border-bottom-width: 2px;
    font-size: 17px;
    transition: all 0.3s ease;

    &:focus{
        border-color: #b02929;
    }

    &::placeholder{
        color: #999;
        transition: all 0.3s ease;
    }

    &:focus::placeholder{
        color: #b3b3b3;
    }
`
export const PassLink = styled.div`
    margin-top: 5px;
`
export const SignUpLink = styled.div`
    text-align: center;
    margin-top: 30px;
`
export const PassLinkA = styled.a`
    color: #b02929;
    text-decoration: none;
    
    &:hover{
        text-decoration: underline;
    }
`
export const SignUpLinkA = styled.a`
    color: #b02929;
    font-weight: bolder;
    text-decoration: none;
    cursor: pointer;

    &:hover{
        text-decoration: underline;
    }
`
export const FormButton = styled.button`
    height: 50px;
    width: 100%;
    border-radius: 5px;
    position: relative;
    overflow: hidden;
    margin-top: 20px;
`
export const ButtonLayer = styled.div`
    height: 100%;
    width: 300%;
    position: absolute;
    left: -100%;
    background: -webkit-linear-gradient(right,#455c2b, #283618);
    border-radius: 5px;
    transition: all 0.4s ease;

    &:hover{
        left: 0;
    }
`
export const FormButtonInput = styled.input`
    height: 100%;
    width: 100%;
    z-index: 1;
    position: relative;
    background: none;
    border: none;
    color: #fff;
    padding-left: 0;
    border-radius: 5px;
    font-size: 20px;
    font-weight: bolder;
    cursor: pointer;
`

// ============================================================ //
// *****************      NAVIGATION BAR      *****************
// ============================================================ //
export const Nav = styled.nav`
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
export const NavbarContainer = styled.div`
    display: flex;     
    justify-content: space-evenly;
    height: 60px;
    z-index: 1;
    width: 100%;
    padding:0 24px;
    max-width: 1100px;
`
export const NavLogo = styled(LinkRouter)`
    cursor: pointer;
    display: flex;
    position: absolute;
    left: 50px;
    top: -5px;
`
export const MobileIcon = styled.div`
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
export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`
export const NavItem = styled.li`
    height: 60px;

`
export const NavLinks = styled(LinkScroll)`
    color: #ffffff;
    display: flex;
    align-items: center;
    font-weight: bolder;
    text-decoration: none;
    padding: 0 3rem;
    height: 100%;
    cursor: pointer;

    &.active {
        border-bottom: 3px solid #4c4c4c;
    }

    &:hover {
        border-bottom: 3px solid #4c4c4c ;
    }
`
export const NavBtn = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px){
        display: none;
    }
    
`
export const NavBtnLink = styled(LinkRouter)`
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

// ============================================================ //
// *****************    NAVIGATION SIDEBAR    *****************
// ============================================================ //
export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #0d0d0d;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({isOpen}) => (isOpen ? '100%' : '0')};
    top: ${({isOpen}) => (isOpen ? '0' : '-100%')};
`
export const CloseIcon = styled(FaTimes)`
    color: #fff;
`
export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`
export const SidebarWrapper = styled.div`
    color: #fff;
`
export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6,80px);
    text-align:  center;
    
    @media screen and (max-width: 480px ) {
        grid-template-rows: repeat(6,60px);
    }
`
export const SidebarLink = styled(LinkScroll)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    color: #fff;
    cursor: pointer;

    &:hover {
        color: #01bf71;
        transition: 0.2s ease-in-out;
    }
`
export const SideBtnWrap = styled.div`
    display: flex;
    justify-content: center;
`
export const SidebarRoute = styled(LinkRouter)`
    border-radius: 50px;
    background: #01bf71;
    white-space: nowrap;
    padding: 16px 64px;
    color: #010606;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`