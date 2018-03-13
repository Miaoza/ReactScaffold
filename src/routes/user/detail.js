import React, { Component } from 'react';
import { connect } from 'dva';

@connect(({user, loading})=>({
    user: user,
    loading: loading.effects['user/fetch']
}))
export default class UserDetail extends Component{
    render(){
        console.log(this.props);
        return (<div>User detail info.</div>)
    }
}
