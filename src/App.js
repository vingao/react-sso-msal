import { MsalAuthenticationTemplate, MsalProvider } from '@azure/msal-react';
import { loginRequest } from './authConfig';
import { InteractionType } from '@azure/msal-browser';
import UserInfo from './UserInfo';

function AuthenticatedApp() {
  const requestConfig = { ...loginRequest, prompt: 'select_account' };
  return (
    <MsalAuthenticationTemplate
      interactionType={InteractionType.Redirect}
      authenticationRequest={requestConfig}
      loadingComponent={() => <div className="loading">Logging in...</div>}
      errorComponent={({ error }) => (
        <div className="error">
          <h2>Authentication Error</h2>
          <pre>{JSON.stringify(error, null, 2)}</pre>
        </div>
      )}
    >
      <UserInfo />
    </MsalAuthenticationTemplate>
  );
}

export default function App({ instance }) {
  return (
    <MsalProvider instance={instance}>
      <AuthenticatedApp />
    </MsalProvider>
  );
}
