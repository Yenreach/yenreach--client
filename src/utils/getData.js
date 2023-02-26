export default async function getData(service, params="") {
    const response = await service(params)
    if (response?.data?.status === "failed") {
        // console.log("failed", response.data)
        throw new Error(response?.data?.message)
    }
    console.log("res", response)
    return response?.data?.data
}