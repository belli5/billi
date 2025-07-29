import React, { useState } from 'react';
import {
  Section,
  Container,
  ContentWrapper,
  Left,
  Title,
  Item,
  Question,
  Answer,
  ChevronDown,
  ChevronUp
} from './faq.styles';

const faqs = [
  {
    question: 'O que é a Billi?',
    answer:
      'A Billi é uma plataforma digital que conecta o consumidor ao futuro da energia e das finanças. Atuamos como um hub inteligente de oportunidades, permitindo que pessoas e empresas migrem para soluções de energia mais baratas e créditos facilitados.'
  },
  {
    question: 'Tenho que pagar algo para usar?',
    answer:
      'Não. A adesão e utilização da plataforma são gratuitas. O que vale é aproveitar os descontos com base na sua pontualidade de pagamentos.'
  },
  {
    question: 'Quem pode migrar para o mercado livre?',
    answer:
      'Empresas e consumidores conectados ao Grupo A ou com consumo médio acima de 2500 kWh/mês. A partir de 2024, novos critérios ampliam o acesso para clientes de menor porte.'
  },
  {
    question: 'O que é Energy Switch & Finance Hub?',
    answer:
      'É o conceito da Billi: uma plataforma que integra soluções de migração energética com produtos financeiros, para maximizar o benefício da economia futura.'
  },
  {
    question: 'Há riscos de migração?',
    answer:
      'A migração é regulamentada pela ANEEL e é segura quando feita com parceiros qualificados. A Billi garante suporte completo durante todo o processo.'
  },
  {
    question: 'A Billi vende energia?',
    answer:
      'Não. Atuamos como facilitadora entre o cliente e as comercializadoras parceiras sem conflito de interesses.'
  },
  {
    question: 'Em quanto tempo estarei no mercado livre de energia?',
    answer:
      'O processo pode durar de 2 a 6 meses, dependendo das adequações junto às distribuidoras.'
  },
  {
    question: 'Como funciona o prêmio portabilidade?',
    answer:
      'Ao optar por uma comercializadora parceira, você recebe um bônus financeiro direto no seu caixa.'
  },
  {
    question: 'Posso assinar para outra pessoa?',
    answer:
      'Não, para que você possa acessar aos benefícios que a Billi oferece é importante que seja a pessoa titular pelo envio da conta de luz.'
  },
  {
    question: 'Quanto tempo leva para liberar o desconto?',
    answer:
      'Em geral, o desconto é liberado em até 5 dias úteis, após envio da conta e confirmação do perfil pela Billi junto ao parceiro gerador.'
  },
  {
    question: 'Quais benefícios encontro na Billi?',
    answer:
      'São variados, desde descontos imediatos em uma rede de parceiros, a vantagens exclusivas, como o valor em PIX.'
  },
  {
    question: 'Há riscos de usar a Billi?',
    answer:
      'A Billi acompanha e reduz riscos regulatórios e financeiros.'
  },
  {
    question: 'Posso usar em qualquer lugar?',
    answer:
      'Sim, você pode usar em qualquer lugar, mas recomendamos que utilize na Billi Place, no qual contamos com uma rede de parceiros que oferecem descontos exclusivos.'
  }
];

export default function FAQ() {
  // 1) Criamos um array de estados, um booleano para cada item, todos true inicialmente
  const [openStates, setOpenStates] = useState(() => faqs.map(() => false));

  // 2) Toggle individual
  const toggle = (idx) => {
    setOpenStates((prev) => {
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
          </Left>

          <div>
            {faqs.map((item, idx) => (
              <Item key={idx}>
                <Question onClick={() => toggle(idx)}>
                  {item.question}
                  {openStates[idx] 
                    ? <ChevronUp size={20}/> 
                    : <ChevronDown size={20}/>}
                </Question>
                <Answer isOpen={openStates[idx]}>
                  {item.answer}
                </Answer>
              </Item>
            ))}
          </div>
        </ContentWrapper>
      </Container>
    </Section>
  );
}