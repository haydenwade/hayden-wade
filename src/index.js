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
import Resume from './areas/resume/resume';
import Projects from './areas/projects/projects';
import Voice from './areas/voice/voice';
import BriefingManager from './areas/briefingManager/briefingManager';
import Callback from './utils/auth/callback';

ReactDOM.render(
    <PageContainer>
        <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/aboutme' component={AboutMe} />
            <Route path='/resume' component={Resume} />
            <Route path='/projects' component={Projects} />
            <Route path='/briefings' component={BriefingManager} />
            <Route path='/voice' component={Voice}/>
            <Route path="/callback" component={Callback} />
            <Redirect to="/" />
        </Switch>
        </BrowserRouter>
    </PageContainer>

, document.getElementById('root'));
registerServiceWorker();
