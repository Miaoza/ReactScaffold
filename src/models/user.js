

export default{
    namespace: 'user',
    state: {
        user: {}
    },
    effects: {
        *fetch({user_id}, { put, call }){
            // const res = yield call(url, user_id)
            yield put({
                type: 'queryUser',
                user: {id: 1, name: 'nianko'}
            })
        }
    },
    reducers: {
        queryUser(state, { user }){
            return {
                ...state,
                user: user
            }
        }
    }
}
