import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Hero from './pages/hero';
import Main from './pages/main';
import Fitness from './pages/fitness';
import Nutrition from './pages/nutrition';
import Herbs from './pages/herbs';
import ContactPage from './pages/contact';
import AboutPage from './pages/about';

function Routes(){
    return(
        <BrowserRouter>
        <Route path="/" exact component={Hero}/>
        <Route path="/main" component={Main}/>
        <Route path="/fitness" component={Fitness}/>
        <Route path="/herbs" component={Herbs}/>
        <Route path="/nutrition" component={Nutrition}/>
        <Route path="/contact" component={ContactPage}/>
        <Route path="/about" component={AboutPage}/>
        </BrowserRouter>
    )
}

export default Routes;