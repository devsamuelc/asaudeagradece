import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Hero from './pages/hero';
import Main from './pages/main';
import Fitness from './pages/categories/fitness';
import Herbs from './pages/categories/herbs';
import AboutPage from './pages/about';
import Beauty from './pages/categories/beauty';

function Routes(){
    return(

            <Switch>
              <Route path="/" exact component={Hero} />
              <Route path="/main" component={Main} />
              <Route path="/fitness" component={Fitness} />
              <Route path="/herbs" component={Herbs} />
              <Route path="/about" component={AboutPage} />
              <Route path="/beauty" component={Beauty} />
            </Switch>
    )
}

export default Routes;