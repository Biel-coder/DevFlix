import React from 'react';
import { FooterBase } from './styles';
import devflix from '../../assets/img/devflix.png';
import '../../App.css';

function Footer() {
  const imgFooter = {
    height: "70px",
    width: "120px"
  }

  return (
    <FooterBase>
      <a href="/">
        <img style={imgFooter} src={devflix} alt="Logo DevFlix" />
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
