import React, { Fragment } from 'react';
import { Segment, Header, Button, Item, Image, Label } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
// import { openModal } from '../../modals/modalActions';

const eventImageTextStyle = {
  position: 'absolute',
  bottom: '5%',
  left: '5%',
  width: '100%',
  height: 'auto',
  color: 'white'
};
const eventImageStyle = {
  filter: 'brightness(30%)'
};

const EventDetailedHeader = ({
  loading,
  event,
  isHost,
  isGoing,
  goingToEvent,
  cancelGoingToEvent,
  authenticated,
  openModal
}) => {
  return (
    <Segment.Group>
      <Segment basic attached='top' style={{ padding: '0' }}>
        <Image
          src={`/assets/categoryImages/${event.category}.jpg`}
          fluid
          style={eventImageStyle}
        />

        <Segment basic style={eventImageTextStyle}>
          <Item.Group>
            <Item>
              <Item.Content>
                <Header
                  size='huge'
                  content={event.title}
                  style={{ color: 'white' }}
                />
                <p>
                  {event.date && format(event.date.toDate(), 'EEEE do LLLL')}
                </p>
                <p>
                  Hosted by{' '}
                  <strong>
                    <Link
                      to={`/profile/${event.hostUid}`}
                      style={{ color: 'white' }}
                    >
                      {event.hostedBy}
                    </Link>
                  </strong>
                </p>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
      </Segment>

      <Segment attached='bottom' clearing>
        {event.cancelled && (
          <Label
            size='large'
            color='red'
            content='This event has been cancelled'
          />
        )}
        {!isHost && (
          <Fragment>
            {isGoing && !event.cancelled && (
              <Button onClick={() => cancelGoingToEvent(event)}>
                Cancel My Place
              </Button>
            )}
            {!isGoing && authenticated && !event.cancelled && (
              <Button
                loading={loading}
                onClick={() => goingToEvent(event)}
                color='teal'
              >
                JOIN THIS EVENT
              </Button>
            )}

            {!authenticated && !event.cancelled && (
              <Button
                loading={loading}
                onClick={() => openModal('unAuthModal')}
                color='teal'
              >
                JOIN THIS EVENT
              </Button>
            )}
          </Fragment>
        )}

        {isHost && (
          <Button
            as={Link}
            to={`/manage/${event.id}`}
            color='orange'
            floated='right'
          >
            Manage Event
          </Button>
        )}
      </Segment>
    </Segment.Group>
  );
};

export default EventDetailedHeader;
