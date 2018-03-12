import React, { Component } from 'react';
import { connect } from 'dva';

import styles from './home.less';

@connect((state)=>{
    console.log(state);
    return {
        users: state.users
    }
})
export default class Home extends Component{
    render(){
        return (<div className={styles.home}>Welcome dva demo!</div>)
    }
}
