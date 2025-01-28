import React from 'react'
import {HashRouter} from "react-router-dom"
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

/*const isProduction = process.env.NODE_ENV === "production";
const basename = isProduction ? "/portfolio-app" : "/";*/

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>,
)
