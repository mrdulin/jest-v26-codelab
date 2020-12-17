import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { LoginLink } from './LoginLink';

type LoginUrl = any;

export function Login() {
  const browserUrl = window.location.href;
  const [LoginUrl, setLoginUrl] = useState<string>('');
  useEffect(() => {
    const response = axios.post<LoginUrl>('https://somedomain/getLoginUrl', {
      data: browserUrl,
    });
    response.then((res: LoginUrl) => {
      setLoginUrl(res.LoginUrl);
    });
  }, []);

  return (
    <>
      <LoginLink data-testid="getUrl" href={LoginUrl} style={{ cursor: 'pointer' }}>
        LogIN
      </LoginLink>
    </>
  );
}
