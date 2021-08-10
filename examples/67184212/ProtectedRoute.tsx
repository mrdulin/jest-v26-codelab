import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthConsumer } from './AuthContext';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <AuthConsumer>
      {({ currentUser }) => (
        <Route
          {...rest}
          render={(props) => {
            console.log('currentUser: ', currentUser);
            if (currentUser) {
              return <Component data-testid="protected-component" {...rest} {...props} />;
            } else {
              return (
                <Redirect
                  to={{
                    pathname: '/unauthorized',
                    state: {
                      from: props.location,
                    },
                  }}
                />
              );
            }
          }}
        />
      )}
    </AuthConsumer>
  );
};

export default ProtectedRoute;
