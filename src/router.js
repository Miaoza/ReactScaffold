import React from 'react';
import { Router, Route, Switch } from 'dva/router';

// import BaseLayouts from './layouts/base.layouts';
import getRouterData from './config/route.config';

function RouterConfig({ app, history }) {
    const routerData = getRouterData(app);
    const BaseLayouts = routerData['/'].component;

    return (
        <Router history={history}>
            <Switch>
                <Route exact path="/login" component={routerData['/login'].component} />
                {
                    // <Route exact path="/" render={
                    // props => <BaseLayouts {...props} routerData={routerData} />
                    // } />
                }
                <BaseLayouts routerData={routerData} />
            </Switch>
        </Router>
    );
}

export default RouterConfig;
