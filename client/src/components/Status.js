import React, { useState, useContext, useEffect} from "react";
import { AuthContext } from "./Auth";

const Status = () => {
    const [status, setStatus] = useState(false);
    const { getSession, logOut, isSignedIn } = useContext(AuthContext);
    useEffect(() => {
        getSession().then((session) => {
            console.log("Session: ", session)
            setStatus(true)
        }).catch((err) => console.log(err)); ;
    },[]);
    
    return (<div style={{fontSize: '24px'}}>{isSignedIn? <button onClick={logOut}>Log Out</button> : "Please log in."}</div>);
};

export default Status; 