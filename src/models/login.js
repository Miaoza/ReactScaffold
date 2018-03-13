import { message } from 'antd';
import { routerRedux } from 'dva/router';

import { login } from '../services/user';

export default{
    namespace: 'login',
    state: {
        me: {}
    },
    effects: {
        *login({ params }, { put, call }){
            const res = yield call(login, params);
            console.log(res);
            if(1==res.data.code){
                localStorage.setItem('accessToken', res.data.data.token);
                yield put(routerRedux.push('/'));
            }else{
                message.error('login error')
            }
        },
        *logout(_, { put }){
            console.log('...........')
            localStorage.removeItem('accessToken');
            yield put({
                type: 'saveMeInfo',
                me: {}
            });
            yield put(routerRedux.push('/login' ));
        }
    },
    reducers: {
        saveMeInfo(state, { me }){
            return{
                ...state,
                me: me
            }
        }
    }
}
