import React, { Component } from 'react';
import { Icon, Button, Avatar } from 'antd';

import { Api } from '../../config/api.config';

import styles from './index.less';

export default class GlobalHeader extends Component{
    logout = ()=>{
        this.props.dispatch({
            type: 'login/logout'
        })
    }

    render(){
        const { collapsed, toggleHandle, currentUser } = this.props;
        console.log(this.props);
        return (
            <div>
                <div className={styles.toggle}>
                    <Icon
                    className={styles.trigger}
                    type={collapsed ? 'menu-unfold' : 'menu-fold'}
                    onClick={toggleHandle}
                    />
                </div>

                <div className={styles.avatar}>
                    {
                        currentUser.me&&currentUser.me.avatar?(
                            <Avatar src={Api+currentUser.me.avatar} />
                        ):(
                            <Avatar icon="user" />
                        )
                    }
                </div>

                {
                    // <Icon type="setting" style={{ fontSize: 18, color: '#fecded', margin: 8 }} />
                    //
                    // <Button onClick={this.logout}>退出登录</Button>
                }

            </div>
        )
    }
}
