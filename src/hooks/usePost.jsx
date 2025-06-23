import { useMutation } from "@tanstack/react-query";
import { toast } from 'react-toastify';
import { useAuthContext } from "./useAuthContext";

const usePost = ({ api, success, failure, showSuccessMessage=true, showErrorMessage=true, id='', ...rest }) => {
  const { token, dispatch } = useAuthContext()

  // console.log({ token })

    const Mutation = useMutation({
        mutationFn: async (data) => {
          const response =  await api(data, { token, id })
          // console.log("response from usePost", response)
          if (response?.data?.status === "success") {
            return response?.data?.data
          } else {
            throw new Error(response?.data?.message)
            }
        },
        onSuccess: (data, variables, context) => {
            // console.log("success", data)
            if (showSuccessMessage) {
              // toast.success(data?.message);
              toast.success("Successful !");
            }
            if (success) {
                success(data, variables, context)
            }
        },
        // onError: (error, variables, context) => {
        //     // console.log("error", error)
        //     if (showErrorMessage) {
        //       toast.error(error?.message || "An Error Occurred!");
        //     } else {
        //       // toast.error("An Error Occurred!");
        //     }
        //     if (failure) {
        //         failure(error, variables, context)
        //     }
        // },
        onError: (error, variables) => {
          // console.log("error", error)
          // console.log("error2", showErrorMessage, error?.response?.data?.message)
          let message = error?.response?.data?.message || error?.response?.data?.data?.message ||  error?.response?.data?.detail
          if (typeof message === "string") {
            if (message === "Token Expired") {
              toast.info("Token Expired. Log back in to access your account")
              return dispatch({
                type: "LOGOUT",
                payload: null
              })
            }
            else if (showErrorMessage) {
              if (message === "Validation failed") {
                message = error?.response?.data?.errors?.[0]?.message || "Fields Validation failed"
                toast.error(message || "An Error Occurred!");
              } else {
                toast.error(message || "An Error Occurred!");
              } 
            }
          } else if (showErrorMessage) {
              toast.error(error?.response?.data?.message[0] || "An Error Occurred!");
          }
          if (failure) {
            failure(error, variables, context)
          }
        },
        ...rest
      })

    return Mutation
}

export default usePost