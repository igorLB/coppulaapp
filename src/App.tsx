import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MenuPage from './components/Menu/MenuPage/MenuPage'
import logo from './assets/images/pdwtech.jpg'


function App() {
    return (
        <div>
            <BrowserRouter>
                <nav className="navbar navbar-light bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">
                            <img src={logo} alt="" width="30" height="24" className="d-inline-block align-text-top" />
                            Bootstrap
                        </a>
                    </div>
                </nav>
                <Routes>
                    <Route path="" element={<MenuPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
