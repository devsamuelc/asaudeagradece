import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Hero from './pages/hero';
import Main from './pages/main';

function Routes(){
    return(
        <BrowserRouter>
        <Route path="/" exact component={Hero}/>
        <Route path="/main" component={Main}/>
        </BrowserRouter>
    )
}

export default Routes;