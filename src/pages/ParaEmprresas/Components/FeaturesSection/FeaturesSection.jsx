// src/components/FeaturesSection/FeaturesSection.jsx
import React from 'react'
import {
  Section,
  Heading,
  Cards,
  Card,
  IconWrapper,
  CardTitle,
  CardText
} from './FeaturesSection.styles'
import {
  FaDollarSign,
  FaRegClock,
  FaThumbsUp,
  FaPhoneAlt
} from 'react-icons/fa'

export default function FeaturesSection() {
  return (
    <Section>
      <Heading>
        Transforme economia em capital de giro<br/>
        Antecipe sua economia de energia com segurança.
      </Heading>
      <Cards>
        <Card>
          <IconWrapper><FaDollarSign /></IconWrapper>
          <CardTitle>Antecipe sua economia</CardTitle>
          <CardText>
            Aumente o fôlego financeiro da sua empresa com o valor da economia futura, disponível para quitar dívidas, reforçar o caixa ou investir no crescimento do negócio.
          </CardText>
        </Card>
        <Card>
          <IconWrapper><FaRegClock /></IconWrapper>
          <CardTitle>Processo rápido e simples</CardTitle>
          <CardText>
            Sem burocracia: você envia as informações e a Billi cuida de todo o processo com a comercializadora parceira, de forma segura e transparente.
          </CardText>
        </Card>
        <Card>
          <IconWrapper><FaThumbsUp /></IconWrapper>
          <CardTitle>Sem dívida, sem risco</CardTitle>
          <CardText>
            A antecipação não gera endividamento. Você recebe um valor que já é seu, com toda a estrutura jurídica e de risco assumida pela Billi.
          </CardText>
        </Card>
        <Card>
          <IconWrapper><FaPhoneAlt /></IconWrapper>
          <CardTitle>Suporte em todas as etapas</CardTitle>
          <CardText>
            Conte com atendimento dedicado desde a análise até o recebimento. Acompanhamento completo e direto com a equipe da Billi.
          </CardText>
        </Card>
      </Cards>
    </Section>
  )
}
