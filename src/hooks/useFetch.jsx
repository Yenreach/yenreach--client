import { useQuery } from '@tanstack/react-query'
import getData from '/src/utils/getData'


const useFetch = ({ api, param, key, ...rest }) => {

    const { data, error, isLoading } = useQuery({
        queryKey: [key],
        queryFn: () => getData(api, param),
        ...rest
      })

    return { data, error, isLoading }
}

export default useFetch