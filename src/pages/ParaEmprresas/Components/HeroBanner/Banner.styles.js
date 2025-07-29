// src/components/HeroBanner/HeroBanner.styles.js
import styled from 'styled-components';

export const Section = styled.section`
  /* ocupa 100% da largura e altura da janela */
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;

  /* gradiente + imagem */
  background-image:
    linear-gradient(
      to right,
      rgba(0, 0, 0, 0.8) 50%,
      rgba(0, 0, 0, 0) 100%
    ),
    url(${props => props.bg});
  background-size: cover;
  background-repeat: no-repeat;
  /* reposiciona o foco mais à direita, para revelar cenário */
  background-position: 70% 0;

  display: flex;
  align-items: center;
`;

export const Container = styled.div`
  position: relative;
  z-index: 1;

  /* reduz largura do texto e empurra menos para a esquerda */
  max-width: 600px;
  margin: 0 auto 0 5rem;
  padding: 0 1.5rem;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;

  color: #fff;

  @media (max-width: 1024px) {
    margin-left: 2rem;
  }

  @media (max-width: 768px) {
    margin: 0 auto;
    max-width: 90%;
    padding: 0 1rem;
  }
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 600;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const Highlight = styled.span`
  color: #f9c707;
`;

export const Subtitle = styled.p`
  font-size: 1.8rem;
  font-weight: 600;
`;

export const Description = styled.p`
  font-size: 1rem;
  font-weight: 400;
`;

export const CTAButton = styled.a`
  display: inline-block;
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  padding: 0.75rem 2rem;
  background: #facc15;
  color: #111827;
  border: none;
  border-radius: 9999px;
  text-decoration: none;    /* remove underline */
  cursor: pointer;
  transition: background 0.2s;
  align-self: flex-start;

  &:hover {
    background: #eab308;
  }
`;

