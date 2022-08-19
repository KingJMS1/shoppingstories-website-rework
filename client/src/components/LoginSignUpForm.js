import React from 'react'
import {useState, useContext, useRef} from 'react'
import userPool from '../UserPool';
import styled from 'styled-components';
import 'typeface-titillium-web'
import { CognitoUserAttribute} from "amazon-cognito-identity-js";
import { AuthContext } from './Auth';
import { useNavigate } from 'react-router-dom';

const FullContainer = styled.div`
    margin: 0;
    box-sizing: border-box;
    font-family: 'Titillium Web', sans-serif;
    position: absolute;
    padding-top: 100px;
    padding-left: 90px;
    align-items: center;
    z-index: 2;
`
const Wrapper = styled.div`
    margin: 0;
    box-sizing: border-box;
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
const TitleText = styled.div`
    margin: 0;
    box-sizing: border-box;
    display: flex;
    width: 200%;
    ${props => (props.$mode !== "login" ? `margin-left: 0%;` : 'margin-left: -50%;')}
    
`
const Title = styled.div`
    margin: 0;
    box-sizing: border-box;
    width: 50%;
    font-size: 40px;
    font-weight: 700;
    text-align: center;
    transition: all 0.6s cubic-bezier(0.68,-0.55,0.265,1.55);
