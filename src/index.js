import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter,Redirect, Route, Switch } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

//styles
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import 'font-awesome/css/font-awesome.min.css';
import './index.css';



//areas
import PageContainer from './shared/pageContainer/pageContainer';
import Home from './areas/home/home';
import AboutMe from './areas/aboutMe/aboutMe';
import Career from './areas/career/career';
import Projects from './areas/projects/projects';

ReactDOM.render(
    <PageContainer>
        <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/aboutme' component={AboutMe} />
            <Route path='/career' component={Career} />
            <Route path='/projects' component={Projects} />
            <Redirect to="/" />
        </Switch>
        </BrowserRouter>
    </PageContainer>

, document.getElementById('root'));
registerServiceWorker();
