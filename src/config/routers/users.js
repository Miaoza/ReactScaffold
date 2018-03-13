import { dynamicWrapper } from '../route.config';

export const userRouters = (app)=>{
    const data = {
        '/user/list': {
            component: dynamicWrapper(app, ['users'], ()=>import('../../routes/user/users'))
        },
        '/user/add': {
            component: dynamicWrapper(app, ['users'], ()=>import('../../routes/user/add'))
        },
        '/user/:user_id': {
            component: dynamicWrapper(app, ['user'], ()=>import('../../routes/user/detail'))
        },
        '/login': {
            component: dynamicWrapper(app, ['login'], ()=>import('../../routes/login/login'))
        },
    }
    return data;
}
