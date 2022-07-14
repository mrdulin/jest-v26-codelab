import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

const Routing = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/home" />
      </Route>
      <Route exact path={['/home', '/']} component={() => <div>home</div>} />
      <Route path="/account-details/:account?/:id" component={() => <div>account detail</div>} />
      <Route component={() => <div>404 error</div>} />
    </Switch>
  );
};

export default Routing;
