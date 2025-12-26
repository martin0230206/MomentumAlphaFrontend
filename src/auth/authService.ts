import { userManager } from './authConfig';

export const authService = {
  async login() {
    await userManager.signinRedirect();
  },
  
  async handleCallback() {
    const user = await userManager.signinRedirectCallback();
    return user;
  },
  
  async logout() {
    await userManager.signoutRedirect();
  },
  
  async getUser() {
    return await userManager.getUser();
  },
  
  async getAccessToken() {
    const user = await userManager.getUser();
    return user?.access_token;
  },

  async isAuthenticated() {
    const user = await userManager.getUser();
    return !!user && !user.expired;
  }
};
