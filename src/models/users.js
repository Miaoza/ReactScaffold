
export default {
    namespace: 'users',
    state: {
        users: [],
        user: {},
    },
    effects: {
        *fetchList({ params }, { call, put }){
            //yield call(url, params)
            yield put({
                type: 'queryUserList',
                users: [{id: 1, name: 'nianko'}]
            })
        },
        *fetch({ userId }, { call, put }){
            console.log('get user detail')
        }
    },
    reducers: {
        queryUserList(state, { users }){
            return{
                ...state,
                users: users
            }
        },
        queryUser(state, { user }){
            return {
                ...state,
                user: user
            }
        }
    }
}
