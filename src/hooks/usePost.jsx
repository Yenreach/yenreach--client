import { useMutation } from "@tanstack/react-query";
import { toast } from 'react-toastify';

const usePost = ({ api, success, error, ...rest }) => {

    const Mutation = useMutation({
        mutationFn: async (data) => {
          const response =  await api(data)
          console.log("response from usePost", response)
          if (response?.data?.status === "success") {
            return response?.data?.data
          } else {
            throw new Error(response?.data?.message)
            }
        },
        onSuccess: (data, variables, context) => {
            console.log("success", data)
            toast.success("Successful !");
            if (success) {
                success(data, variables, context)
            }
        },
        onError: (error, variables, context) => {
            console.log("error", error)
            toast.error("An Error Occurred !");
            if (error) {
                error(error, variables, context)
            }
        },
        ...rest
      })

    return Mutation
}

export default usePost