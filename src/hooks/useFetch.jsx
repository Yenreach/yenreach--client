import { useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import getData from '/src/utils/getData'
import { useAuthContext } from './useAuthContext'


const useFetch = ({ api, param={}, key, onSuccess, select, enabled=true, ...rest }) => {
    const { token } = useAuthContext()
    const { data, error, isLoading, isSuccess, isFetching, remove, refetch, fetchStatus, isPreviousData } = useQuery({
        queryKey: [...key],
        queryFn: () => getData(api, { ...param, token }),
        select: select || ((data) => data?.data),
        enabled,
        keepPreviousData: true,
        ...rest
    })

    // useEffect(() => {
    //     return () => {
    //       if (clear) remove()
    //     }
    // }, [clear])

    useEffect(() => {
        if (onSuccess && isSuccess && data) {
            // console.log("data", data, "onSuccess", onSuccess, "isSuccess", isSuccess)
            onSuccess(data)
        }
    }, [data])

    return { data, error, isLoading, isFetching, remove, refetch, fetchStatus, isPreviousData }
}

export default useFetch