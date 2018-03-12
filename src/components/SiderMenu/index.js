import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'dva/router';

import { menuData } from  '../../config/menu.config';

import styles from './index.less';

const SubMenu = Menu.SubMenu;

function getMenuOrSubMenu(menu) {
    return menu.map((item)=>(
        item.children?(
            <SubMenu
            key={item.path}
            title={
                <span>
                    { item.icon&&(<Icon type={item.icon} />) }
                    <span>{ item.name }</span>
                </span>
            }
            >
                { getMenuOrSubMenu(item.children) }
            </SubMenu>
        ):(
            <Menu.Item key={item.path}>
                <Link to={item.path}>
                    { item.icon&&(<Icon type={item.icon} />) }
                    <span>{item.name}</span>
                </Link>
            </Menu.Item>
        )
    ))
}

export default class SiderMenu extends Component{

    render(){
        const {pathname} = this.props;
        let selectedKeys = [pathname];

        return(
            <Menu
            mode="inline"
            theme="dark"
            selectedKeys = {selectedKeys}>
                { getMenuOrSubMenu(menuData) }
            </Menu>
        )
    }
}
