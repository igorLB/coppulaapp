import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MenuPage from './components/Menu/MenuPage/MenuPage'
import CadastroEmpresaPage from './components/CadastroEmpresa/CadastroEmpresaPage/CadastroEmpresaPage'
import CadastroClientePage from './components/CadastroCliente/CadastroClientePage/CadastroClientePage'
import CadastroImpostoPage from './components/CadastroImposto/CadastroImpostoPage/CadastroImpostoPage'
import CadastroServicoPage from './components/CadastroServico/CadastroServicoPage/CadastroServicoPage'
import Sobre from './components/Sobre/Sobre'
import GerarNFePage from './components/GerarNFe/GerarNFePage/GerarNFePage'
import Nav from './components/Nav/Nav'

import './assets/styles/custom-bootstrap.css'



function App() {
    return (
        <div>
            <BrowserRouter>
                <Nav />
                <Routes>
                    <Route path="" element={<MenuPage />} />
                    <Route path="cadastro-empresa" element={<CadastroEmpresaPage />} />
                    <Route path="cadastro-cliente" element={<CadastroClientePage />} />
                    <Route path="cadastro-impostos" element={<CadastroImpostoPage />} />
                    <Route path="cadastro-servico" element={<CadastroServicoPage />} />
                    <Route path="gerar-nfe" element={<GerarNFePage   />} />
                    <Route path="sobre" element={<Sobre />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
