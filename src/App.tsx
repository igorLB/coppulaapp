import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import MenuPage from './components/Menu/MenuPage/MenuPage'
import logo from './assets/images/pdwtech.jpg'
import CadastroEmpresaPage from './components/CadastroEmpresa/CadastroEmpresaPage/CadastroEmpresaPage'
import CadastroClientePage from './components/CadastroCliente/CadastroClientePage/CadastroClientePage'
import CadastroImpostoPage from './components/CadastroImposto/CadastroImpostoPage/CadastroImpostoPage'
import CadastroServicoPage from './components/CadastroServico/CadastroServicoPage/CadastroServicoPage'
import Sobre from './components/Sobre/Sobre'


function App() {
    return (
        <div>
            <BrowserRouter>
                <nav className="navbar navbar-light bg-light">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">
                            <img src={logo} alt="" width="30" height="24" className="d-inline-block align-text-top" />
                            Bootstrap
                        </Link>
                    </div>
                </nav>
                <Routes>
                    <Route path="" element={<MenuPage />} />
                    <Route path="cadastro-empresa" element={<CadastroEmpresaPage />} />
                    <Route path="cadastro-cliente" element={<CadastroClientePage />} />
                    <Route path="cadastro-impostos" element={<CadastroImpostoPage />} />
                    <Route path="cadastro-servico" element={<CadastroServicoPage />} />
                    <Route path="sobre" element={<Sobre />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
