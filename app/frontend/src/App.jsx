import React from 'react';
import Provider from './Context';
import Router from './Routers';

function App() {
  return (
    <Provider>
      <Router />
    </Provider>
  );
}

export default App;
