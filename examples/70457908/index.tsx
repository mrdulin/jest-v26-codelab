//@ts-nocheck
import React from 'react';
import { useEffect } from 'react';

export default function ReCaptcha() {
  function onSuccess() {
    console.log('we are sucessful');
  }
  useEffect(() => {
    window.grecaptcha = {
      enterprise: {},
    };
    window.grecaptcha.enterprise = {
      execute: function () {
        return new Promise((resolve) => {
          resolve();
        });
      },
    };
    window.grecaptcha.enterprise.execute().then(() => {
      onSuccess();
    });
  }, []);
  return <h1>ReCaptcha</h1>;
}
