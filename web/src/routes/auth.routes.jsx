import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import ForgotPassword from '../pages/ForgotPassword';


const AuthRoutes = () => {
    
    return (

        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={SignIn} />
                <Route path='/sign-up' component={SignUp} />
                <Route path='/forgot-password' component={ForgotPassword} />
            </Switch>
        </BrowserRouter>

    );

}

export default AuthRoutes;