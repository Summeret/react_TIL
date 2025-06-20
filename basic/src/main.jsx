import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';

createRoot(document.getElementById('wrap')).render(
  <StrictMode>
    <App />
  </StrictMode>, 
)

/* main.jsx 파일은 index.html에 최종 연결하는 레더링 import위주로만 연결하고, 실제 웹/앱 제작을 사용하는 파일들은 App.jsx부터 시작해서 추가 컴포넌트로 이루어진다. */