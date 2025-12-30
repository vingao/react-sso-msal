import ReactDOM from 'react-dom/client';
import { PublicClientApplication, EventType } from '@azure/msal-browser';
import { msalConfig } from './authConfig';

import './index.css';
import App from './App';

// Initialize MSAL instance
const msalInstance = new PublicClientApplication(msalConfig);

// Set up event callback for successful login
msalInstance.addEventCallback((event) => {
  if (event.eventType === EventType.LOGIN_SUCCESS && event.payload.account) {
    const account = event.payload.account;
    msalInstance.setActiveAccount(account);
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App instance={msalInstance} />
  </>
);