`
const SlideControls = styled.div`
    margin: 0;
    box-sizing: border-box;
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
        color: #000;
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
const FormContainer = styled.div`
    margin: 0;
    box-sizing: border-box;
    width: 100%;
    overflow: hidden;
`
const FormInner = styled.div`
    margin: 0;
    box-sizing: border-box;
    display: flex;
    width: 200%;
`
const FormInnerForm = styled.form`
    margin: 0;
    box-sizing: border-box;
    width: 50%;
    transition: all 0.6s cubic-bezier(0.68,-0.55,0.265,1.55);
`
const FormField = styled.div`
    box-sizing: border-box;
    height: ${(props) => props.height};
    width: 100%;
    margin-top: ${(props) => props.margintop};
`
const FormFieldInput = styled.input`
    margin: 0;
    box-sizing: border-box;
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

    box-sizing: border-box;
    margin-top: 5px;
`
const SignUpLink = styled.div`
    box-sizing: border-box;
    text-align: center;
    margin-top: 30px;
`
const PassLinkA = styled.a`
    margin: 0;
    box-sizing: border-box;
    color: #b02929;
    text-decoration: none;
    
    &:hover{
        text-decoration: underline;
    }
`
const SignUpLinkA = styled.a`
    margin: 0;
    box-sizing: border-box;
    color: #b02929;
    font-weight: bolder;
    text-decoration: none;
    cursor: pointer;

    &:hover{
        text-decoration: underline;
    }
`
const FormButton = styled.button`
    box-sizing: border-box;
    height: 50px;
    width: 100%;
    border-radius: 5px;
    position: relative;
    overflow: hidden;
    margin-top: 20px;
`
const ButtonLayer = styled.div`
    margin: 0;
    box-sizing: border-box;
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
    margin: 0;
    box-sizing: border-box;
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
const LoginSignUpForm = () => {
    const [given_name, setFirstName] = useState('');
    const [family_name, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [confirmEmail, setConfirmEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const handleFirstName = (e) => { setFirstName(e.target.value) };
    const handleLastName = (e) => { setLastName(e.target.value) };
    const handleEmail = (e) => { setEmail(e.target.value) };
    const handleConfirmEmail = (e) => { setConfirmEmail(e.target.value) };
    const handlePassword = (e) => { setPassword(e.target.value) };
    const handleConfirmPassword = (e) => { setConfirmPassword(e.target.value) };
    const navigate = useNavigate();
    
    const submitSignup = (e) => {
        if (password !== confirmPassword) {console.log("password Not Match");} 
        else if (email !== confirmEmail) {console.log("password Not Match");} 

        const attributeList = [
            new CognitoUserAttribute({ Name: 'email', Value: email }),
            new CognitoUserAttribute({ Name: 'given_name', Value: given_name }),
            new CognitoUserAttribute({ Name: 'family_name', Value: family_name })
        ]

        e.preventDefault();

        userPool.signUp(email, password, attributeList, null, (err,data) =>{
            if (err) {
                console.error(err);
            }
            setFirstName("")
            setLastName("")
            setEmail("")
            setConfirmEmail("")
            setPassword("")
            setConfirmPassword("")

            console.error(data);
        });
    }

    const { authenticate } = useContext(AuthContext)

    const submitLogin = (e) => {
        e.preventDefault();

        authenticate(email, password)
            .then(data => {
                console.log("Logged in!", data)
                navigate('/')
            })
            .catch(err => {
                console.log("Failed to log in.", err)
            })

        

        // const user = new CognitoUser({
        //     Username: email,
        //     Pool: UserPool,
        // });

        // const authDetails = new AuthenticationDetails({
        //     Username: email,
        //     Password: password
        // });

        // user.authenticateUser(authDetails, {
        //     onSuccess: (data) => {
        //         console.log("onSuccess: ", data)
        //     },
        //     onFailure: (err) => {
        //         console.error("onFailure: ", err)
        //     }, 
        //     newPasswordRequired: (data) => {
        //         console.log("newPasswordRequired: ", data)
        //     }
        // });
    };

    // Changes the form bewtween Login and Sign Up
    const [page, setPage] = useState("0%");
    const [height_, setHeight] = useState(["480px", "50px", "20px"]);
    const signInRef = useRef(null)

    return (
        <FullContainer>
                <Wrapper height={height_[0]} >
                    <TitleText >
                        <Title style ={{marginLeft: page}}>
                            Login Form
                        </Title>
                        <Title>
                            Signup Form
                        </Title>
                    </TitleText>
                    <FormContainer>
                        <SlideControls>
                            <input type="radio" className='loginInput' name="slide" id="login" onClick={(e) => {setPage("0%"); setHeight(["480px","50px", "20px"])}} defaultChecked/>
                            <input type="radio" className='signUpInput' name="slide" id="signup" ref={signInRef} onClick={(e) => {setPage("-50%"); setHeight(["580px","40px","10px"])}}/>
                            <label htmlFor="login" className="slide loginLabel" id="login">Login</label>
                            <label htmlFor="signup" className="slide signuplabel" id="signup">Signup</label>
                            <div className="sliderTab"></div>
                        </SlideControls>
                        <FormInner>
                            <FormInnerForm action="#" style={{marginLeft: page}}>
                                <FormField height={height_[1]} margintop={height_[2]}>
                                    <FormFieldInput type="text" value={email} placeholder="Email Address" onChange={handleEmail} required />
                                </FormField>
                                <FormField height={height_[1]} margintop={height_[2]}>
                                    <FormFieldInput type="password" value={password} placeholder="Password" onChange={handlePassword} required />
                                </FormField>
                                <PassLink>
                                    <PassLinkA href="google.com">Forgot password?</PassLinkA>
                                </PassLink>
                                <FormButton>
                                    <ButtonLayer></ButtonLayer>
                                    <FormButtonInput type="submit" value="Login" onClick={submitLogin}/>
                                </FormButton>
                                <SignUpLink>
                                    Not a member? <SignUpLinkA onClick={(e) => signInRef.current.click()}>Signup Now</SignUpLinkA>
                                </SignUpLink>
                            </FormInnerForm>
                            <FormInnerForm action="#">
                                <FormField height={height_[1]} margintop={height_[2]}>
                                    <FormFieldInput type="text" value={given_name} placeholder="First Name" onChange={handleFirstName} required/>
                                </FormField>
                                <FormField height={height_[1]} margintop={height_[2]}>
                                    <FormFieldInput type="text" value={family_name} placeholder="Last Name" onChange={handleLastName} required/>
                                </FormField>
                                <FormField height={height_[1]} margintop={height_[2]}>
                                    <FormFieldInput type="text" value={email} placeholder="Email Address" onChange={handleEmail} required/>
                                </FormField>
                                <FormField height={height_[1]} margintop={height_[2]}>
                                    <FormFieldInput type="text" value={confirmEmail} placeholder="Confirm Email Address" onChange={handleConfirmEmail} required/>
                                </FormField>
                                <FormField height={height_[1]} margintop={height_[2]}>
                                    <FormFieldInput type="password" value={password} placeholder="Password" onChange={handlePassword} required/>
                                </FormField>
                                <FormField height={height_[1]} margintop={height_[2]}>
                                    <FormFieldInput type="password" value={confirmPassword} placeholder="Confirm password" onChange={handleConfirmPassword} required/>
                                </FormField>
                                <FormButton>
                                    <ButtonLayer></ButtonLayer>
                                    <FormButtonInput type="submit" value="Signup" onClick={submitSignup}/>
                                </FormButton>
                            </FormInnerForm>
                        </FormInner>
                    </FormContainer>
                </Wrapper>
        </FullContainer> 
    );
};

export default LoginSignUpForm;

