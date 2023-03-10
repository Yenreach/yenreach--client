import { useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import getData from '/src/utils/getData'


const useFetch = ({ api, param, key, ...rest }) => {

    const { data, error, isLoading, isFetching, remove, refetch } = useQuery({
        queryKey: [...key],
        queryFn: () => getData(api, param),
        ...rest
    })

    // useEffect(() => {
    //     return () => {
    //       if (clear) remove()
    //     }
    // }, [clear])


    return { data, error, isLoading, isFetching, remove, refetch }
}

export default useFetch