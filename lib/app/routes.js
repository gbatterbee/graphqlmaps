import React from 'react';
import Relay from 'react-relay';
import { makeRouteConfig, Route } from 'found/lib';
import IndexPage from './pages/index-page';
import Property from './pages/property-page';

const viewer = { viewer: () => Relay.QL`query { viewer }` };

export default makeRouteConfig(
  <Route path="/">
    <Route
      Component={IndexPage}
      queries={viewer}
    />
    <Route
      Component={Property}
      path=":propertyID"
      queries={viewer}
    />
  </Route>,
);
