import React, { useEffect } from 'react';

function LoginMeuID({ clientId }) {

  useEffect(() => {
    window.addEventListener('load', () => {
      console.log('loaded');
      const meuID = window.meuID;
      meuID.initialize({
        appId: clientId,
        onLogin: response => {
          console.log(response)
        },
        disableAutoXhr: true,
      });
    });
  }, [clientId]);

  return (
    <>
      <head>
        <script src="https://meuid-login-staging.web.app/sdk/index.js" defer></script>
      </head>
      <body>
        <div
          id="meuid-login"
          data-size="medium"
          data-theme="regular"
          data-label="Login com MeuID"
        ></div>
      </body>
    </>
  );
}

export default LoginMeuID;