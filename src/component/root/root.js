// =============================================================================
// Import modules.
// =============================================================================
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';

// =============================================================================
// Import components.
// =============================================================================
import Home from 'component/view/home';

const Root = ({store}) =>
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  </Provider>;

Root.displayName = 'Root';

export default Root;
