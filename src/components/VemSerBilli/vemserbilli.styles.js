import styled from 'styled-components';
import { FiArrowRight } from 'react-icons/fi';

export const Section = styled.section`
  position: relative;
  background: url('assets/imagens/7e75399b857c0bebd09d4a57bf949eb6f8f5fbc2.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 70% 5%;
  color: #fff;
  padding: 6rem 1rem;
`;

export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.6);
`;

export const Content = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const Left = styled.div`
  flex: 1;
`;

export const Tag = styled.span`
  display: block;
  
  font-size: 1.6rem;
  opacity: 0.8;
  margin-bottom: 0.2rem;
`;

export const Title = styled.h2`
  
  font-weight: 700;
  font-size: 2.5rem;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const Highlight = styled.span`
  color: #FACC15;
`;

export const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const BaseButton = styled.button`
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 1rem;
  padding: 0.75rem 1.5rem;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  transition: all 0.2s;
`;

export const PrimaryButton = styled(BaseButton)`
  font-family: 'Montserrat', sans-serif;
  background: #FACC15;
  color: #111827;
  border: none;

  &:hover {
    background: #EAB308;
  }
`;

export const SecondaryButton = styled(BaseButton)`
  font-family: 'Montserrat', sans-serif;
  background: transparent;
  color: #FACC15;
  border: 2px solid #FACC15;

  &:hover {
    background: rgba(250, 204, 21, 0.1);
  }
`;

export const ArrowIcon = styled(FiArrowRight)`
  margin-left: 0.5rem;
`;
