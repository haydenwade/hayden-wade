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
import Voice from './areas/voice/voice';
import BriefingManager from './areas/briefingManager/briefingManager';
import Callback from './utils/auth/callback';
import Login from './utils/auth/login';
import BriefingContentManagerSales from './areas/voice/briefingContentManager';
// import CustomSkillsSales from './areas/voice/customSkills';

ReactDOM.render(
    <PageContainer>
        <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={AboutMe} />
            <Route path='/resume' component={Resume} />
            <Route path='/briefings' component={BriefingManager} />
            <Route path='/voice' component={Voice}/>
            <Route path='/briefing-content-manager' component={BriefingContentManagerSales}/>
            {/* <Route path='/custom-skills' component={CustomSkillsSales}/> */}
            <Route path='/login' component={Login}/>
            <Route path="/callback" component={Callback} />
            <Redirect to="/" />
        </Switch>
        </BrowserRouter>
    </PageContainer>

, document.getElementById('root'));
registerServiceWorker();
