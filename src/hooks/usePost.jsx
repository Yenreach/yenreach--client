import { useMutation } from "@tanstack/react-query";

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
            if (success) {
                success(data, variables, context)
            }
        },
        onError: (error, variables, context) => {
            console.log("error", error)
            if (error) {
                error(error, variables, context)
            }
        },
        ...rest
      })

    return Mutation
}

export default usePost