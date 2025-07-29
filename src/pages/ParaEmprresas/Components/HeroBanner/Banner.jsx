// src/components/HeroBanner/HeroBanner.jsx
import React from 'react'
import {
  Section,
  Container,
  Title,
  Highlight,
  Subtitle,
  Description,
  CTAButton
} from './Banner.styles'
import bgImage from '../../../../../public/assets/imagens/para_empresas.png' 

export default function HeroBanner() {
  return (
    <Section bg={bgImage}>
      <Container>
        <Title>
          Sua economia de energia&nbsp; <br />
          <Highlight>pode virar dinheiro agora.</Highlight>
        </Title>
        <Subtitle>
          Se sua empresa gera economia com energia, a Billi antecipa esse valor em até 36 meses.
        </Subtitle>
        <Description>
          Dinheiro direto no caixa, sem dor de cabeça.
        </Description>
        <CTAButton href="#simular">Simular Crédito</CTAButton>
      </Container>
    </Section>
  )
}
