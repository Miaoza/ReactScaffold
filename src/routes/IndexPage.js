import React from 'react';
import { connect } from 'dva';
import { Button } from 'antd';

import Home from './home/home';
import BaseLayouts from '../layouts/base.layouts';

import styles from './IndexPage.less';

function IndexPage() {
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>Yay! Welcome to dva!</h1>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li>To get started, edit <code>src/index.js</code> and save to reload.</li>
        <li><a href="https://github.com/dvajs/dva-docs/blob/master/v1/en-us/getting-started.md">Getting Started</a></li>
      </ul>

      <Button type="primary" size="large">111111111</Button>

      <Home />
      <BaseLayouts />
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
