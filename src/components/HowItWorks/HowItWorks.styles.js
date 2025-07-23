// src/components/HowItWorks/howItWorks.styles.js
import styled from 'styled-components'

export const Section = styled.section`
  padding: 4rem 1rem;
  background-color: #F7F7F7;
`

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`

export const Title = styled.h2`
 
  font-weight: 700;
  font-size: 2.5rem;
  color: #1F1F1F;
`

export const Subtitle = styled.p`
  
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 1.2;
  color: #1F1F1F;
  margin-top: 0.5rem;
  margin-bottom: 4rem;
`

export const StepsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: space-between;

  @media (max-width: 768px) {
    justify-content: center;
  }
`

export const StepCard = styled.div`
  flex: 1 1 calc(20% - 1.6rem);
  max-width: calc(20% - 1.6rem);
  text-align: center;

  @media (max-width: 1024px) {
    flex: 1 1 45%;
    max-width: 45%;
  }
  @media (max-width: 640px) {
    flex: 1 1 100%;
    max-width: 100%;
  }
`

export const StepIcon = styled.img`
  width: 150px;
  height: auto;
  margin-bottom: 1.5rem;

  @media (min-width: 1200px) {
    width: 200px;
  }
  @media (max-width: 768px) {
    width: 200px;
  }
`;

export const StepTitle = styled.h3`
  
  font-weight: 600;
  font-size: 1.125rem;
  color: #000000;
  margin-bottom: 0.5rem;
`

export const StepText = styled.p`
  
  font-weight: 400;
  font-size: 0.9375rem; /* 15px */
  color: #000000;
  line-height: 1.5;
`
export const CTAButton = styled.button`
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  padding: 0.75rem 2rem;
  background: #facc15;
  color: #111827;
  border: none;
  border-radius: 9999px;
  cursor: pointer;
  transition: background 0.2s;
  align-self: flex-start;

  &:hover {
    background: #eab308;
  }
`;