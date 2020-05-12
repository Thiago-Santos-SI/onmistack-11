import React from "react";
import './styles.css'
import {Link} from 'react-router-dom';
import {FiPower} from "react-icons/fi";
import {FiTrash2} from "react-icons/fi";


import logoImg from '../../assets/logo.svg'


export default function Profile() {
    return(
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be the Hero"/>
                <span>Bem vinda, APAD</span>

                <Link  className="button"to="/incidents/new">Cadastrar novo caso</Link>

                <button type="submit">
                    <FiPower size={18} color="e02041"/>
                </button>

            </header>

            <h1>Casos cadastrados</h1>

            <ul>
                <li>
                    <strong>CASO:</strong>
                    <p>Caso teste</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>Caso teste</p>

                    <strong>VALOR:</strong>
                    <p>Caso teste</p>

                    <button type="button">
                        <FiTrash2 size={16} color="a8a8b3"/>
                    </button>
                </li>

            </ul>
        </div>
    )

}