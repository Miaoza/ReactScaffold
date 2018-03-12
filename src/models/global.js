export default{
    namespace: 'global',
    state: {
        status: false
    },
    effects: {
        *test(_, { call, put }){
            yield put({
                type: 'changeStatus',
                payload: false
            })
        }
    },
    reducers: {
        changeStatus(state, { payload }){
            return {
                ...state,
                status: payload.status
            }
        }
    }
}
