import React from 'react';
import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();

  console.log(error);

  return (
    <div>
      <h1>Opps!!!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.StatusText || error.message}</i>
      </p>
    </div>
  )
}

export default ErrorPage;