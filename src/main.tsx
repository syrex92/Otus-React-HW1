import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router"
import './index.css'
import App from './pages/App.tsx'
import Register from './pages/Register.tsx'
import Login from './pages/Login.tsx'
import NotFound from './pages/404.tsx'
import { Provider } from 'react-redux'
import store from './app/store.ts'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path="register" element={<Register/>} />
        <Route path="login" element={<Login/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </Provider>
  </BrowserRouter>,
)
