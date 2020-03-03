import React from 'react'
import { Segment, Grid, Icon, Button } from 'semantic-ui-react';


const event = {
    id: '1',
    title: 'Trip to Tower of London',
    date: '2018-03-27',
    category: 'culture',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
    city: 'London, UK',
    venue: "Tower of London, St Katharine's & Wapping, London",
    hostedBy: 'Bob',
    hostPhotoURL: 'https://randomuser.me/api/portraits/women/20.jpg',
    attendees: [
      {
        id: 'a',
        name: 'Bob',
        photoURL: 'https://randomuser.me/api/portraits/women/20.jpg'
      },
      {
        id: 'b',
        name: 'Tom',
        photoURL: 'https://randomuser.me/api/portraits/women/22.jpg'
      }
    ]
  }



const EventDetailedInfo = () => {
    return (

        <Segment.Group>
            <Segment attached="top">
                <Grid>
                    <Grid.Column width={1}>
                        <Icon size="large" color="teal" name="info" />
                        </Grid.Column>
                    <Grid.Column width={15}>
                        <p>{event.description}</p>
                    </Grid.Column>
                </Grid>
              </Segment>
              <Segment attached>
                <Grid verticalAlign="middle">
                  <Grid.Column width={1}>
                    <Icon name="calendar" size="large" color="teal" />
                  </Grid.Column>Event Title
                  <Grid.Column width={15}>
                    <span>{event.date}</span>
                  </Grid.Column>
                </Grid>
              </Segment>
              <Segment attached>
                <Grid verticalAlign="middle">
                  <Grid.Column width={1}>
                    <Icon name="marker" size="large" color="teal" />
                  </Grid.Column>
                  <Grid.Column width={11}>
                    <span>event.venue</span>
                  </Grid.Column>
                  <Grid.Column width={4}>
                    <Button color="teal" size="tiny" content="Show Map" />
                  </Grid.Column>
                </Grid>
              </Segment>
            </Segment.Group>


    )
}

export default EventDetailedInfo;