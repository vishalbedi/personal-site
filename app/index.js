import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Project} from "./views/Project";
import PageNotFound from "./views/NotFound";
import {About} from "./views/About";
import {Resume} from "./views/Resume";
import {Contact} from "./views/Contact";

import './styles/css/main.scss';


ReactDOM.render(
    <Router>
        <Switch>
            <Route path="/" exact component={About} />
            <Route path="/projects" component={Project}/>
            <Route path="/resume" component={Resume}/>
            <Route path="/contact" component={Contact}/>
            <Route component={PageNotFound} status={404}/>
        </Switch>
    </Router>,
    document.getElementById('root')
);
