import React from 'react'
import styled, {css, createGlobalStyle} from 'styled-components';
import 'typeface-titillium-web'


const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        box-sizing: border-box;
        font-family: 'Titillium Web', sans-serif;
    }
`;

const FullContainer = styled.div`
    position: absolute;
    padding-top: 200px;
    padding-left: 50px;
    padding-right: 300px;
    align-items: center;
    z-index:3;
`
const Wrapper = styled.div`
    overflow: hidden;
    max-width: 390px;
    background: #f6f1cb;
    padding: 30px;
    border-radius: 5px;
    /* box-shadow: 0px 15px 20px rgba(0,0,0,0.1); */
    box-shadow: 0 4px 8px 5px rgba(0, 0, 0, 0.2), 0 15px 20px 5px rgba(0, 0, 0, 0.19);
    place-items: center;
`
const TitleText = styled.div`
    display: flex;
    width: 200%;
    ${(props) => {
            if (props.$mode === "login") {return css` margin-left: 0%;`}
            else if (props.$mode === "signin") {return css` margin-left: -50%;`}

        }
    }
`
const Title = styled.div`
    width: 50%;
    font-size: 40px;
    font-weight: 700;
    text-align: center;
    transition: all 0.6s cubic-bezier(0.68,-0.55,0.265,1.55);
`
const SlideControls = styled.div`
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
        z-index: 4;
        transition: all 0.6s ease;
    }
    .signuplabel {
        ${props => props.id='signup' && css`
            color: #000;
        `}
    }
    .loginLabel {}

    .sliderTab{
        position: absolute;
        height: 100%;
        width: 50%;
        left: 0;
        z-index: 3;
        border-radius: 5px;
        background: -webkit-linear-gradient(left, #455c2b, #283618);
        transition: all 0.6s cubic-bezier(0.68,-0.55,0.265,1.55);
    }
    .signUpInput {
        display: none;

        &:checked ~ .sliderTab{
            left: 50%;
        }
        &:checked ~ .signuplabel {
            color: #fff;
            font-weight: bolder;
            cursor: default;
            user-select: none;
        }
        &:checked ~ .loginLabel {
            color: #000;
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
const FormContainer = styled.div`
    width: 100%;
    overflow: hidden;
    ${(props) => {
            if (props.$mode === "login") {return css` margin-left: 0%;`}
            else if (props.$mode === "signin") {return css` margin-left: -50%;`}

        }
    }
`
const FormInner = styled.div`
    display: flex;
    width: 200%;
`
const FormInnerForm = styled.form`
    width: 50%;
    transition: all 0.6s cubic-bezier(0.68,-0.55,0.265,1.55);
`
const FormField = styled.div`
    height: 50px;
    width: 100%;
    margin-top: 20px;
`
const FormFieldInput = styled.input`
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
const PassLink = styled.div`
    margin-top: 5px;
`
const SignUpLink = styled.div`
    text-align: center;
    margin-top: 30px;
`
const PassLinkA = styled.a`
    color: #b02929;
    text-decoration: none;
    
    &:hover{
        text-decoration: underline;
    }
`
const SignUpLinkA = styled.a`
    color: #b02929;
    font-weight: bolder;
    text-decoration: none;

    &:hover{
        text-decoration: underline;
    }
`
const FormButton = styled.button`
    height: 50px;
    width: 100%;
    border-radius: 5px;
    position: relative;
    overflow: hidden;
    margin-top: 10px;
`
const ButtonLayer = styled.div`
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
const FormButtonInput = styled.input`
    height: 100%;
    width: 100%;
    z-index: 5;
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
const LoginSignUpForm = () => {
    
    
    return (
        <FullContainer>
            <GlobalStyle />
                <Wrapper>
                    <TitleText >
                        <Title>
                            Login Form
                        </Title>
                        <Title>
                            Signup Form
                        </Title>
                    </TitleText>
                    <FormContainer>
                        <SlideControls>
                            <input type="radio" className='loginInput' name="slide" id="login" checked/>
                            <input type="radio" className='signUpInput' name="slide" id="signup"/>
                            <label for="login" className="slide loginLabel" id="login">Login</label>
                            <label for="signup" className="slide signuplabel" id="signup">Signup</label>
                            <div className="sliderTab"></div>
                        </SlideControls>
                        <FormInner>
                            <FormInnerForm action="#">
                                <FormField>
                                    <FormFieldInput type="text" placeholder="Email Address" required />
                                </FormField>
                                <FormField>
                                    <FormFieldInput type="password" placeholder="Password" required />
                                </FormField>
                                <PassLink>
                                    <PassLinkA href="google.com">Forgot password?</PassLinkA>
                                </PassLink>
                                <FormButton>
                                    <ButtonLayer></ButtonLayer>
                                    <FormButtonInput type="submit" value="Login"/>
                                </FormButton>
                                <SignUpLink>
                                    Not a member? <SignUpLinkA href="googl.com">Signup now</SignUpLinkA>
                                </SignUpLink>
                            </FormInnerForm>
                            <FormInnerForm action="#">
                                <FormField>
                                    <FormFieldInput type="text" placeholder="First Name" required/>
                                </FormField>
                                <FormField>
                                    <FormFieldInput type="text" placeholder="Last Name" required/>
                                </FormField>
                                <FormField>
                                    <FormFieldInput type="password" placeholder="Password" required/>
                                </FormField>
                                <FormField>
                                    <FormFieldInput type="password" placeholder="Confirm password" required />
                                </FormField>
                                <FormButton>
                                    <ButtonLayer></ButtonLayer>
                                    <FormButtonInput type="submit" value="Signup"/>
                                </FormButton>
                            </FormInnerForm>
                        </FormInner>
                    </FormContainer>
                </Wrapper>
        </FullContainer> 
    );

    
};

export default LoginSignUpForm;