import React from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'
import { BrowserRouter } from 'react-router-dom'

const rootElement = document.getElementById('app') as HTMLElement
// if (!rootElement) throw new Error('Failed to find the root element')
const root = createRoot(rootElement)

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>

)
