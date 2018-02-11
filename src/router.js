/**
 * Router
 */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePageContainer from './containers/home/home.container';

export const Router = (props) => (
    <main>
        <Switch>
            <Route exact path='/' component={HomePageContainer} />
        </Switch>
    </main>
);

export default Router;
