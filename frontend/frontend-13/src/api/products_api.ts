import axios from 'axios'
export const getProducts = () => {
    return axios({
        url: '/api/products',
        method: 'get',
        data: {

        }
    })
}

export const addProducts = (product:any) => {
    return axios({
        url: '/api/products',
        method: 'post',
        data: {
            product:product

        }
    })
}

export const deleteProducts = (id:number) => {
    // let deleteurl= '/api/products/'+id;
    return axios({
        url: '/api/products/'+id,
        method: 'delete',
    })
}