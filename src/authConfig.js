export const msalConfig = {
  auth: {
    clientId: process.env.REACT_APP_CLIENT_ID,
    authority: process.env.REACT_APP_AUTHORITY,
    redirectUri: window.location.origin,
  },
};

export const loginRequest = {
  scopes: [],
};
