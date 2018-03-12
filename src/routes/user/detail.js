import React, { Component } from 'react';
import { connect } from 'dva';

export default class UserDetail extends Component{
    render(){
        console.log(this.props);
        return (<div>User detail info.</div>)
    }
}
