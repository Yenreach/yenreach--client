import { useState } from "react"
import { useAuthContext } from "./useAuthContext"
import { apiLogin } from '../services/AuthService'
import { useNavigate } from "react-router-dom"


const useLogin = () => {
    // error and isloading states
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)

    const Navigate = useNavigate()
    // dispatch function to update auth context
    const { dispatch } = useAuthContext()

    const login = async (email, password) => {
        setIsLoading(true)
        setError(null)
        // console.log(email, password)
        try {
            const response = await apiLogin({ username: email, password })
            // console.log("res", response)
    
            let data = await response.data
            // console.log("data", data)

            if (response.status !== 200) {
                console.log("error")
                setError(data.error)
                setIsLoading(false)
            } else {
                data = data.data
                // console.log("success", data)
                dispatch({type: "LOGIN", payload: data})
                // sessionStorage.setItem("user", JSON.stringify(data))
                setError(null)
                setIsLoading(false)
                Navigate('/users')
            }
        } catch (error) {
            console.log("error", error)
        }       
    }
    
    return { login, error, isLoading, setError }
}

export default useLogin