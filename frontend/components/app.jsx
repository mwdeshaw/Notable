import React from 'react';
import SignupFormContainer from './session/signup_form_container';
import NavigationBarContainer from './navigation_bar/navigation_bar_container';
import HomePage from './home/home_page';
// import Dash from './notes/dash';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_utils';

const App = () => (
    <div>
       <Switch>
           <Route exact path="/" component={NavigationBarContainer} />
            <Route exact path="/" component={HomePage} />
            <AuthRoute path="/signup" component={SignupFormContainer} />
        </Switch>
    </div>
);

export default App;