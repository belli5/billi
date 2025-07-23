import styled from 'styled-components';

export const Section = styled.section`
  max-width: 1200px;
  margin: 0 auto 4rem;
  padding: 0 1rem;
`;

export const Header = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    font-size: 1.75rem;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const IconWrapper = styled.div`
  font-size: 2rem;
  color: #FACC15;
`;

export const FeatureTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  margin: 0;
  color: #111;
`;

export const FeatureDesc = styled.p`
  font-size: 0.9rem;
  line-height: 1.5;
  color: #555;
  margin: 0;
`;
