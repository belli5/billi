// src/components/Header/Header.jsx
import React, { useState } from 'react';
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

  return (
    <Wrapper>
      <Container>
        {/* Logo */}
        <Logo src={logoImg} alt="Billi" />

        {/* Navegação desktop */}
        <Nav>
          <NavLink to="/sobre">Sobre</NavLink>
          <NavLink to="/">Para empresas</NavLink>
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
        <NavLink href="/sobre" onClick={() => setIsOpen(false)}>Sobre</NavLink>
        <NavLink href="/" onClick={() => setIsOpen(false)}>Para empresas</NavLink>
        <NavLink href="/Comercializadores" onClick={() => setIsOpen(false)}>Para comercializadores</NavLink>
        <NavLink href="#como-funciona" onClick={() => setIsOpen(false)}>Como funciona</NavLink>
        <NavLink href="#produtos" onClick={() => setIsOpen(false)}>Produtos</NavLink>
        <DesktopCTA href="#seja-parceiro" onClick={() => setIsOpen(false)}>Seja um parceiro</DesktopCTA>
      </MobileMenu>
    </Wrapper>
  );
}
