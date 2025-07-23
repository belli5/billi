// src/components/Values/Values.styles.js
import styled from 'styled-components';

export const Section = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 1rem;
`;

export const Title = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 2rem;
  text-align: rigth;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const RightColumn = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Item = styled.div`
  /* layout fixo conforme wireframe */
  width: 334px;
  height: 80px;

  display: flex;
  align-items: center;       /* centraliza verticalmente */
  gap: 1.5rem;              /* 12px de espaço entre número e texto */

  /* tipografia Montserrat 16px/20px */
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0;
  color: #000000;

  .number {
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 1;
    position: relative;
    color: #000;

    /* bolinha amarela centralizada ao lado do número */
    &::after {
      content: '';
      display: block;
      width: 0.5rem;
      height: 0.5rem;
      background: #FACC15;
      border-radius: 50%;
      position: absolute;
      top: 65%;
      left: calc(100% + 0.25rem);
      transform: translateY(-50%);
    }
  }

  p {
    margin: 0;
    /* herda font-size e line-height do Item */
  }

  /* faz o item 7 ocupar as duas colunas da RightColumn */
  &.span-all {
    grid-column: 1 / -1;
  }
`;
