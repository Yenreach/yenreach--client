import { useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import getData from '/src/utils/getData'


const useFetch = ({ api, param, key, clear=false, ...rest }) => {

    const { data, error, isLoading, isFetching, remove } = useQuery({
        queryKey: [key],
        queryFn: () => getData(api, param),
        ...rest
    })

    useEffect(() => {
        return () => {
          if (clear) remove()
        }
    }, [clear])


    return { data, error, isLoading, isFetching }
}

export default useFetch