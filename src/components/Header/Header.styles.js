// src/components/Header/Header.styles.js
import styled from 'styled-components';

export const Wrapper = styled.header`
  position: fixed;   /* ou: fixed */
  top: 0;
  left: 0;           /* só para fixed, mas não faz mal no sticky */
  width: 100%;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  z-index: 100;
`;

export const Container = styled.div`
  max-width: 100%;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.img`
  height: 38px;         
  width: auto;
  cursor: pointer;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 2rem;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled.a`
  
  font-size: 1rem;
  color: #000000;
  text-decoration: none;
  &:hover { color: #B38F00; }
`;

export const DesktopCTA = styled.a`
  
  font-size: 1rem;
  font-weight: 500;
  padding: 0.5rem 1rem;
  background-color: #000000;
  color: #fff;
  border-radius: 9999px;
  text-decoration: none;
  transition: background-color 0.2s;
  @media (max-width: 768px) {
    display: none;
  }
  &:hover { background-color: #374151; }
`;

export const MobileButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  @media (max-width: 768px) {
    display: inline-flex;
  }
  svg { width: 1.5rem; height: 1.5rem; color: #1f2937; }
`;

export const MobileMenu = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    width: 100%;
    background: #fff;
    position: absolute;
    top: 100%;
    left: 0;
    padding: 1rem 2rem;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    gap: 1.5rem;
  }
`;