import styled from 'styled-components';

export const Section = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 1rem;
  color: #111;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2,1fr);
  gap: 2rem;
  align-items: start;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Heading = styled.h2`
  font-size: 1.75rem;
  font-weight: 700;
  line-height: 1.2;

  & strong {
    display: block;
    margin-top: 0.5rem;
    font-size: 2rem;
  }
`;

export const Paragraph = styled.p`
  margin: 0.5rem 0;
  font-size: 1rem;
  line-height: 1.6;
`;

export const TwoColumn = styled.div`
  display: grid;
  grid-template-columns: repeat(2,1fr);
  gap: 2rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const SectionTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const ListItem = styled.li`
  display: grid;
  grid-template-columns: max-content 1fr;
  gap: 0.5rem;
  margin-bottom: 0.75rem;

  & span {
    font-weight: 600;
  }

  & p {
    margin: 0;
    font-size: 1rem;
    line-height: 1.5;
  }
`;

export const MapWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export const MapImage = styled.img`
  max-width: 100%;
  height: auto;
`;
