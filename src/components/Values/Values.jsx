import React from 'react';
import {
  Section,
  Title,
  Grid,
  LeftColumn,
  RightColumn,
  Item
} from './Values.styles';

const valores = [
  {
    number: '1',
    text: 'Inovação com Propósito: Buscamos soluções criativas que gerem impacto real na vida financeira e energética dos nossos clientes.'
  },
  {
    number: '2',
    text: 'Transparência Radical: Informação clara, processos simples e total visibilidade das operações.'
  },
  {
    number: '3',
    text: 'Performance e Resultado: Nosso sucesso é medido pela economia gerada e pelas oportunidades criadas para nossos clientes.'
  },
  {
    number: '5',
    text: 'Sustentabilidade: Promover escolhas energéticas responsáveis e sustentáveis.'
  },
  {
    number: '4',
    text: 'Inclusão e Acesso: Democratizar o acesso ao mercado livre de energia e a produtos financeiros.'
  },
  {
    number: '6',
    text: 'Foco no Cliente: Tudo o que fazemos é guiado pela experiência, pelas necessidades e pelo sucesso financeiro dos nossos clientes.'
  },
  {
    number: '7',
    text: 'Segurança e Confiabilidade: Garantimos segurança jurídica, financeira e operacional em cada transação.'
  }
];

export default function Values() {
  return (
    <Section>
      <Title>Valores</Title>

      <Grid>
        {/* coluna da esquerda: itens 1 e 2 */}
        <LeftColumn>
          {valores.slice(0, 2).map(item => (
            <Item key={item.number}>
              <span className="number">{item.number}</span>
              <p>{item.text}</p>
            </Item>
          ))}
        </LeftColumn>

        {/* coluna da direita: itens 3–6 em duas colunas internas, e o 7 ocupando toda a largura */}
        <RightColumn>
          {valores.slice(2, 6).map(item => (
            <Item key={item.number}>
              <span className="number">{item.number}</span>
              <p>{item.text}</p>
            </Item>
          ))}

          {/* último valor ocupa toda a largura */}
          <Item key={valores[6].number} className="span-all">
            <span className="number">{valores[6].number}</span>
            <p>{valores[6].text}</p>
          </Item>
        </RightColumn>
      </Grid>
    </Section>
  );
}
