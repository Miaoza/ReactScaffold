import { queryUsers } from '../services/user';

export default {
    namespace: 'users',
    state: {
        users: [{id: 1}],
        user: {},
    },
    effects: {
        *fetchList({ params }, { call, put }){
            console.log(params);
            const res = yield call(queryUsers, params);
            console.log(res);
            yield put({
                type: 'queryUserList',
                users: [{id: 1, name: 'nianko'}]
            })
        }
    },
    reducers: {
        queryUserList(state, { users }){
            return{
                ...state,
                users: users
            }
        }
    }
}
