import dynamic from 'dva/dynamic';

import { userRouters } from './routers/users';

export function dynamicWrapper(app, models=[], component){
    const modelImports = models.map((model)=>(import(`../models/${model}.js`)));

    return dynamic({
        app,
        models: ()=>modelImports,
        component: component
    })
}

function getRouterData(app){
    const routerData = {
        '/': {
            component: dynamicWrapper(app, [], ()=>import('../layouts/base.layouts'))
         },
         '/login': {
             component: dynamicWrapper(app, [], ()=>import('../routes/login/login'))
         },
        '/home': {
            component: dynamicWrapper(app, [], ()=>import('../routes/home/home'))
        },
        ...userRouters(app)
    }
    return routerData;
}

export default getRouterData;
