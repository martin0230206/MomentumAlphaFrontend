import React, { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { User } from 'oidc-client-ts';
import { authService } from './authService';
import { userManager } from './authConfig';

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: () => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 初始載入 user
    const initUser = async () => {
      try {
        const currentUser = await authService.getUser();
        setUser(currentUser);
      } catch (error) {
        console.error('Error loading user:', error);
        setUser(null);
      } finally {
        setIsLoading(false);
      }
    };

    initUser();

    // 監聽 user loaded 事件 (登入成功時觸發)
    const handleUserLoaded = (loadedUser: User) => {
      console.log('User loaded:', loadedUser);
      setUser(loadedUser);
      setIsLoading(false);
    };

    // 監聽 user unloaded 事件 (登出時觸發)
    const handleUserUnloaded = () => {
      console.log('User unloaded');
      setUser(null);
    };

    // 監聽 silent renew 錯誤
    const handleSilentRenewError = (error: Error) => {
      console.error('Silent renew error:', error);
    };

    userManager.events.addUserLoaded(handleUserLoaded);
    userManager.events.addUserUnloaded(handleUserUnloaded);
    userManager.events.addSilentRenewError(handleSilentRenewError);

    return () => {
      userManager.events.removeUserLoaded(handleUserLoaded);
      userManager.events.removeUserUnloaded(handleUserUnloaded);
      userManager.events.removeSilentRenewError(handleSilentRenewError);
    };
  }, []);

  const login = async () => {
    await authService.login();
  };

  const logout = async () => {
    await authService.logout();
    setUser(null);
  };

  const value = {
    user,
    isAuthenticated: !!user && !user.expired,
    isLoading,
    login,
    logout
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};
