import { stringify } from 'qs';

import request from '../utils/request';

export function login(params){
    console.log(params)
    return request('/api/auth/login', {
        method: 'POST',
        body: params,
    });
}

export function queryMe(){
    const token = 'Basic '+btoa(localStorage.getItem('accessToken')+':');
    return request('/api/auth/me', {
        headers: {
            Authorization: token
        }
    })
}

export function queryUsers(params){
    const token = `Basic ${btoa(localStorage.getItem('accessToken')+':')}`;
    return request(`/api/users?${stringify(params)}`,{
        headers: {
            Authorization: token
        }
    })
}
