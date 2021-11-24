import React from 'react';
import { BrowserRouter as Router, Route, Switch, useLocation } from 'react-router-dom';

const Login = () => <div>login</div>;
const Register = () => <div>Register</div>;

export const Routes = () => {
  const location = useLocation();
  console.log('location: ', location);
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/register" component={Register} />
    </Switch>
  );
};

function App() {
  return (
    <Router>
      <Routes />
    </Router>
  );
}

export default App;
