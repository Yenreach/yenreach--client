export const paginate = ({page=1, num_per_page=40, data=[], total}) => {
    // if (page < 1 || !page) page = 1
    // const start = (page - 1) * num_per_page
    // const end = page * num_per_page
    return {
        data: data, 
        pages: Math.ceil(total / num_per_page)
    }
}



export default paginate


// export const paginate = ({page=1, num_per_page=40, data=[]}) => {
//     if (page < 1 || !page) page = 1
//     const start = (page - 1) * num_per_page
//     const end = page * num_per_page
//     return {data: data.slice(start, end), pages: Math.ceil(data.length / num_per_page)}
// }


// export const paginate = ({page=1, num_per_page=40, data=[], total}) => {
//     if (page < 1 || !page) page = 1
//     const start = (page - 1) * num_per_page
//     const end = page * num_per_page
//     return {
//         data: data.slice(start, end), 
//         pages: Math.ceil(total / num_per_page)
//     }
// }
