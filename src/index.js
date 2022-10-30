import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

//styles
import 'bootstrap/dist/css/bootstrap.min.css';
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
import AiSwiper from './pages/ai-swiper/ai-swiper';
import QrContact from './pages/qr-contact/qrContact';
import SalaryNegotiationPage from './pages/services/salaryNegotiation';
import ResumeReviewPage from './pages/services/resumeReview';
import CareerCoachingPage from './pages/services/careerCoaching';
import ConsultingPage from './pages/services/consulting';

ReactDOM.render(
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/home' component={Home} />
        <Route path='/about' component={AboutMe} />
        <Route path='/resume' component={Resume} />
        <Route path='/experience' component={Resume} />
        <Route path='/briefings' component={BriefingManager} />
        <Route path='/voice' component={Voice} />
        <Route path='/services/salary-negotiation' component={SalaryNegotiationPage} />
        <Route path='/services/resume-review' component={ResumeReviewPage} />
        <Route path='/services/career-coaching' component={CareerCoachingPage} />
        <Route path='/services/consulting' component={ConsultingPage} />
        <Route path='/briefing-content-manager' component={BriefingContentManagerSales} />
        <Route path="/ai-swiper" component={AiSwiper} />
        <Route path="/aiswiper" component={AiSwiper} />
        <Route path="/qrcontact" component={QrContact} />
        <Route path="/qr-contact" component={QrContact} />
        <Route path="/introcall" component={Home}/>
        <Route path="/intro-call" component={Home}/>
        <Route path="/intro" component={Home}/>
        <Route path='/login' component={Login} />
        <Route path="/callback" component={Callback} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
