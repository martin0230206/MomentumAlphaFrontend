# Momentum Alpha Frontend

React + TypeScript + Vite + OIDC 認證的前端專案

## ✨ 特色功能

- 🔐 **完整 OIDC 認證** - 使用 OpenID Connect 進行安全登入
- 🎨 **現代化 UI** - 精美的漸層設計與動畫效果
- 📱 **響應式設計** - 完美支援各種裝置尺寸
- ⚡ **自動 Token 更新** - 無感知的憑證續期
- 🛡️ **安全的 API 呼叫** - 自動附加 JWT Token

## 🚀 快速開始

### 安裝依賴
```bash
npm install
```

### 啟動開發伺服器
```bash
npm run dev
```

應用程式將在 `http://localhost:8848` 啟動

### 建置生產版本
```bash
npm run build
```

## 📸 頁面展示

### 登入頁面
- 紫色漸層背景
- 動畫載入效果
- OIDC 安全登入
- 功能說明標示

### 儀表板頁面
- 使用者資訊展示
- 認證狀態顯示
- JSON 資料檢視
- 一鍵登出功能

### 處理頁面
- 美觀的載入動畫
- 自動跳轉處理

## 🔑 測試帳號

- **帳號**: `admin`
- **密碼**: `1q2w3E*`

## 🏗️ 專案結構

```
src/
├── auth/                    # 認證模組
│   ├── authConfig.ts       # OIDC 配置
│   ├── authService.ts      # 認證服務
│   └── AuthContext.tsx     # React Context
├── api/                    # API 模組
│   └── apiClient.ts        # API 客戶端
├── pages/                  # 頁面元件
│   ├── Login.tsx          # 登入頁
│   ├── Login.css
│   ├── Dashboard.tsx      # 儀表板
│   ├── Dashboard.css
│   ├── Callback.tsx       # OAuth 回調
│   ├── Callback.css
│   └── SilentRenew.tsx    # 靜默更新
├── App.tsx                 # 主應用
├── main.tsx               # 應用入口
└── index.css              # 全局樣式
```

## 🔧 技術棧

- **React 19** - UI 框架
- **TypeScript** - 型別安全
- **Vite** - 建置工具
- **React Router** - 路由管理
- **oidc-client-ts** - OIDC 客戶端

## 🔗 後端整合

此前端應用與後端 API 完全整合：

- **後端 URL**: `https://localhost:44305`
- **認證方式**: Authorization Code + PKCE
- **Client ID**: `Frontend_App`

## 📚 API 使用範例

```typescript
import { apiCall } from './api/apiClient';

// GET 請求
const data = await apiCall('/app/endpoint');

// POST 請求
const result = await apiCall('/app/endpoint', {
  method: 'POST',
  body: JSON.stringify({ data: 'value' })
});
```

## 🎯 認證 Hook

```typescript
import { useAuth } from './auth/AuthContext';

function MyComponent() {
  const { user, isAuthenticated, login, logout } = useAuth();
  
  return (
    <div>
      {isAuthenticated ? (
        <>
          <p>歡迎, {user?.profile?.name}</p>
          <button onClick={logout}>登出</button>
        </>
      ) : (
        <button onClick={login}>登入</button>
      )}
    </div>
  );
}
```

## ⚙️ 配置說明

### Vite 配置 (vite.config.ts)
- 開發伺服器 Port: `8848`
- 嚴格 Port 模式: 啟用

### OIDC 配置 (src/auth/authConfig.ts)
- Authority: `https://localhost:44305`
- Redirect URI: `http://localhost:8848/callback`
- Silent Renew URI: `http://localhost:8848/silent-renew`

## 📖 相關文件

- [完整設定說明](./SETUP_COMPLETE.md)
- [OIDC 整合文件](./OIDC_INTEGRATION.md)
- [後端整合文件](../MomentumAlphaBackend/FRONTEND_INTEGRATION.md)

## 🐛 疑難排解

### CORS 錯誤
確認後端 `appsettings.json` 中的 CORS 設定包含 `http://localhost:8848`

### SSL 憑證警告
首次訪問後端時，需要在瀏覽器中接受自簽憑證

### Token 過期
系統已啟用自動更新機制，通常不需要手動處理

## 📝 開發規範

- 使用 TypeScript 嚴格模式
- 元件使用函數式寫法
- 遵循 ESLint 規則
- CSS 使用模組化方式

## 🎨 設計系統

### 色彩
- 主色: `#667eea` → `#764ba2` (紫色漸層)
- 成功: `#22543d`
- 背景: `#f7fafc`

### 字體
系統原生字體堆疊，優化中英文顯示

---

**版本**: 1.0.0  
**授權**: MIT  
**作者**: Momentum Alpha Team
