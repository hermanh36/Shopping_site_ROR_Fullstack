import axios from 'axios'
export const signup = (user:any) => {
    return axios({
        url: '/api/users',
        method: 'post',
        data: {
            user: user
        }
    })
}

export const getUsers = () => {
    return axios({
        url: '/api/users',
        method: 'get',
        data: {
         
        }
    })
}