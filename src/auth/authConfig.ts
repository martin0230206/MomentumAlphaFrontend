import { UserManager, WebStorageStateStore, type UserManagerSettings } from 'oidc-client-ts';

const oidcConfig: UserManagerSettings = {
  authority: 'https://localhost:44305',
  client_id: 'Frontend_App',
  redirect_uri: 'http://localhost:8848/callback',
  post_logout_redirect_uri: 'http://localhost:8848',
  response_type: 'code',
  scope: 'openid profile email MomentumAlphaBackend',
  
  // PKCE
  response_mode: 'query' as const,
  automaticSilentRenew: true,
  silent_redirect_uri: 'http://localhost:8848/silent-renew',
  
  // Token storage
  userStore: new WebStorageStateStore({ store: window.localStorage })
};

export const userManager = new UserManager(oidcConfig);
