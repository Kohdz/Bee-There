import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import EventList from '../../EventList/EventList';
import { connect } from 'react-redux';
import { createEvent, deleteEvent, updateEvent } from '../eventAction';
import cuid from 'cuid';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import EventActivity from '../EventActivity/EventActivity';
import { firestoreConnect } from 'react-redux-firebase';

const mapState = state => ({
  events: state.firestore.ordered.events,
  loading: state.async.loading
});

const actions = {
  createEvent,
  deleteEvent,
  updateEvent
};

class EventDashboard extends Component {
  handleCreateEvent = newEvent => {
    newEvent.id = cuid();
    newEvent.hostPhotoURL = '/assets/users.png';
    this.props.createEvent(newEvent);
    this.setState(({ events }) => ({
      isOpen: false
    }));
  };

  handleUpdateEvent = updateEvent => {
    this.props.updateEvent(updateEvent);
    this.setState(({ events }) => ({
      isOpen: false,
      selectedEvent: null
    }));
  };

  handleDeleteEvent = id => {
    this.props.deleteEvent(id);
  };

  render() {
    const { events, loading } = this.props;

    if (loading) return <LoadingComponent />;

    return (
      <Grid>
        <Grid.Column width={10}>
          <EventList
            events={events}
            deleteEvent={this.handleDeleteEvent}
            updateEvent={this.handleUpdateEvent}
          />
        </Grid.Column>
        <Grid.Column width={6}>
          <h2>Activity Feed</h2>
          <EventActivity />
        </Grid.Column>
      </Grid>
    );
  }
}

export default connect(
  mapState,
  actions
)(firestoreConnect([{ collection: 'events' }])(EventDashboard));
