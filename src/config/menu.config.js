import { isUrl } from '../utils/utils';

const menus = [{
    name: '首页',
    icon: 'home',
    path: '/home'
}, {
    name: '用户管理',
    icon: 'user',
    path: '/user',
    children: [{
        name: '用户列表',
        path: '/list'
    }, {
        name: '新增用户',
        path: '/add',
    }]
}];

function formatterMenu(data, parentPath=''){
    return data.map((item)=>{
        let { path } = item;
        if(!isUrl(path)){
            path = parentPath+path;
        }
        return {
            ...item,
            path: path,
            children: item.children&&formatterMenu(item.children, path),
        };
    });
}

export const menuData = formatterMenu(menus);
