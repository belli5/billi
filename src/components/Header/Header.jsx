// src/components/Header/Header.jsx
import React, { useState, useEffect } from 'react';
import { NavLink as RouterNavLink, useLocation } from 'react-router-dom';
import {
  Wrapper,
  Container,
  Logo,
  Nav,
  NavLink,
  DesktopCTA,
  MobileButton,
  MobileMenu
} from './Header.styles';

import logoImg from '../../../public/assets/imagens/Billi_logo.png';

export default function Header() {
 const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // fecha o menu sempre que a rota mudar
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <Wrapper>
      <Container>
        {/* Logo */}
        <Logo src={logoImg} alt="Billi" />

        {/* Navegação desktop */}
        <Nav>
          <NavLink to="/">Início</NavLink>
          <NavLink to="/sobre">Sobre</NavLink>
          <NavLink to="/ParaEmpresas">Para empresas</NavLink>
          <NavLink to="/comercializadores">Para comercializadores</NavLink>
          <NavLink to="/#como-funciona">Como funciona</NavLink>
          <NavLink to="/#produtos">Produtos</NavLink>
        </Nav>

        {/* CTA desktop */}
        <DesktopCTA href="#seja-parceiro">Seja um parceiro</DesktopCTA>

        {/* Botão mobile */}
        <MobileButton onClick={() => setIsOpen(!isOpen)} aria-label="Menu">
          {isOpen ? (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </MobileButton>
      </Container>

      {/* Menu mobile toggled */}
      <MobileMenu isOpen={isOpen}>
        <NavLink to="/"       onClick={() => setIsOpen(false)}>Início</NavLink>
        <NavLink to="/sobre"  onClick={() => setIsOpen(false)}>Sobre</NavLink>
        <NavLink to="/ParaEmpresas"       onClick={() => setIsOpen(false)}>Para Empresas</NavLink>
        <NavLink to="/comercializadores" onClick={() => setIsOpen(false)}>Para comercializadores</NavLink>
        <NavLink to="/#produtos"         onClick={() => setIsOpen(false)}>Produtos</NavLink>
        <DesktopCTA to="#seja-parceiro"  onClick={() => setIsOpen(false)}>Seja um parceiro</DesktopCTA>
      </MobileMenu>
    </Wrapper>
  );
}
