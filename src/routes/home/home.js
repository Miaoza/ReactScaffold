import React, { Component } from 'react';

import styles from './home.less';

export default class Home extends Component{
    render(){
        console.log(this.props);
        return (<div className={styles.home}>Welcome dva demo!</div>)
    }
}
