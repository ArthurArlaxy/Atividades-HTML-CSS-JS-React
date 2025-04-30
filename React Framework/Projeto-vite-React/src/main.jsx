import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { App, Ha } from './App.jsx'

createRoot(document.getElementById('app')).render(
  <StrictMode>
    <App/>
    <Ha/>
  </StrictMode>,
)
