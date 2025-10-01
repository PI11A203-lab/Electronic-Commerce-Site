import React from "react";
import ReactDOM from "react-dom"; // ✅ react-dom/client 대신 react-dom
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  // ✅ ReactDOM.createRoot → ReactDOM.render
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root") // ✅ createRoot 안 쓰고 직접 element 지정
);

// 성능 측정 (선택사항)
reportWebVitals();
