import Test from './components/test.jsx'
import Header from './components/header.jsx'
import Footer from './components/footer.jsx'
import Card from './components/card.jsx'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <App />
    <Card />
    <Test />
    <Footer />
  </StrictMode>,
)
