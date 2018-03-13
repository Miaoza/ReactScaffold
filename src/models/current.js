import { message } from 'antd';

import { queryMe } from '../services/user';

export default {
    namespace: 'current',
    state: {
        me: {}
    },
    effects: {
        *fetch(_, { put, call }){
            const res = yield call(queryMe);
            console.log(res);
            if(1==res.data.code){
                yield put({
                    type: 'saveMe',
                    me: res.data.data
                })
            }else{
                message.error(res.data.message);
            }
        }
    },
    reducers: {
        saveMe(state, { me }){
            return{
                ...state,
                me: me
            }
        }
    }
}
