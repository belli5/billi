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
    question: 'Por que as comercializadoras varejistas e geradores GD (modalidade geração compartilhada) se beneficiam com a Antecipação da Economia?',
    answer:
      'Para os nossos parceiros, os benefícios são expressivos: a solução Billi é gratuita, aumenta a fidelização dos clientes, amplia a carteira e potencializa a rentabilidade. Além disso, oferecemos uma remuneração atrativa para cada operação de antecipação realizada, fortalecendo o relacionamento com sua base e ajudando na expansão do negócio com baixo risco operacional.'
  },
  {
    question: 'Quais os produtos que a Billi oferece para parceiros?',
    answer:
      'A BILLI oferece:\n' +
      '• Antecipação da Economia: transforma a economia futura dos clientes em capital imediato para eles.\n' +
      '• Gestão de Cobrança: automatização e eficiência na gestão financeira dos recebíveis da usina ou comercializadora.\n' +
      '• Marketplace de Benefícios: conecta clientes a produtos e serviços com condições especiais, gerando mais valor para a operação.'
  },
  {
    question: 'Antecipação da Economia é uma operação de crédito?',
    answer:
      'Não. Para o cliente final, é uma operação estruturada com base na economia prevista, sem caracterizar empréstimo tradicional. Para o parceiro, é uma forma de monetizar a economia gerada e acelerar o fluxo de caixa da operação.'
  },
  {
    question: 'Como fica caso o cliente final não pague a fatura?',
    answer:
      'A inadimplência do cliente final é mitigada com a nossa análise de crédito e garantias associadas (como o seguro de crédito vinculado às parcelas). Além disso, a gestão de cobrança da Billi apoia o parceiro para minimizar riscos.'
  },
  {
    question: 'Há riscos de migração?',
    answer:
      'A migração é regulamentada pela ANEEL e é segura quando feita com parceiros qualificados. A Billi garante suporte completo durante todo o processo.'
  },
  {
    question: 'E se o cliente cancelar o contrato antes do prazo?',
    answer:
      'Em caso de saída antecipada, a Billi atua na gestão das garantias e cláusulas contratuais para proteger os interesses do parceiro. Nossa estrutura jurídica prevê mecanismos para recompor o fluxo antecipado.'
  },
  {
    question: 'Com quem fica a multa no caso de atraso do cliente final?',
    answer:
      'A multa por inadimplência ou rescisão contratual é direcionada conforme as condições do contrato original entre o cliente e o parceiro. A Billi atua apenas na antecipação dos valores já contratados.'
  },
  {
    question: 'Qual a diferença entre a antecipação da economia e outras soluções financeiras?',
    answer:
      'Diferente de um financiamento ou factoring, nossa solução utiliza a própria economia gerada firmada nos contratos pela migração energética para o mercado livre (varejista) ou Geração Distribuída (modalidade de geração compartilhada) como lastro, trazendo previsibilidade e baixo risco para todos os envolvidos.'
  },
  {
    question: 'A antecipação tem alguma relação com seguros?',
    answer:
      'Sim. A BILLI utiliza seguro de crédito vinculado às parcelas antecipadas, que protege o parceiro contra riscos como inadimplência do cliente final, morte ou invalidez do titular. Esse mecanismo aumenta a segurança financeira da operação, garantindo que os valores antecipados ao parceiro sejam honrados mesmo em situações adversas.'
  },
  {
    question: 'Posso usar a antecipação como estratégia de marketing?',
    answer:
      'Sim! Muitos parceiros utilizam a antecipação como diferencial competitivo, oferecendo aos clientes a possibilidade de antecipar os ganhos com a migração energética e usar esse recurso para reformas, expansão ou capital de giro.'
  },
  {
    question: 'Todos os geradores de geração compartilhada e comercializadoras varejistas podem oferecer essa solução?',
    answer:
      'A princípio, sim. É necessário que a operação esteja dentro dos critérios da BILLI (análise de capacidade de geração, carteira de clientes e garantias). Nossos especialistas fazem uma avaliação personalizada.'
  },
  {
    question: 'Como a Billi gera novas oportunidades de negócios para comercializadoras e geradores?',
    answer:
      'Clientes que ainda não migraram para o mercado livre ou para geração compartilhada e buscam acesso a crédito facilitado se tornam leads qualificados na plataforma Billi. Esses leads ficam disponíveis para que comercializadoras varejistas e geradores GD parceiros possam visualizar, selecionar e escolher os melhores clientes diretamente pelo ambiente da Billi. Dessa forma, a plataforma conecta os consumidores interessados ao acesso a crédito facilitado com os parceiros mais competitivos, acelerando a contratação e aumentando a conversão de novos clientes.'
  },
  {
    question: 'Quais os ganhos financeiros para os parceiros?',
    answer:
      'Além da venda de energia ou gestão de usina, os parceiros recebem:\n' +
      '• Comissões sobre operações antecipadas\n' +
      '• Participação em programas de fidelização e cross-selling'
  }
];

export default function FAQ() {
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
          </Left>
          <div>
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
          </div>
        </ContentWrapper>
      </Container>
    </Section>
  );
}
