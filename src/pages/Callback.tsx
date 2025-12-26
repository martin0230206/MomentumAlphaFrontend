import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { authService } from '../auth/authService';
import './Callback.css';

export default function Callback() {
  const navigate = useNavigate();
  
  useEffect(() => {
    let mounted = true;

    const processCallback = async () => {
      try {
        console.log('Processing callback...');
        
        // 處理 callback
        const user = await authService.handleCallback();
        console.log('Callback processed, user:', user);
        
        // 等待一下確保 userManager events 已經觸發
        await new Promise(resolve => setTimeout(resolve, 300));
        
        if (mounted) {
          console.log('Navigating to home...');
          navigate('/', { replace: true });
        }
      } catch (error) {
        console.error('Login callback error:', error);
        if (mounted) {
          navigate('/', { replace: true });
        }
      }
    };

    processCallback();

    return () => {
      mounted = false;
    };
  }, [navigate]);
  
  return (
    <div className="callback-container">
      <div className="callback-content">
        <div className="loader">
          <div className="spinner"></div>
        </div>
        <h2>正在處理登入...</h2>
        <p>請稍候，系統正在驗證您的身份</p>
      </div>
    </div>
  );
}
