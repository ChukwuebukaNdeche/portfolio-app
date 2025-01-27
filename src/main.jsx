import React from 'react'
import {BrowserRouter} from "react-router-dom"
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const isProduction = process.env.NODE_ENV === "production";
const basename = isProduction ? "/portfolio-app" : "/";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
