import { useState } from "react"
import { useAuthContext } from "./useAuthContext"
import { apiRegister } from '../services/AuthService'
import { useNavigate } from "react-router-dom"


const useSignup = () => {
    // error and isloading states
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)

    const Navigate = useNavigate()
    // dispatch function to update auth context
    const { dispatch } = useAuthContext()

    const signup = async ({ name, email, password, referer }) => {
        const data = { name, email, password, referer }
        setIsLoading(true)
        setError(null)
        try {
            console.log("try", name, email, password, referer)
            const response = await apiRegister({name, email, password1: password, password2: password, referer})
            console.log("res", response)
    
            let data = await response.data
            // console.log("data", data)

            if (response.status !== 200) {
                console.log("error")
                setError(data.error)
                setIsLoading(false)
            } else {
                data = data.data
                console.log("success", data)
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
    
    return { signup, error, isLoading, setError }
}

export default useSignup