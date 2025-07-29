// src/components/FAQ/FAQ.jsx
import React, { useState } from 'react';
import {
  Section,
  Container,
  ContentWrapper,
  Left,
  Title,
  Subtitle,
  Right,
  Item,
  Question,
  Answer,
  ChevronDown,
  ChevronUp
} from './faq.styles';

const faqs = [
  {
    question: 'Como sei se minha empresa pode antecipar?',
    answer:
      'Se sua empresa gera economia com energia — seja por meio de projetos de eficiência, geração própria (como solar), ou por estar no mercado livre —, há potencial para antecipar os valores que seriam economizados nos próximos meses. A Billi faz uma análise gratuita e rápida para confirmar sua elegibilidade.'
  },
  {
    question: 'Vou precisar mudar de fornecedor de energia?',
    answer:
      'Não. Toda a operação é feita com a comercializadora com a qual você já mantém contrato. A antecipação acontece em parceria com ela, sem necessidade de trocar de fornecedor ou alterar a estrutura atual do fornecimento.'
  },
  {
    question: 'A antecipação é um empréstimo?',
    answer:
      'Não. A antecipação da economia não é considerada um empréstimo tradicional, pois não envolve juros, parcelas mensais ou registro em órgãos de crédito. É uma operação estruturada com base na economia futura que sua empresa já gera — você apenas recebe esse valor antes.'
  },
  {
    question: 'O que acontece se a economia prevista não acontecer?',
    answer:
      'A Billi assume o risco financeiro da operação junto à comercializadora. Caso haja algum imprevisto que reduza ou interrompa a economia, sua empresa não será cobrada ou responsabilizada. Tudo é garantido por contrato.'
  },
  {
    question: 'A operação é segura?',
    answer:
      'Sim. A Billi conta com um modelo jurídico validado e seguros específicos para proteger todos os envolvidos. O processo é feito com contratos claros, estrutura legal robusta e parceria com comercializadoras de confiança.'
  },
  {
    question: 'Qual é o prazo para receber os valores?',
    answer:
      'Após o envio dos dados e validação da operação, o valor pode ser disponibilizado em poucos dias úteis. Todo o processo é feito de forma digital e acompanhada por especialistas da Billi.'
  },
  {
    question: 'A antecipação compromete meu limite de crédito no mercado?',
    answer:
      'Não. Como não é financiamento, a operação não impacta o endividamento da empresa nem aparece nos registros de crédito. É uma alternativa segura para reforçar o caixa sem comprometer sua saúde financeira.'
  },
  {
    question: 'Como posso usar o valor antecipado?',
    answer:
      'Você pode usar como quiser: quitar débitos, investir na operação, reforçar o capital de giro ou aproveitar uma oportunidade de crescimento. O recurso é totalmente livre e cai direto na conta da sua empresa.'
  }
];

export default function FAQ() {
  // todas abertas por padrão
  const [openStates, setOpenStates] = useState(() => faqs.map(() => false));

  const toggle = idx => {
    setOpenStates(prev => {
      const copy = [...prev];
      copy[idx] = !copy[idx];
      return copy;
    });
  };

  return (
    <Section id="faq">
      <Container>
        <ContentWrapper>
          <Left>
            <Title>Principais dúvidas sobre a Billi</Title>
            <Subtitle>
              Dúvidas sobre como funciona o nosso serviço? Quer saber mais detalhes sobre as taxas, prazos e regras para as nossas soluções?
            </Subtitle>
          </Left>

          <Right>
            {faqs.map((item, idx) => (
              <Item key={idx}>
                <Question onClick={() => toggle(idx)}>
                  <span>{item.question}</span>
                  {openStates[idx]
                    ? <ChevronUp size={20}/>
                    : <ChevronDown size={20}/>}
                </Question>
                <Answer isOpen={openStates[idx]}>
                  {item.answer.split('\n').map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </Answer>
              </Item>
            ))}
          </Right>
        </ContentWrapper>
      </Container>
    </Section>
  );
}
