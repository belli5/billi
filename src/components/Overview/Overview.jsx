import React from 'react';
import {
  Section,
  Grid,
  Column,
  Heading,
  Paragraph,
  TwoColumn,
  SectionTitle,
  List,
  ListItem,
  MapWrapper,
  MapImage
} from './Overview.styles';

// se você guardou o mapa de pontos em src/assets/mapBrazil.png
import mapBrazil from './imagens/Brazil.png';
import rectangle from './imagens/Frame 1127463987.png'

export default function Overview() {
  const financeProducts = [
    {
      label: 'Crédito Facilitado',
      desc: 'Capital de giro através da antecipação da economia do seu contrato de energia.'
    },
    {
      label: 'Financiamento de Obras',
      desc: 'Financiamento de obras e serviços de adequação elétrica ou regularizações contratuais.'
    },
    {
      label: 'Quitação de Débitos com Distribuidora',
      desc: 'Empréstimos para pagamento de pendências financeiras que impeçam a migração.'
    },
    {
      label: 'Marketplace',
      desc: 'Compras de produtos e serviços com pagamento direto ao fornecedor.'
    }
  ];

  return (
    <Section>
      {/* primeiríssima linha: quem somos + diagrama */}
      <Grid>
        <Column>
          <Heading>
            Somos uma
            <strong>Energy Switch &amp; Finance Hub</strong>
          </Heading>

          <Paragraph>
            A Billi se posiciona como a ponte entre a economia de energia e a antecipação financeira, sendo:
          </Paragraph>
          <Paragraph>
            • <strong>Switch Facilitator</strong> (Facilitador de Migração Energética): tornamos a transição para o mercado livre simples, digital e sem burocracia.
          </Paragraph>
          <Paragraph>
            • <strong>Finance Hub</strong>: transformamos a economia futura em capital de giro imediato, novas formas de crédito e poder de compra.
          </Paragraph>
          <Paragraph>
            • <strong>Plataforma As-a-Service</strong>: atendemos consumidores, parceiros comerciais, integradores, varejistas e geradores com soluções B2C e B2B.
          </Paragraph>
        </Column>

        <MapImage src={rectangle} alt="Mapa do Brasil" />
      </Grid>

      {/* segunda linha: Acesso a Crédito / Produtos Financeiros */}
      <TwoColumn>
        <Column>
          <SectionTitle>Acesso a Crédito Alternativo</SectionTitle>
          <Paragraph>
            Nosso produto oferece uma solução de crédito alternativa, permitindo a
            antecipação da economia futura dos seus contratos de energia (mercado livre
            ou geração compartilhada). Com ele, sua empresa pode acessar agora os recursos
            que só seriam percebidos ao longo do contrato, transformando economia em capital
            imediato. Essa linha de crédito alternativa é ideal para financiar capital de giro,
            realizar obras, adquirir insumos ou investir no crescimento do seu negócio, com
            previsibilidade e segurança.
          </Paragraph>
        </Column>

        <Column>
          <SectionTitle>Produtos Financeiros</SectionTitle>
          <List>
            {financeProducts.map((p, i) => (
              <ListItem key={i}>
                <span>{p.label}:</span>
                <p>{p.desc}</p>
              </ListItem>
            ))}
          </List>
        </Column>
      </TwoColumn>

      {/* terceira linha: Nossa atuação / mapa */}
      <TwoColumn>
        <Column>
          <SectionTitle>Nossa atuação</SectionTitle>
          <Paragraph>
            A Billi opera em todo o Brasil, com cobertura nacional por meio da sua rede de parceiros.
            Nossa plataforma conecta usuários a benefícios em todas as regiões do país, graças a parcerias
            com comercializadoras, geradores e lojistas que atuam de forma integrada no território nacional.
            Onde houver consumo, a Billi pode entregar vantagens reais.
          </Paragraph>
        </Column>

        <MapWrapper>
          <MapImage src={mapBrazil} alt="Mapa do Brasil" />
        </MapWrapper>
      </TwoColumn>
    </Section>
  );
}
