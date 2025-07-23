import React from 'react';
import {
  Section,
  Header,
  Grid,
  Card,
  IconWrapper,
  FeatureTitle,
  FeatureDesc
} from './Features.styles';

// Exemplo de ícones com react-icons (você pode usar SVGs próprios)
import { FaUserPlus, FaUserCheck } from 'react-icons/fa';
import { GiReceiveMoney } from 'react-icons/gi';
import { RiLock2Line } from 'react-icons/ri';

const features = [
  {
    icon: <FaUserPlus />,
    title: 'Capte mais clientes',
    desc: 'Eleve o nível da sua comercializadora e acrescente um diferencial competitivo ao seu negócio com o benefício de antecipar a economia.'
  },
  {
    icon: <FaUserCheck />,
    title: 'Retenha mais clientes',
    desc: 'Ofereça maior liberdade financeira para o cliente lidar com imprevistos, quitar dívidas, investir em melhorias nos imóveis e aproveitar oportunidades de negócio.'
  },
  {
    icon: <GiReceiveMoney />,
    title: 'Monetização da Carteira',
    desc: 'Valor extra a cada antecipação da economia realizada e prêmios mensais para impulsionar sua equipe ainda mais.'
  },
  {
    icon: <RiLock2Line />,
    title: 'Sem Risco',
    desc: 'Todo risco de crédito é da Billi, sem gerar nenhum custo adicional para a comercializadora. Cuidamos de todo o processo até a realização do contrato.'
  }
];

export default function Features() {
  return (
    <Section>
      <Header>Mais receita para sua comercializadora<br/>Oportunidade financeira para os clientes.</Header>
      <Grid>
        {features.map((f, i) => (
          <Card key={i}>
            <IconWrapper>{f.icon}</IconWrapper>
            <FeatureTitle>{f.title}</FeatureTitle>
            <FeatureDesc>{f.desc}</FeatureDesc>
          </Card>
        ))}
      </Grid>
    </Section>
  );
}
