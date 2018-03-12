import { dynamicWrapper } from '../route.config';

export const userRouters = (app)=>{
    const data = {
        '/user/list': {
            component: dynamicWrapper(app, [], ()=>import('../../routes/user/users'))
        },
        '/user/add': {
            component: dynamicWrapper(app, ['users'], ()=>import('../../routes/user/add'))
        },
        '/user/:user_id': {
            component: dynamicWrapper(app, ['users'], ()=>import('../../routes/user/detail'))
        }
    }
    return data;
}
