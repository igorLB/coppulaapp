import React from 'react'
import { NavLink } from 'react-router-dom';
import Head from '../../../shared/Head/Head';
import styles from './MenuPage.module.css';


function MenuPage() {
    return (
        <>
        <Head title="Início" />
        <div className="container" >
            <div className="row">
                <div className={`${styles.h100} ${styles.debug} col-md-12 d-flex align-items-center flex-column justify-content-center`}>
                    <NavLink to="/" className="m-3"> Home </NavLink>
                    <NavLink to="/cadastro-empresa" className="m-3"> Cadastro </NavLink>
                    <NavLink to="/gerar-nfe" className="m-3">Faturar</NavLink>
                    <NavLink to="/cadastro-servico" className="m-3">Cadastrar Serviço</NavLink>
                    <a href="https://github.com/igorLB/coppulaapp" target="_blank" className="m-3"> GitHub </a>
                    <NavLink to="/sobre" className="m-3"> Sobre nós </NavLink>
                </div>
            </div>
        </div>
        </>
    )
}

export default MenuPage
