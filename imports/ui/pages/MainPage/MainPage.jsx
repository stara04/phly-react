import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { withHistory, Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import { Campaigns } from '../../../api/campaigns.js';


import CampaignPage from '../../pages/CampaignPage.jsx';
import Profile from '../../pages/Profile.jsx';
import AddCampaign from '../AddCampaign.jsx';
import AddOrg from '../AddOrg.jsx'
import CampaignList from './CampaignList.jsx';

import {
    Header,
    Container,
    Menu,
    Segment,
    Button,
    Icon,
    Dropdown
} from 'semantic-ui-react'

export default class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            logout: false,
            org: ''
        };
    }

    handleLogout = () => {
        Meteor.logout( (err) => {
            if (err) {
                console.log( err.reason );
            } else {
                this.setState(() => ({
                    logout: true
                }));
            }
        });
    }

    handleChangeOrg = (e, { value }) => {
        if (value === 'neworg') this.props.history.push('/home/neworg');
        this.setState({ org: value })
    }

    handleSetOrg = (id) => this.setState({ org: id })

    render() {
        let user = this.props.currentUser;
        let username = '';

        if (user) {
            username = this.props.currentUser.username;
        }

        var organizations = this.props.organizations.map((org) => ({ text: org.name, value: org._id, key: org._id }));
        organizations.push({ text: 'Add New Org', value: 'neworg', key: 'neworg', icon: 'plus'});

        var campaigns = [];
        if (this.state.org) {
            var org = this.props.organizations.find(org => org._id === this.state.org);
            
        }

        if (this.state.logout === true) return <Redirect to="/login"/>

        return (
            <div>
                <Menu fixed='left' pointing vertical inverted color='blue'>
                    <Container style={{ paddingTop: '1em' }}>
                        <Menu.Item>
                            <Header textAlign='center' as='h1' color='orange'
                                    style={{
                                        fontSize: '2em',
                                        letterSpacing: '1.5px' }}>
                                {username}
                            </Header>
                        </Menu.Item>
                        <Menu.Item>
                            <Dropdown
                                id='dropdown'
                                fluid
                                placeholder="My Organizations"
                                options={organizations}
                                onChange={this.handleChangeOrg}
                            />
                        </Menu.Item>
                        <Menu.Item as={ Link } name='campaigns' to="/home">
                            <Icon name="handshake outline"/>
                            Campaigns
                        </Menu.Item>
                        <Menu.Item as={ Link } name='profile' to="/home/profile">
                            <Icon name="user circle outline"/>
                            Profile
                        </Menu.Item>
                        <Menu.Item position='right'>
                            <Button onClick={this.handleLogout}>Logout</Button>
                        </Menu.Item>
                    </Container>
                </Menu>
                <Segment style={{ padding: '3em', paddingLeft: '18em', backgroundColor: '#F9FFFF'}} vertical>
                    { user ?
                        <Switch>
                            <Route
                                exact path="/home"
                                render={(props) => <CampaignList {...props} campaigns={campaigns}/>}
                            />
                            <Route path="/home/profile" component={Profile}/>
                            <Route
                              path="/home/new"
                              render={(props) => <AddCampaign {...props} history={this.history} currentUser={this.props.currentUser} org={this.state.org}/>}
                            />
                            <Route
                                path="/home/neworg"
                                render={(props) => <AddOrg {...props} history={this.history} action={this.handleReset}/>}
                            />
                            <Route
                                path="/home/:id"
                                render={(props) => <CampaignPage {...props} campaigns={this.props.campaigns}/>}
                            />
                        </Switch>
                        : ''
                    }
                </Segment>
            </div>
        );
    }
}

MainPage.propTypes = {
    currentUser: PropTypes.object,
    campaigns: PropTypes.array.isRequired,
    organizations: PropTypes.array.isRequired
}
