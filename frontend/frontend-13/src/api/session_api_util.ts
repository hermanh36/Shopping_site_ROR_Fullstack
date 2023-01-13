import axios from 'axios';

export const login = (user:any) => {
    return axios({
        url: '/api/session',
        method: 'post',
        data: {
            user: {
                credential: user.credential,
                password: user.password
            }
        }
    })
}

export const logout = () => {
    return axios({
        url: '/api/session',
        method: 'delete'
    })
}