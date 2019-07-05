import React from 'react';
import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';
import NavigationBarContainer from './navigation_bar/navigation_bar_container';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_utils';
import Notebooks from './notebooks/notebooks';

const App = () => (
    <div>
       <Switch>
            <Route exact path="/" component={NavigationBarContainer} />
            <AuthRoute path="/signup" component={SignupFormContainer} />
            <AuthRoute path="/login" component={LoginFormContainer} />
            <AuthRoute path="/login" component={LoginFormContainer} />
            <ProtectedRoute path="/notebooks" component={Notebooks} />
        </Switch>
    </div>
);

export default App;