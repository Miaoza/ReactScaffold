import React, { Component } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';

import styles from './users.less';

@connect((state)=>{
    console.log(state)
    return {
        users: state.users
    }
})
export default class Users extends Component{
    componentDidMount(){
        console.log(this.props)
        this.props.dispatch({
            type: 'users/fetchList',
            params: {
                limit: 10,
                offset: 0
            }
        });
    }
    render(){
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
