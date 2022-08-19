import React, { createContext, useContext, useState, useEffect } from "react";
import { CognitoUser, AuthenticationDetails} from "amazon-cognito-identity-js";
import Pool from '../UserPool';

const AuthContext = createContext();

const AuthProvider = (props) => {
    const [isSignedIn, setIsSignedIn] = useState(false);

    const getSession = async () => {
        return await new Promise((resolve, reject) => {
            const user = Pool.getCurrentUser();
            if (user){
                user.getSession((err, session) => {
                    if (err){
                        reject();
                    } else{
                        resolve(session)
                    }
                });
            } else{
                reject();
            }
        });
    };
    
    useEffect(() => {
        getSession().then((session) => {
            console.log("Session: ", session)
            // setIsSignedIn(true)
        }).catch((err) => console.log(err)); ;
    },[]);

    // Login function
    const authenticate = async (Username, Password) => {
        return await new Promise((resolve, reject) => {
            const user = new CognitoUser({Username, Pool});
            const authDetails = new AuthenticationDetails({Username, Password}); 

            user.authenticateUser(authDetails, {
                onSuccess: (data) => {
                    setIsSignedIn(true)
                    console.log("onSuccess: ", data);
                    resolve(data);
                },
                onFailure: (err) => {
                    console.error("onFailure: ", err);
                    reject(err);
                }, 
                newPasswordRequired: (data) => {
                    console.log("newPasswordRequired: ", data);
                    resolve(data);
                }
            });
        });
    };

    const logOut = () => {
        const user = Pool.getCurrentUser()
        if (user){
            user.signOut()
            setIsSignedIn(false)
        }
    }


    return(
        <AuthContext.Provider value={{authenticate, getSession, logOut, isSignedIn}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export {AuthProvider, AuthContext};

