import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './home.css'
import Nav from '../../../components/Nav/Nav'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Nav/>
  </StrictMode>,
)
