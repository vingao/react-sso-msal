# React SSO MSAL Application

A React single sign-on (SSO) application that integrates with Azure Active Directory (Azure AD) for user authentication using the Microsoft Authentication Library (MSAL).

## Features

- **Azure AD Authentication** - Secure user authentication via Azure AD
- **User Information Display** - Shows authenticated user details in a formatted table
- **Token Management** - Automatic token handling and refresh
- **Protected Routes** - Components render only after successful authentication
- **Environment Configuration** - Secure credential management via `.env` file

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- Azure AD application registered in Azure Portal
- Azure AD client ID and authority URL

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd react-sso-msal
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Configure environment variables:

   ```bash
   cp .env-example .env
   ```

4. Update `.env` with your Azure AD credentials:
   ```
   REACT_APP_CLIENT_ID=<your_azure_ad_client_id>
   REACT_APP_AUTHORITY=https://login.microsoftonline.com/<your_azure_ad_tenant_id>
   ```

### Running the Application

**Development mode:**

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the app. The page reloads when you make changes.

**Production build:**

```bash
npm run build
```

**Testing:**

```bash
npm test
```

## Project Structure

```
src/
├── index.js           # Application entry point
├── App.js             # Main app component with MSAL provider
├── UserInfo.js        # Displays authenticated user information
├── authConfig.js      # MSAL configuration
└── index.css          # Global styles
```

## Key Dependencies

- **@azure/msal-react** - React hooks for MSAL
- **@azure/msal-browser** - Browser support for MSAL
- **react** - React framework
- **react-dom** - React DOM library

## Configuration

The app uses environment variables for sensitive configuration. See `.env-example` for required variables.

### Environment Variables

- `REACT_APP_CLIENT_ID` - Your Azure AD application's client ID
- `REACT_APP_AUTHORITY` - Azure AD authority URL (tenant endpoint)

## Authentication Flow

1. User navigates to the app
2. If not authenticated, redirected to Azure AD login
3. User enters credentials
4. Azure AD redirects back with authentication token
5. User information is displayed
6. User can log out to end the session

## Code Style

This project uses **Prettier** for automatic code formatting. Code is formatted on save.

## Learn More

- [Create React App Documentation](https://facebook.github.io/create-react-app/docs/getting-started)
- [MSAL.js Documentation](https://github.com/AzureAD/microsoft-authentication-library-for-js)
- [Azure AD Authentication](https://docs.microsoft.com/en-us/azure/active-directory/develop/)
