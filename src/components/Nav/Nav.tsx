import React from 'react'
import logo from './assets/images/pdwtech.jpg'
import { BsFillHouseFill as IconHome,
    BsFillPersonFill as IconPerson,
    BsBuilding as IconCompany,
    BsFillFileTextFill as IconFile 
    } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'
import styles from './Nav.module.css'

function Nav() {
    return (
        <ul className={`nav justify-content-around ${styles.navPersonalizado}`}>
                <li className="nav-item">
                    <NavLink className="nav-link active" aria-current="page" to="/" title="Início">
                        <IconHome size={35} />
                    </NavLink>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">
                        <IconCompany size={35} />
                    </a>
                    <ul className="dropdown-menu">
                        <li><NavLink className="dropdown-item" to="/cadastro-empresa">Cadastro Empresa</NavLink></li>
                        <li><NavLink className="dropdown-item" to="/cadastro-impostos">Cadastro Impostos</NavLink></li>
                        <li><NavLink className="dropdown-item" to="/cadastro-servico">Cadastro Serviços</NavLink></li>
                    </ul>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="cadastro-cliente" title="Cadastro Cliente">
                        <IconPerson size={35} />
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/gerar-nfe" title="Faturar">
                        <IconFile size={35} />
                    </NavLink>
                </li>
            </ul>
    )
}

export default Nav
