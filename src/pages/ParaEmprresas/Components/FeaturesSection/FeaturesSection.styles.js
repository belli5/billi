// src/components/FeaturesSection/FeaturesSection.styles.js
import styled from 'styled-components';

export const Section = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 1rem;
  text-align: center;
`;

export const Heading = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  line-height: 1.3;
  margin-bottom: 3rem;
  color: #111;

  @media (max-width: 768px) {
    font-size: 1.75rem;
    margin-bottom: 2rem;
  }
`;

export const Cards = styled.div`
  display: grid;
  /* 4 colunas que somam 94% + 3 gaps de 2% = 100% */
  grid-template-columns: repeat(4, 23.5%);
  gap: 2%;

  @media (max-width: 992px) {
    /* 2 colunas que somam 96% + gap de 4% = 100% */
    grid-template-columns: repeat(2, 48%);
    gap: 4%;
  }

  @media (max-width: 600px) {
    grid-template-columns: 100%;
    gap: 0;
  }
`;

export const Card = styled.div`
  background: #fff;
  padding: 2.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.01);
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const IconWrapper = styled.div`
  font-size: 2rem;
  color: #facc15;
`;

export const CardTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 500;
  color: #222;
  letter-spacing: 0.5px;
  line-height: 1.4;
`;

export const CardText = styled.p`
  font-size: 0.95rem;
  line-height: 1.6;
  color: #1F1F1F;
  letter-spacing: 0.25px;
`;
