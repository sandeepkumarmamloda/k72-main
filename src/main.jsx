import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App.jsx'
import Stairs from './components/common/Stairs.jsx'
import NavContext from './context/NavContext.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <Stairs>
        <NavContext>
          <App />
        </NavContext>
      </Stairs>
    </HashRouter>
  </React.StrictMode>,
)
