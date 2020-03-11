import React, { Component, Fragment } from 'react';
import EventDashboard from '../../features/events/EventDashboard/EventDashboard';
import NavBar from '../../features/nav/NavBar/NavBar';
import { Container } from 'semantic-ui-react';
import { Route, Switch, withRouter } from 'react-router-dom';
import HomePage from '../../home/HomePage';
import EventDetailedPage from '../../features/events/EventDetails/EventDetailedPage';
import PeopleDashboard from '../../users/PeopleDashboard/PeopleDashboard';
import UserDetailedPage from '../../users/UserDetailed/UserDetailedPage';
import SettingsDashboard from '../../users/settings/SettingsDashboard';
import EventForm from '../../features/events/EventForms/EventForm';
import TestComponent from '../../features/TestArea/TestComonent';
import ModalManager from '../../features/modals/ModalManager';
import { UserIsAuthenticated } from '../../features/auth/authWrapper';
import NotFound from './NotFound';

class App extends Component {
  render() {
    return (
      <Fragment>
        <ModalManager />
        <Route exact path='/' component={HomePage} />
        <Route
          path='/(.+)'
          render={() => (
            <Fragment>
              <NavBar />
              <Container className='main'>
                <Switch key={this.props.location.key}>
                  <Route exact path='/events' component={EventDashboard} />
                  <Route path='/events/:id' component={EventDetailedPage} />
                  <Route
                    path='/people'
                    component={UserIsAuthenticated(PeopleDashboard)}
                  />
                  <Route
                    path='/profile/:id'
                    component={UserIsAuthenticated(UserDetailedPage)}
                  />
                  <Route
                    path='/settings'
                    component={UserIsAuthenticated(SettingsDashboard)}
                  />
                  <Route
                    path={['/createEvent', '/manage/:id']}
                    component={UserIsAuthenticated(EventForm)}
                  />
                  <Route path='/test' component={TestComponent} />
                  <Route component={NotFound} />
                </Switch>
              </Container>
            </Fragment>
          )}
        />
      </Fragment>
    );
  }
}

export default withRouter(App);
