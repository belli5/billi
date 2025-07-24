import styled from 'styled-components';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

export const Section = styled.section`
  padding: 4rem 1rem;
  background: #fff;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 2rem;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Left = styled.div`
  /* Apenas para posicionar o título no topo */
`;

export const Title = styled.h2`
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 2.5rem;
  color: #1F1F1F;
  margin: 0;
`;

export const Item = styled.div`
  border-bottom: 1px solid #E5E7EB;
`;

export const Question = styled.button`
  width: 100%;
  background: none;
  border: none;
  padding: 1rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: 'Montserrat', sans-serif;
  font-size: 1.125rem;
  font-weight: 600;
  color: #111827;
  cursor: pointer;

  &:focus { outline: none; }
/* faz o span crescer para empurrar o ícone para a direita */
  & > span {
    flex: 1;
    text-align: left;
  }
 `;

export const Answer = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-size: 0.9375rem;
  color: #6B7280;
  line-height: 1.5;
  max-height: ${({ isOpen }) => (isOpen ? '500px' : '0')};
  overflow: hidden;
  transition: max-height 0.3s ease;
  padding-bottom: ${({ isOpen }) => (isOpen ? '1rem' : '0')};
`;

export const ChevronDown = styled(FiChevronDown)`
  flex-shrink: 0;
`;

export const ChevronUp = styled(FiChevronUp)`
  flex-shrink: 0;
`;
