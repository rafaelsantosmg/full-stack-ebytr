import React from 'react';
import Provider from './Context';
import Router from './Routers';

function App() {
  return (
    <div style={ { backgroundColor: 'grey', height: '100vh' } }>
      <Provider>
        <Router />
      </Provider>
    </div>
  );
}

export default App;
