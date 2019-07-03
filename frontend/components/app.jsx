import React from 'react';
import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';
import NavigationBarContainer from './navigation_bar/navigation_bar_container';
import HomePage from './landing_pages/home/home_page';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_utils';

const App = () => (
    <div>
       <Switch>
            <Route exact path="/" component={HomePage} />
            <AuthRoute path="/signup" component={SignupFormContainer} />
            <AuthRoute path="/login" component={LoginFormContainer} />
        </Switch>
    </div>
);

export default App;

//            <div class="MinimalFormFrame-evernote-logo">
//<svg width="188" height="100" viewBox="0 0 188 100" fill="none" xmlns="http://www.w3.org/2000/svg">
