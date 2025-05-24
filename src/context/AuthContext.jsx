import {createContext, useEffect, useState} from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {

    const [loggedIn, setLoggedIn] = useState(false);
    const [authChecked, setAuthChecked] = useState(false);

    useEffect(() => {
        const token = sessionStorage.getItem("token");
        if (token) {
            setLoggedIn(true);
        } else {
            setLoggedIn(false);
        }
        setAuthChecked(true);
    }, []);

    if (!authChecked) return null;

    return (
        <AuthContext.Provider value={{ loggedIn, setLoggedIn }}>
            {children}
        </AuthContext.Provider>
    )
}