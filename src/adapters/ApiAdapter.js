import BaseService from "./BaseAdapter";

const ApiAdapter = {
    fetchData(param) {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await BaseService(params)
                resolve(response)
            } catch (error) {
                reject(error)
            }
        })
    }
}

export default ApiAdapter;