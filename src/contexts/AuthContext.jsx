import { createContext, useEffect, useReducer } from "react";

export const AuthContext = createContext({})

const user = sessionStorage.getItem("user") 
// console.log("user", user, typeof user)

const initialState = user ? JSON.parse(user) : {
    user: null
};

export const authReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            sessionStorage.setItem("user", JSON.stringify(action.payload))
            return {
                user: action.payload
            }
        case "LOGOUT":
            return {
                user: null
            }
        default:
            return state
    }
}

export const AuthContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(authReducer, initialState)
    
    
    useEffect(() => {
        const user = JSON.parse(sessionStorage.getItem("user"))
        if (user) {
            dispatch({type: "LOGIN", payload: user})
        }
    }, [dispatch])
    
    // console.log("Auth State", state)
    return (
        <AuthContext.Provider value={{...state, dispatch}}>
            { children }
        </AuthContext.Provider>
    )
}