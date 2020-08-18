import React, { useState, useEffect } from "react";
import app from "./firebase";

export const AuthContext = React.createContext()

const Auth = ({children})=>{

    const [currentUser, setCurrentUser] = useState(null)

    useEffect(()=>{
        app.auth().onAuthStateChanged(setCurrentUser)
    },[])

    return(
        <AuthContext.Provider
            value={{currentUser}}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default Auth