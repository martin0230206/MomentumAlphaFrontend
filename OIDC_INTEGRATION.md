# Momentum Alpha Frontend - OIDC 整合

## 專案配置

此前端已與後端 OIDC 認證系統完全整合。

### 配置資訊
- **前端 URL**: `http://localhost:8848`
- **後端 API**: `https://localhost:44305`
- **Client ID**: `Frontend_App`
- **認證方式**: Authorization Code + PKCE

## 啟動專案

### 1. 安裝依賴
```bash
npm install
```

### 2. 啟動開發伺服器
```bash
npm run dev
```

應用程式會在 `http://localhost:8848` 啟動

## 使用說明

### 登入流程
1. 點擊「登入」按鈕
2. 系統會重導向到後端認證頁面 (`https://localhost:44305`)
3. 使用測試帳號登入:
   - **帳號**: `admin`
   - **密碼**: `1q2w3E*`
4. 登入成功後會自動返回前端，並顯示使用者資訊

### 登出流程
點擊「登出」按鈕即可登出並清除所有認證資訊

## 專案結構

```
src/
├── auth/
│   ├── authConfig.ts      # OIDC 客戶端配置
│   ├── authService.ts     # 認證服務方法
│   └── AuthContext.tsx    # React Context 管理認證狀態
├── api/
│   └── apiClient.ts       # API 呼叫工具（自動附加 JWT Token）
├── pages/
│   ├── Callback.tsx       # OAuth 回調頁面
│   └── SilentRenew.tsx    # 靜默更新 Token 頁面
├── App.tsx                # 主應用程式
└── main.tsx              # 應用程式入口
```

## API 呼叫範例

使用 `apiClient` 進行 API 呼叫，會自動附加 JWT Token:

```typescript
import { apiCall } from './api/apiClient';

// 範例: 呼叫後端 API
const data = await apiCall('/app/your-endpoint');

// POST 請求
const result = await apiCall('/app/your-endpoint', {
  method: 'POST',
  body: JSON.stringify({ key: 'value' })
});
```

## 認證 Hook 使用

在元件中使用 `useAuth` Hook:

```typescript
import { useAuth } from './auth/AuthContext';

function MyComponent() {
  const { user, isAuthenticated, login, logout } = useAuth();
  
  if (!isAuthenticated) {
    return <button onClick={login}>登入</button>;
  }
  
  return (
    <div>
      <p>歡迎, {user?.profile?.name}!</p>
      <button onClick={logout}>登出</button>
    </div>
  );
}
```

## 注意事項

1. **HTTPS 憑證**: 開發環境中，後端使用自簽憑證。首次訪問 `https://localhost:44305` 時，需要在瀏覽器接受憑證。

2. **CORS 設定**: 後端已配置允許 `http://localhost:8848` 的跨域請求。

3. **Token 儲存**: Access Token 存儲在 localStorage，請注意生產環境安全性。

4. **自動更新 Token**: 已啟用靜默更新機制，Token 即將過期時會自動更新。

## 已整合套件

- `oidc-client-ts`: OpenID Connect 客戶端
- `react-router-dom`: 路由管理
- `vite`: 建構工具
- `react`: UI 框架

## 相關文件

- 後端整合文件: `C:\Users\martin\Desktop\MyCode\MomentumAlpha\MomentumAlphaBackend\FRONTEND_INTEGRATION.md`
- OIDC Discovery: `https://localhost:44305/.well-known/openid-configuration`
