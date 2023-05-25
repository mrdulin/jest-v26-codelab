import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

export const Login = () => {
  const history = useHistory();

  useEffect(() => {
    console.log("In useEffect");
    history.push("/user");
  }, []);

  return <div data-testid="user-login">In progress</div>;
};