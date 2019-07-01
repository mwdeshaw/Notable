import React from 'react';
import SignupFormContainer from './signup_form_container';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_utils';

const App = () => (
    <div>
       <Switch>
           <AuthRoute path='/signup' component={SignupFormContainer}/>
        </Switch>
    </div>
)

export default App;