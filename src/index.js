import React from 'react';
import ReactDOM from 'react-dom/client'; // `react-dom`의 새로운 API 사용
import './index.css'; // Tailwind CSS를 포함한 전역 스타일
import App from './App'; // 주 컴포넌트
import reportWebVitals from './reportWebVitals'; // 성능 측정

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// 성능 측정(선택적)
reportWebVitals(console.log);