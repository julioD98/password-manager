import React from 'react';
import { Message, Button } from "semantic-ui-react";
import "./index.css";

export const NotFound = () => {
    const goBack = ()=>window.history.back()
  return (
    <div className="not-found-error">
      <Message className="message-not-found" negative>
        <h2>
          Error 404: page not found
        </h2>
        <Button onClick={goBack} negative>
          Go back
        </Button>
      </Message>
    </div>
  );
};
