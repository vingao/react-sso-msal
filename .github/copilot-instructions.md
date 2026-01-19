# Copilot Instructions for react-sso-msal

## Repository Overview

This is a **React single sign-on (SSO) application** that integrates with Azure Active Directory (Azure AD) for user authentication using Microsoft Authentication Library (MSAL). The application is a small, focused project built with Create React App, featuring Azure AD authentication, user information display, token management, and protected routes.

**Repository Size:** Small (~11 source files excluding dependencies)  
**Type:** React web application  
**Primary Language:** JavaScript (React 19.2.3)  
**Framework:** Create React App (react-scripts 5.0.1)  
**Key Dependencies:** @azure/msal-react, @azure/msal-browser  
**Runtime:** Node.js v20.19.6, npm v10.8.2

## Build and Validation Commands

### Critical: Always run commands in this exact order

**ALWAYS run `npm install` before any build, test, or lint command.** The project will not build without dependencies installed.

#### 1. Install Dependencies (Required First Step)
```bash
npm install
```
- **Duration:** ~15-20 seconds
- **Required before:** All other commands
- **Notes:** Expect deprecation warnings (safe to ignore). Will show 10 vulnerabilities (3 moderate, 7 high) in react-scripts dependencies - these are known issues in Create React App 5.0.1 and cannot be fixed without breaking changes.

#### 2. Build the Application
```bash
npm run build
```
- **Duration:** ~10-15 seconds
- **Output:** Creates optimized production build in `build/` directory
- **Expected output:** "Compiled successfully" with file sizes
- **Must run:** After `npm install`
- **Clean build:** To test from scratch, run `rm -rf build && npm run build`

#### 3. Run Tests
```bash
npm test
# Or in CI mode:
CI=true npm test -- --passWithNoTests
```
- **Duration:** ~5 seconds
- **Current state:** No test files exist, exits with code 0 and "No tests found"
- **Test framework:** Jest (via react-scripts)
- **Must run:** After `npm install`

#### 4. Lint Code
```bash
npx eslint src/
```
- **Duration:** ~3-5 seconds
- **Config:** ESLint configuration is in package.json (extends "react-app" and "react-app/jest")
- **Current state:** All source files pass linting
- **Must run:** After `npm install`

#### 5. Start Development Server
```bash
npm start
```
- **Runs at:** http://localhost:3000
- **Hot reload:** Enabled (page reloads on file changes)
- **Note:** Requires Azure AD credentials in `.env` file to function properly
- **Must run:** After `npm install`

### Environment Setup

The application **requires** a `.env` file with Azure AD credentials. Without it, the app will fail at runtime (not build time).

**Setup steps:**
```bash
cp .env-example .env
# Then edit .env with actual values:
# REACT_APP_CLIENT_ID=<your_azure_ad_client_id>
# REACT_APP_AUTHORITY=https://login.microsoftonline.com/<your_azure_ad_tenant_id>
```

**Important:** The `.env` file is gitignored and must be created manually. The application will build successfully without it, but will fail at runtime when accessing Azure AD configuration.

## Project Structure and Architecture

### Source Files (src/)
```
src/
├── index.js           # Application entry point - initializes MSAL instance
├── App.js             # Main component with MsalProvider and authentication template
├── UserInfo.js        # Displays authenticated user info in table format
├── authConfig.js      # MSAL configuration (reads from .env)
└── index.css          # Global styles
```

### Public Assets (public/)
```
public/
└── index.html         # HTML template with root div
```

### Configuration Files (root)
```
package.json           # Dependencies, scripts, ESLint config, browserslist
package-lock.json      # Locked dependency versions
.gitignore            # Excludes .env, node_modules, build, coverage
.env-example          # Template for required environment variables
README.md             # User documentation
```

### Key Architecture Details

- **MSAL Integration:** The app uses `PublicClientApplication` from @azure/msal-browser, initialized in `index.js` with config from `authConfig.js`
- **Authentication Flow:** Uses redirect-based authentication (`InteractionType.Redirect`) via `MsalAuthenticationTemplate`
- **Protected Components:** `UserInfo.js` only renders after successful authentication
- **Event Handling:** Login success events set the active account in the MSAL instance
- **Styling:** Uses inline CSS-in-JS for some components, global styles in `index.css`

### Configuration Locations

- **ESLint:** Configured in `package.json` under `eslintConfig` key
- **Browserslist:** Configured in `package.json` under `browserslist` key
- **Prettier:** Mentioned in README but no configuration file present (uses defaults)
- **MSAL:** Configured in `src/authConfig.js`
- **Environment variables:** `.env` file (not committed, use `.env-example` as template)

## Validation and CI/CD

### Pre-commit Checks

There are **no automated pre-commit hooks** or GitHub Actions workflows currently configured. Manual validation recommended:

1. Run `npx eslint src/` to check for linting errors
2. Run `npm run build` to ensure production build succeeds
3. Run `CI=true npm test -- --passWithNoTests` for test validation

### Manual Validation Steps

After making code changes:
1. **MUST:** Run `npm install` if you modified `package.json`
2. **SHOULD:** Run `npx eslint src/` to check linting
3. **SHOULD:** Run `npm run build` to verify production build
4. **OPTIONAL:** Run `npm start` to manually test in browser (requires valid `.env`)

### Known Issues and Workarounds

**Issue:** 10 security vulnerabilities reported by `npm audit`  
**Workaround:** These are in react-scripts dependencies. Running `npm audit fix --force` would break the project (installs react-scripts@0.0.0). Do NOT attempt to fix these vulnerabilities.

**Issue:** Building without `node_modules` fails with "react-scripts: not found"  
**Workaround:** Always run `npm install` before any build command.

**Issue:** Application builds successfully but fails at runtime without `.env`  
**Workaround:** Ensure `.env` file exists with valid Azure AD credentials before running `npm start`. The build process does not validate environment variable presence.

## Development Workflow Best Practices

1. **Always run `npm install` first** when working on a fresh clone or after pulling changes
2. **Use Create React App defaults** - this project follows CRA conventions
3. **ESLint is configured** - run `npx eslint src/` before committing
4. **No test suite yet** - if adding tests, use Jest and React Testing Library (already installed)
5. **Code formatting** - README mentions Prettier but no config file exists (uses defaults)
6. **Environment variables** - must use `REACT_APP_` prefix (CRA requirement)
7. **Import paths** - use relative imports (no path aliases configured)

## Quick Reference: Complete File List

**Root level files:**
- `.env-example` - Environment variable template
- `.gitignore` - Git ignore rules
- `README.md` - User documentation
- `package.json` - Project configuration
- `package-lock.json` - Dependency lock file

**Source files (5 files):**
- `src/index.js` - Entry point
- `src/App.js` - Main component
- `src/UserInfo.js` - User info display
- `src/authConfig.js` - MSAL config
- `src/index.css` - Global styles

**Public files (1 file):**
- `public/index.html` - HTML template

## Important: Trust These Instructions

**These instructions have been validated by running all commands successfully.** Only perform additional searches if:
- Information here is incomplete for your specific task
- You encounter errors not documented in "Known Issues"
- You need to understand implementation details beyond architecture overview

**Do not waste time re-discovering build commands or project structure** - the information above is accurate and complete for standard development workflows.
