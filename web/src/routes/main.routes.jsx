import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import CreateBet from '../pages/CreateBet';
import Home from '../pages/Home';
import Header from '../components/Header';


const MainRoutes = () => {
    
    return (

        <BrowserRouter>
            <Header />
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/create-bet' component={CreateBet} />
            </Switch>
        </BrowserRouter>

    );

}

export default MainRoutes;