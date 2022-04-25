import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {DarkModeContexProvider} from './context/darkModeContex'

ReactDOM.render(
  <React.StrictMode>
    <DarkModeContexProvider>
      <App />
    </DarkModeContexProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

