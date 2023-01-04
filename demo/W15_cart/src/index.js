import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App_xx from './App_xx';

import { AppProvider_69 } from './Context_69';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppProvider_69>
      <App_xx />
    </AppProvider_69>
  </React.StrictMode>
);
