import React from 'react';
import { FooterBase } from './styles';
import devflix from '../../assets/img/devflix.png';
import '../../App.css';

function Footer() {
  return (
    <FooterBase>
      <a href="/">
        <img src={devflix} alt="Logo DevFlix" />
      </a>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
