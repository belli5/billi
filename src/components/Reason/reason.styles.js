// src/components/Reason/reason.styles.js
import styled from 'styled-components'

export const Section = styled.section`
  background: #fff;
  padding: 4rem 1rem;
`

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 5rem;
`

export const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr;
  column-gap: 4rem;
  row-gap: 2rem;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`

export const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 768px) {
    align-items: center;
  }
`

export const RightColumn = styled.div``

export const Title = styled.h2`
  
  font-weight: 600;
  font-size: 2.5rem;
  color: #1F1F1F;
  margin-bottom: 1rem;
  /* puxa só o título mais para a esquerda */
 margin-left: -2rem;

 /* se precisar de mais espaço, ajuste esse valor */
 /* margin-left: -3rem; */
`

export const Subtitle = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1.5;
  color: #090909;
  margin-bottom: 2rem;
  margin-bottom: 1rem;


  /* puxa só o título mais para a esquerda */
 margin-left: -2rem;

 /* se precisar de mais espaço, ajuste esse valor */
 /* margin-left: -3rem; */
`

export const Button = styled.button`
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

export const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: flex-start;
  @media (max-width: 768px) {
    justify-content: center;
  }
`

export const Card = styled.div`
  flex: 1 1 calc(33.333% - 1.333rem);
  max-width: calc(33.333% - 1.333rem);
  text-align: left;
  @media (max-width: 1024px) {
    flex: 1 1 45%;
    max-width: 45%;
  }
  @media (max-width: 640px) {
    flex: 1 1 100%;
    max-width: 100%;
    text-align: center;
  }
`

// envoltório do ícone
export const IconWrapper = styled.div`
  color: #FACC15;      /* cor do ícone */
  margin-bottom: 1rem;
`

export const CardTitle = styled.h3`
  
  font-weight: 600;
  font-size: 1rem;
  color: #000000;
  margin-bottom: 0.5rem;
`

export const CardText = styled.p`
  
  font-weight: 400;
  font-size: 0.875rem;
  color: #000000;
  line-height: 1.5;
`
