import React, { Component, Fragment } from 'react';
import EventDashboard from '../../features/events/EventDashboard/EventDashboard';
import NavBar from '../../features/nav/NavBar/NavBar';
import { Container } from 'semantic-ui-react';
import { Route } from 'react-router-dom';
import HomePage from '../../home/HomePage';
import EventDetailedPage from '../../features/events/EventDetails/EventDetailedPage';
import PeopleDashboard from '../../users/PeopleDashboard/PeopleDashboard';
import UserDetailedPage from '../../users/UserDetailed/UserDetailedPage';
import SettingsDashboard from '../../users/settings/SettingsDashboard';
import EventForm from '../../features/events/EventForms/EventForm';




class App extends Component {
  render() {
    return (
      <Fragment>
        <Route exact path='/' component={HomePage}/>
        <Route path='/(.+)' render={() => (
      <Fragment>
      <NavBar />
      <Container className="main">
        <Route path='/events' component={EventDashboard}/>
        <Route path='/events/:id' component={EventDetailedPage}/>
        <Route path='/people' component={PeopleDashboard}/>
        <Route path='/profile:id' component={UserDetailedPage}/>
        <Route path='/settings' component={SettingsDashboard}/>
        <Route path='/createEvent' component={EventForm}/>
        {/* <EventDashboard /> */}
      </Container>
      </Fragment>

        )}/>
      </Fragment>
      
    );
  }
}

export default App;
