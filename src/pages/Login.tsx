import { useAuth } from '../auth/AuthContext';
import './Login.css';

export default function Login() {
  const { login } = useAuth();

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <div className="logo-circle">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
              <path d="M24 4L40 14V34L24 44L8 34V14L24 4Z" stroke="currentColor" strokeWidth="2" fill="none"/>
              <circle cx="24" cy="24" r="8" fill="currentColor"/>
            </svg>
          </div>
          <h1>Momentum Alpha</h1>
          <p className="subtitle">專業投資管理平台</p>
        </div>

        <div className="login-content">
          <button className="login-button" onClick={login}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2Z" stroke="currentColor" strokeWidth="2"/>
              <path d="M10 6V10L13 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            使用 OIDC 登入
          </button>

          <div className="login-info">
            <div className="info-item">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm1 12H7V7h2v5zm0-6H7V4h2v2z"/>
              </svg>
              <span>安全的 OAuth 2.0 + PKCE 認證</span>
            </div>
            <div className="info-item">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 1C4.1 1 1 4.1 1 8s3.1 7 7 7 7-3.1 7-7-3.1-7-7-7zm0 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 10c-1.7 0-3.2-.9-4-2.3.5-1.3 1.7-2.2 3-2.2h2c1.3 0 2.5.9 3 2.2-.8 1.4-2.3 2.3-4 2.3z"/>
              </svg>
              <span>單一登入 (SSO) 支援</span>
            </div>
          </div>
        </div>

        <div className="login-footer">
          <p>點擊登入後將導向至授權伺服器</p>
        </div>
      </div>
    </div>
  );
}
