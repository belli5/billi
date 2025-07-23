// src/components/Reason/Reason.jsx
import React from 'react'
import {
  Section,
  Container,
  ContentWrapper,
  LeftColumn,
  RightColumn,
  Title,
  Subtitle,
  Button,
  Grid,
  Card,
  IconWrapper,   // veja abaixo no styles
  CardTitle,
  CardText
} from './reason.styles'

// importe os ícones React
import { FiTrendingUp, FiZap, FiCreditCard, FiLock, FiLink } from 'react-icons/fi'

const steps = [
  {
    Icon: FiTrendingUp,
    title: 'Economia Imediata e Inteligente',
    text:
      'Antecipe a economia futura da sua conta de energia e transforme-a em capital de giro, financiamento de obras ou investimento no seu negócio.'
  },
  {
    Icon: FiZap,
    title: 'Migração Energética Facilitada',
    text:
      'Tenha acesso simplificado ao mercado livre de energia, com todo o suporte jurídico, técnico e financeiro para a transição sem dores de cabeça.'
  },
  {
    Icon: FiCreditCard,
    title: 'Crédito Rápido e Sem Burocracia',
    text:
      'Linhas de crédito exclusivas e condições diferenciadas para quem migra com a Billi – menos papelada, mais resultados.'
  },
  {
    Icon: FiLock,
    title: 'Segurança e Monitoramento Contínuo',
    text:
      'Acompanhamento pós-migração com relatórios claros e indicadores de desempenho que garantem eficiência e novas oportunidades de crédito.'
  },
  {
    Icon: FiLink,
    title: 'Conexão com os Melhores Parceiros',
    text:
      'Acesso a comercializadoras, geradores e parceiros estratégicos que maximizam seus ganhos e a sustentabilidade do seu negócio.'
  }
]

export default function Reason() {
  const handleClick = () => {
    const sec = document.getElementById('motivos-section')
    if (sec) sec.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <Section id="motivos-section">
      <Container>
        <ContentWrapper>
          <LeftColumn>
            <Title>Motivos para ser Billi e acessar os melhores benefícios</Title>
            <Subtitle>Vamos te contar o porquê migrar para a Billi.</Subtitle>
            <Button onClick={handleClick}>Quero ser Billi</Button>
          </LeftColumn>

          <RightColumn>
            <Grid>
              {steps.map(({ Icon, title, text }) => (
                <Card key={title}>
                  <IconWrapper>
                    <Icon size={56} /> {/* tamanho do ícone */}
                  </IconWrapper>
                  <CardTitle>{title}</CardTitle>
                  <CardText>{text}</CardText>
                </Card>
              ))}
            </Grid>
          </RightColumn>
        </ContentWrapper>
      </Container>
    </Section>
  )
}
