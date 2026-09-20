import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'

import Home from './pages/landing/home/home'
import Docs from './pages/landing/docs/docs'
import Precos from './pages/landing/precos/precos'
import Entrar from './pages/landing/entrar/entrar'
import EscanearGratis from './pages/landing/escanear-gratis/escanear-gratis'
import GithubAction from './pages/landing/github-action/github-action'
import VisaoGeral from './pages/dashboard/visao-geral/visao-geral'
import Vulnerabilidades from './pages/dashboard/vulnerabilidades/vulnerabilidades'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/docs' element={<Docs/>}/>
        <Route path='/precos' element={<Precos/>}/>
        <Route path='/entrar' element={<Entrar/>}/>
        <Route path='/escanear-gratis' element={<EscanearGratis/>}/>
        <Route path='/github-action' element={<GithubAction/>}/>

        <Route path='/dashboard' element={<VisaoGeral/>}/>
        <Route path='/dashboard/vulnerabilidades' element={<Vulnerabilidades/>}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
