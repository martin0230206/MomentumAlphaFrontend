import { useEffect } from 'react';
import { userManager } from '../auth/authConfig';

export default function SilentRenew() {
  useEffect(() => {
    userManager.signinSilentCallback().catch(error => {
      console.error('Silent renew error:', error);
    });
  }, []);
  
  return null;
}
