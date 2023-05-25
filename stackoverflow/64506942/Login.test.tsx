import { render, screen } from "@testing-library/react";
import React from "react";
import { MemoryRouter, Route, Switch } from "react-router-dom";
import '@testing-library/jest-dom';

import { Login } from "./Login";

describe('Login', () => {
  it("redirects to /user", async () => {
    render(
      <Switch>
        <Route path="/user" exact component={() => <div>user</div>} />
        <Route path="/login" component={Login} />
      </Switch>
      , { wrapper: ({ children }) => <MemoryRouter initialEntries={['/login']}>{children}</MemoryRouter> }
    );

    expect(screen.queryByTestId("user-login")).not.toBeInTheDocument();
    expect(screen.queryByText('user')).toBeInTheDocument();

  });
})