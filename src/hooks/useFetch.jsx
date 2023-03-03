import { useQuery } from '@tanstack/react-query'
import getData from '/src/utils/getData'


const useFetch = ({ api, param, key }) => {

    const { data, error, isLoading } = useQuery({
        queryKey: [key],
        queryFn: () => getData(api, param),
      })

    return { data, error, isLoading }
}

export default useFetch