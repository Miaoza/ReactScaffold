import React, { Component } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';

import styles from './users.less';

@connect(({users, loading})=>({
    ...users
}))
export default class Users extends Component{
    render(){
        console.log(this.props);
        return (
            <div>
                Users List
                <Link to="/user/1">
                    user detail
                </Link>
            </div>
        )
    }
}
