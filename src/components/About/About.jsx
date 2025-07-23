import React from 'react';
import {
  Section,
  Header,
  ContentGrid,
  Column,
  Block
} from './About.styles';

export default function About() {
  return (
    <Section>
      <Header>
        <h2>Descubra o jeito Billi de ser</h2>
        <p>
          Saiba mais sobre nós, missão, valores e como fazemos os benefícios chegarem até você
        </p>
      </Header>

      <ContentGrid>
        <Column>
          <Block>
            <h3>Quem somos</h3>
            <p>
              A Billi é uma plataforma digital que conecta o consumidor ao futuro da energia e das finanças. Atuamos como um hub inteligente de oportunidades, permitindo que pessoas e empresas migrem para soluções de energia mais baratas e, ao mesmo tempo, acelerem o acesso a recursos financeiros a partir da economia futura com energia.
                    Somos o elo entre o mercado de energia, o sistema financeiro e o consumidor final, promovendo acesso, inclusão e liberdade de escolha no setor elétrico e financeiro.
            </p>
            
          </Block>

          <Block>
            <h3>Visão</h3>
            <p>
              Ser a principal plataforma de Energy Switch e Finance Hub da América Latina, facilitando a
              migração energética e o acesso a crédito de forma simples, digital e segura.
            </p>
          </Block>
        </Column>

        <Column>
          <Block>
            <h3>Missão</h3>
            <p>
              Transformar a economia de energia em liquidez imediata e oportunidades financeiras,
              democratizando o acesso ao mercado livre de energia e soluções financeiras inteligentes.
            </p>
          </Block>

          <Block>
            <h3>Propósito</h3>
            <p>
              Colocar o poder da energia e das finanças nas mãos do consumidor. Queremos que cada cliente
              veja na BILLI não apenas uma plataforma, mas um parceiro de transformação financeira e energética.
            </p>
          </Block>
        </Column>
      </ContentGrid>
    </Section>
  );
}
