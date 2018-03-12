import React, { Component } from 'react';
import { connect } from 'dva';
import { Layout, Button, Icon } from 'antd';
import { Route, Redirect, Switch, routerRedux, Link } from 'dva/router';

import SiderMenu from '../components/SiderMenu';
import menuData from '../config/menu.config';

import logo from '../assets/yay.jpg';

import styles from './base.layouts.less';


const { Header, Content, Sider } = Layout;
export default class BaseLayouts extends Component{
    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    render(){
        console.log(this.props)
        const { routerData } = this.props;
        return(
            <Layout className={styles.main}>
                <Sider
                trigger={null}
                collapsible
                collapsed={this.state.collapsed}
                className={styles.sider}
                >
                    <div className={styles.logo} key="logo">
                        <Link to="/">
                            <img src={logo} alt="logo" />
                            <h1>Dva Demo</h1>
                        </Link>
                    </div>

                    <SiderMenu {...this.props.location} />
                </Sider>

                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }}>
                        <Icon
                        className="trigger"
                        type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                        onClick={this.toggle}
                        style={{ fontSize: 24, color: '#08c', margin: 8 }}
                        />
                    </Header>

                    <Content style={{ margin: '24px 24px 0', height: '100%' }}>
                        <div style={{ minHeight: 'calc(100vh - 260px)' }}>
                            <Switch>
                                {
                                    Object.keys(routerData).map((key)=>{
                                        console.log(key);
                                        return '/'==key?(
                                            <Redirect key={key} exact from="/" to="/home" component={routerData['/home'].component} />
                                        ):(
                                            <Route key={key} exact path={key} component={routerData[key].component} />
                                        )
                                    })
                                }
                            </Switch>
                        </div>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}
