import { useState } from "react"
import { useAuthContext } from "./useAuthContext"
import { apiLogin, apiRegister } from '../services/AuthService'
import { useNavigate } from "react-router-dom"
import useTimeOutMessage from "./useTimeOutMessage"
import { toast } from "react-toastify"


const useAuth = ({from}) => {
    // error and isloading states
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const { messageState, setMessageState } = useTimeOutMessage()

    const navigate = useNavigate()
    // dispatch function to update auth context
    const { dispatch } = useAuthContext()

    const auth = async (fields, type="login") => {
        setIsLoading(true)
        setError(null)
        // console.log(fields, fields?.email, fields?.password)
        try {
            const response = type==="signup" ? await apiRegister(fields) : await apiLogin(fields)
            console.log("res", response)
    
            let data = await response.data

            if (data.status === "failed") {
                console.log("error", data.message)
                let message = data.message
                if (message === "Validation failed") {
                    setError(data?.errors?.[0]?.message || "Fields Validation failed")
                    message = data?.errors?.[0]?.message || "Fields Validation failed"
                } else {
                    setError(data.message)
                }
                type==="signup" ? toast.error(message) : toast.error("Invalid credentials")
                // type==="signup" ? setMessageState(message) : setMessageState("Invalid credentials")
                setIsLoading(false)
            } else {
                data = data.data
                // console.log("success", data, "FROM", from)
                dispatch({type: "LOGIN", payload: data })
                setError(null)
                setIsLoading(false)
                navigate(from?.pathname || '/users', {replace: true})
            }
        } catch (error) {
            console.log("error", error)
            setError(error)
            setIsLoading(false)
            let message = error?.response?.data?.message
            if (message === "Validation failed") {
                setError(error?.response?.data?.errors?.[0]?.message || "Fields Validation failed")
                message = error?.response?.data?.errors?.[0]?.message || "Fields Validation failed"
            } else {
                setError(error?.response?.data?.message)
            }
            type==="signup" ? toast.error(message) : toast.error("Invalid credentials")
            // console.log("error", error)
        }       
    }
    
    return { auth, error, isLoading, setError, messageState }
}

export default useAuth