import React from 'react';
import { Grid } from 'semantic-ui-react';
import SettingsNav from './SettingsNav';
import { Route, Redirect, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import BasicPage from './BasicPage';
import PhotoPage from './PhotoPage';
import AboutPage from './AboutPage';
import AccountPage from './AccountPage';
import { updatePassword } from '../../features/auth/authActions';

const actions = {
  updatePassword
};

const mapState = state => ({
  providerId: state.firebase.auth.providerData[0].providerId
});

const SettingsDashboard = ({ updatePassword, providerId }) => {
  return (
    <Grid>
      <Grid.Column width={12}>
        <Switch>
          <Redirect exact from='/settings' to='settings/basic' />
          <Route path='/settings/basic' component={BasicPage} />
          <Route path='/settings/about' component={AboutPage} />
          <Route path='/settings/photos' component={PhotoPage} />
          <Route
            path='/settings/account'
            render={() => (
              <AccountPage
                updatePassword={updatePassword}
                providerId={providerId}
              />
            )}
          />
        </Switch>
      </Grid.Column>
      <Grid.Column width={4}>
        <SettingsNav />
      </Grid.Column>
    </Grid>
  );
};

export default connect(mapState, actions)(SettingsDashboard);
