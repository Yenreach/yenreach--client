import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';

const useCreateQueryString = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const createQueryString = 
      (values) => {
        const params = new URLSearchParams(searchParams.toString());
        setSearchParams(values)
        Object.keys(values).forEach((value) => params.set(value, values[value]));
        return searchParams.toString()
      }
    

  return { createQueryString }
}

export default useCreateQueryString