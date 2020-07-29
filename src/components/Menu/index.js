import React from 'react';
import { Link } from 'react-router-dom';
import devflix from '../../assets/img/devflix.png';
import './Menu.css';
import ButtonLink from '../components/ButtonLink';

function Menu(){
    return(
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={devflix} alt="Devflix"/>
            </Link>

            <ButtonLink className="ButtonLink" href="/cadastro/video">
                Novo Vídeo
            </ButtonLink>
        </nav>
    )
}

export default Menu;