import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import AppContainer from '../ui/containers/AppContainer.jsx';
import MainContainer from '../ui/containers/MainContainer.jsx';

import RegisterPage from '../ui/external/RegisterPage.jsx';
import LoginPage from '../ui/external/LoginPage.jsx';
import Landing from '../ui/external/Landing.jsx';
import AddCampaign from '../ui/pages/AddCampaign.jsx';
import CampaignPage from '../ui/pages/CampaignPage.jsx';
import PublicCampaignPage from '../ui/external/PublicCampaignPage.jsx';
import Policies from '../ui/external/Policies.jsx';

export const renderRoutes = () => (
    <Router>
        <div>
            <Route exact path="/" component={Landing}/>
            <Route path="/login" component={LoginPage}/>
            <Route path="/register" component={RegisterPage}/>
            <Route path="/home" component={AppContainer}/>
            <Route path="/public/:id" component={PublicCampaignPage}/>
            <Route path="/policies" component={Policies}/>
        </div>
    </Router>
);
