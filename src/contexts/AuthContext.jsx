import { createContext, useEffect, useReducer } from "react";

export const AuthContext = createContext({})

const user = localStorage.getItem("user") 
// console.log("user", user, typeof user)

const initialState = user ? JSON.parse(user) : {
    user: null,
    token: null
};

export const authReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            localStorage.setItem("user", JSON.stringify(action.payload))
            return {
                user: action.payload.user,
                token: action.payload.token
            }
        case "LOGOUT":
            localStorage.setItem("user", null)
            return {
                user: null,
                token: null
            }
        default:
            return state
    }
}

export const AuthContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(authReducer, initialState)
    
    
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"))
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