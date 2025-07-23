import styled from 'styled-components';

export const Section = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 1rem;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

export const Header = styled.div`
  text-align: center;
  margin-bottom: 3rem;

  & > h2 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  & > p {
    font-size: 1.125rem;
    color: #1F1F1F;
    max-width: 800px;
    margin: 0 auto;
    line-height: 1.6;
  }
`;

export const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Block = styled.div`
  & > h3 {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  & > p {
    font-size: 1rem;
    color: #000000;
    line-height: 1.6;
  }
`;
