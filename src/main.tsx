import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'

import Home from './pages/Home/home'
import Docs from './pages/landing/docs/docs'
import Precos from './pages/landing/precos/precos'
import Entrar from './pages/landing/entrar/entrar'
import EscanearGratis from './pages/landing/escanear-gratis/escanear-gratis'
import GithubAction from './pages/landing/github-action/github-action'
import VisaoGeral from './pages/dashboard/visao-geral/visao-geral'
import Vulnerabilidades from './pages/dashboard/vulnerabilidades/vulnerabilidades'
import DetalheCve from './pages/dashboard/detalhe-cve/detalhe-cve'
import Dependencias from './pages/dashboard/dependencias/dependencias'
import Historico from './pages/dashboard/historico/historico'
import GithubActionDashboard from './pages/dashboard/github-action/github-action'
import AlertasCve from './pages/dashboard/alertas-cve/alertas-cve'
import TodosProjetos from './pages/dashboard/todos-projetos/todos-projetos'
import Time from './pages/dashboard/time/time'
import Configuracao from './pages/dashboard/configuracao/configuracao'

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
        <Route path='/dashboard/cve' element={<DetalheCve/>}/>
        <Route path='/dashboard/dependencias' element={<Dependencias/>}/>
        <Route path='/dashboard/historico' element={<Historico/>}/>
        <Route path='/dashboard/github-action' element={<GithubActionDashboard/>}/>
        <Route path='/dashboard/alertas-cve' element={<AlertasCve/>}/>
        <Route path='/dashboard/projetos' element={<TodosProjetos/>}/>
        <Route path='/dashboard/time' element={<Time/>}/>
        <Route path='/dashboard/configuracao' element={<Configuracao/>}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
