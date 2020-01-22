import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './landingpage';
import Contact from './contact';
import Resume from './resume';

const Main = () => (
    <Switch>
        <Route exact path="/websiteportf/" component={LandingPage} />
        <Route path path="/websiteportf/contact" component={Contact} />
        <Route path path="/websiteportf/resume" component={Resume} />
    </Switch>
)

export default Main;