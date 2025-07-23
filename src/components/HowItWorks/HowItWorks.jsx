// src/components/HowItWorks/HowItWorks.jsx
import React from 'react';
import {
  Section,
  Container,
  Title,
  Subtitle,
  StepsGrid,
  StepCard,
  StepIcon,
  StepTitle,
  CTAButton,
  StepText
} from './HowItWorks.Styles';

// 1) usa import.meta.glob para carregar todas as imagens da pasta
const imagensModules = import.meta.glob('./imagens/*.{png,svg,jpg}', {
  eager: true,    // carrega imediatamente
  as: 'url'       // retorna só a URL string
});

const imagensMap = Object.entries(imagensModules).reduce((map, [path, url]) => {
  const fileName = path.split('/').pop();
  map[fileName] = url;
  return map;
}, /** @type Record<string,string> */({}));

// 3) define a lista de passos, só passando o nome do arquivo
const steps = [
  { icon: 'Group.png',  title: 'Análise de Viabilidade',      text: 'Se você já tem contrato, analisamos sua economia. Se ainda não tem, avaliamos sua conta e propomos a melhor oferta. Tudo isso para liberar o crédito que cabe no seu bolso.' },
  { icon: 'Group (3).png',     title: 'Análise de Crédito',          text: 'Avaliação facilitada, possibilitando acesso ao crédito facilitado e às condições necessárias para a migração.' },
  { icon: 'Group (2).png', title: 'Conexão com fornecedores de energia', text: 'Alinhamento com os principais players do mercado para assegurar as melhores condições comerciais e as soluções financeiras adequadas para você e seu negócio.' },
  { icon: 'Group (1).png',   title: 'Contratação da Migração',     text: 'A formalização do contrato de compra de energia é uma condição para liberar o crédito facilitado para capital de giro, obras ou insumos.' },
  { icon: 'get-a-job-promotion.png',   title: 'Acompanhamento Pós-Migração', text: 'Acompanhamento pós-migração com relatórios e indicadores que fortalecem novas liberações de crédito, conforme o desempenho do seu negócio.' },
];

export default function HowItWorks() {

    const scrollToSimulate = () => {
    const sec = document.getElementById('simulate-section');
    if (sec) {
      sec.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <Section id="como-funciona">
      <Container>
        <Title>Como a Billi funciona?</Title>
        <Subtitle>
          Entenda o passo a passo para a liberação do crédito facilitado através da migração energética
        </Subtitle>

        <StepsGrid>
          {steps.map(({ icon, title, text }) => (
            <StepCard key={title}>
              {/* 4) puxa do map conforme o nome do arquivo */}
              <StepIcon src={imagensMap[icon]} alt={title} />
              <StepTitle>{title}</StepTitle>
              <StepText>{text}</StepText>
            </StepCard>
          ))}
        </StepsGrid>

        <CTAButton onClick={scrollToSimulate}>
          Quero ser Billi
        </CTAButton>

      </Container>
    </Section>
  );
}
