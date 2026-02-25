import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import ShopContextProvider from './context/ShopContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  {/* this provides access to the shopContext which is providing the props but specifying inside that to which component as it is needed throughout the app so we use it here */}
    <ShopContextProvider>
      <App />
    </ShopContextProvider>
  </BrowserRouter>,
)
