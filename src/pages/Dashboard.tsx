import { useAuth } from '../auth/AuthContext';
import './Dashboard.css';

export default function Dashboard() {
  const { user, logout } = useAuth();

  const userProfile = user?.profile;

  return (
    <div className="dashboard-container">
      <nav className="navbar">
        <div className="nav-content">
          <div className="nav-brand">
            <div className="nav-logo">
              <svg width="32" height="32" viewBox="0 0 48 48" fill="none">
                <path d="M24 4L40 14V34L24 44L8 34V14L24 4Z" stroke="currentColor" strokeWidth="2" fill="none"/>
                <circle cx="24" cy="24" r="8" fill="currentColor"/>
              </svg>
            </div>
            <span className="nav-title">Momentum Alpha</span>
          </div>
          <button className="logout-button" onClick={logout}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M13 3H16C16.5304 3 17.0391 3.21071 17.4142 3.58579C17.7893 3.96086 18 4.46957 18 5V15C18 15.5304 17.7893 16.0391 17.4142 16.4142C17.0391 16.7893 16.5304 17 16 17H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <path d="M8 13L13 10L8 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M13 10H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            登出
          </button>
        </div>
      </nav>

      <main className="dashboard-main">
        <div className="welcome-section">
          <div className="welcome-card">
            <div className="user-avatar">
              {(userProfile?.name || userProfile?.email || 'U').charAt(0).toUpperCase()}
            </div>
            <h1>歡迎回來, {userProfile?.name || userProfile?.email || '使用者'}! 👋</h1>
            <p className="welcome-subtitle">您已成功通過 OIDC 認證登入系統</p>
          </div>
        </div>

        <div className="dashboard-grid">
          <div className="info-card">
            <div className="card-header">
              <div className="card-icon" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h3>使用者資訊</h3>
            </div>
            <div className="card-content">
              <div className="info-row">
                <span className="info-label">名稱</span>
                <span className="info-value">{userProfile?.name || '-'}</span>
              </div>
              <div className="info-row">
                <span className="info-label">Email</span>
                <span className="info-value">{userProfile?.email || '-'}</span>
              </div>
              <div className="info-row">
                <span className="info-label">使用者名稱</span>
                <span className="info-value">{userProfile?.preferred_username || '-'}</span>
              </div>
              <div className="info-row">
                <span className="info-label">Subject ID</span>
                <span className="info-value code">{userProfile?.sub || '-'}</span>
              </div>
            </div>
          </div>

          <div className="info-card">
            <div className="card-header">
              <div className="card-icon" style={{ background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <path d="M9 11L11 13L15 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>認證資訊</h3>
            </div>
            <div className="card-content">
              <div className="info-row">
                <span className="info-label">認證方式</span>
                <span className="info-value">
                  <span className="badge badge-success">OIDC</span>
                </span>
              </div>
              <div className="info-row">
                <span className="info-label">Token 類型</span>
                <span className="info-value">{user?.token_type || 'Bearer'}</span>
              </div>
              <div className="info-row">
                <span className="info-label">認證伺服器</span>
                <span className="info-value code">https://localhost:44305</span>
              </div>
              <div className="info-row">
                <span className="info-label">Client ID</span>
                <span className="info-value code">Frontend_App</span>
              </div>
            </div>
          </div>

          <div className="info-card full-width">
            <div className="card-header">
              <div className="card-icon" style={{ background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>使用者完整資料</h3>
            </div>
            <div className="card-content">
              <pre className="json-display">{JSON.stringify(userProfile, null, 2)}</pre>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
