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
import Home from './pages/home/home';
import AboutMe from './pages/aboutMe/aboutMe';
import Resume from './pages/resume/resume';
import Voice from './pages/voice/voice';
import BriefingManager from './pages/briefingManager/briefingManager';
import Callback from './utils/auth/callback';
import Login from './utils/auth/login';
import BriefingContentManagerSales from './pages/voice/briefingContentManager';

ReactDOM.render(
        <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={AboutMe} />
            <Route path='/resume' component={Resume} />
            <Route path='/briefings' component={BriefingManager} />
            <Route path='/voice' component={Voice}/>
            <Route path='/briefing-content-manager' component={BriefingContentManagerSales}/>
            <Route path='/login' component={Login}/>
            <Route path="/callback" component={Callback} />
            <Redirect to="/" />
        </Switch>
        </BrowserRouter>
, document.getElementById('root'));
registerServiceWorker();
