import { useMsal } from '@azure/msal-react';

const UserInfo = () => {
  const { instance, accounts } = useMsal();

  const account = instance.getActiveAccount() || accounts[0];

  if (!account) {
    return <div>Loading account information...</div>;
  }

  return (
    <div className="user-info">
      <h1>Azure AD SSO Successful</h1>
      <div>
        <div className="header-with-btn">
          <h2>User Information</h2>
          <button
            className="logout-btn"
            onClick={() => instance.logoutRedirect()}
          >
            Logout
          </button>
        </div>
        <table border="1" cellPadding="10">
          <tbody>
            <tr>
              <td>
                <strong>Name</strong>
              </td>
              <td>{account.name}</td>
            </tr>
            <tr>
              <td>
                <strong>Username</strong>
              </td>
              <td>{account.username}</td>
            </tr>
            <tr>
              <td>
                <strong>Home Account ID</strong>
              </td>
              <td>{account.homeAccountId}</td>
            </tr>
            <tr>
              <td>
                <strong>Local Account ID</strong>
              </td>
              <td>{account.localAccountId}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="info-card">
        <h2>ID Token Claims</h2>
        <pre>{JSON.stringify(account.idTokenClaims, null, 2)}</pre>
      </div>
      <div className="info-card">
        <h2>Full Account Object</h2>
        <pre>{JSON.stringify(account, null, 2)}</pre>
      </div>
    </div>
  );
};

export default UserInfo;
