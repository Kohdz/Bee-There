import React, { Component, createRef } from 'react';
import { Grid, Loader } from 'semantic-ui-react';
import EventList from '../../EventList/EventList';
import { connect } from 'react-redux';
import { getEventsForDashboard } from '../eventAction';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import EventActivity from '../EventActivity/EventActivity';
import { firestoreConnect } from 'react-redux-firebase';

const query = [
  {
    collection: 'activity',
    orderBy: ['timestamp', 'desc'],
    limit: 5
  }
];
const mapState = state => ({
  events: state.events.events,
  loading: state.async.loading,
  activities: state.firestore.ordered.activity
});

const actions = {
  getEventsForDashboard
};

class EventDashboard extends Component {
  contextRef = createRef();

  state = {
    moreEvents: false,
    loadingInitial: true,
    loadedEvents: []
  };

  async componentDidMount() {
    let next = await this.props.getEventsForDashboard();

    if (next && next.docs && next.docs.length > 1) {
      this.setState({
        moreEvents: true,
        loadingInitial: false
      });
    }
  }

  getNextEvents = async () => {
    const { events } = this.props;
    let lastEvent = events && events[events.length - 1];
    let next = await this.props.getEventsForDashboard(lastEvent);

    if (next && next.docs && next.docs.length <= 1) {
      this.setState({
        moreEvents: false
      });
    }
  };

  componentDidUpdate = prevProps => {
    if (this.props.events !== prevProps.events) {
      this.setState({
        loadedEvents: [...this.state.loadedEvents, ...this.props.events]
      });
    }
  };

  render() {
    const { loading, activities } = this.props;
    const { moreEvents, loadedEvents } = this.state;
    if (loading) return <LoadingComponent />;
    return (
      <Grid>
        <Grid.Column width={10}>
          <div ref={this.contextRef}>
            <EventList
              loading={loading}
              events={loadedEvents}
              moreEvents={moreEvents}
              getNextEvents={this.getNextEvents}
            />
          </div>
          {/* <Button
            loading={loading}
            onClick={this.getNextEvents}
            disabled={!this.state.moreEvents}
            content='More'
            floated='right'
          /> */}
        </Grid.Column>
        <Grid.Column width={6}>
          <EventActivity activities={activities} contextRef={this.contextRef} />
        </Grid.Column>
        <Grid.Column width={10}>
          <Loader active={loading} />
        </Grid.Column>
      </Grid>
    );
  }
}

export default connect(
  mapState,
  actions
)(firestoreConnect(query)(EventDashboard));
