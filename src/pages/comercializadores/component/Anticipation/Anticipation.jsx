import React from 'react';
import {
  Section,
  Container,
  Left,
  Right
} from './Anticipation.styles';

export default function Anticipation() {
  return (
    <Section>
      <Container>
        {/* texto à esquerda */}
        <Left>
          <h2>
            Antecipação da<br/>
            <span className="highlight">Economia Futura de Energia</span>
          </h2>
          <p>
            Aumente a captação de clientes, retenha e fidelize sua carteira.
          </p>
          <p>
            Impulsione sua receita, melhore o relacionamento com seus clientes e aumente sua carteira, com uma solução a custo zero para você.
          </p>
          <p>
            Ofereça até <span className="highlight">36 meses de antecipação</span> da economia futura de energia do seu cliente.
          </p>
        </Left>

        {/* formulário à direita */}
        <Right onSubmit={e => e.preventDefault()}>
          <div className="row">
            <div>
              <label>Comercializadora</label>
              <select defaultValue="">
                <option value="" disabled>Selecione</option>
                <option>Equatorial Nordeste S/A</option>
                <option>Outra</option>
              </select>
            </div>
            <div>
              <label>Nome</label>
              <input type="text" placeholder="Seu nome" />
            </div>
          </div>

          <div className="row">
            <div>
              <label>E-mail</label>
              <input type="email" placeholder="seu@exemplo.com" />
            </div>
            <div>
              <label>Celular / Whatsapp</label>
              <input type="tel" placeholder="DDD + número" />
            </div>
          </div>

          <div className="row">
            <div>
              <label>Website</label>
              <input type="text" placeholder="site.com.br" />
            </div>
            <div>
              <label>Cargo na comercializadora</label>
              <input type="text" placeholder="CEO, Gerente…" />
            </div>
          </div>

          <div className="row">
            <div>
              <label>Tamanho da carteira</label>
              <input type="number" placeholder="número" />
            </div>
            <div>
              <label>Integração ERP/Gestão?</label>
              <select defaultValue="">
                <option value="" disabled>Selecione</option>
                <option>Sim</option>
                <option>Não</option>
              </select>
            </div>
          </div>

          <label className="checkbox">
            <input type="checkbox" />
            Autorizo o uso dos meus dados pela Billi, conforme LGPD.
          </label>

          <button type="submit">Avançar</button>
        </Right>
      </Container>
    </Section>
  );
}
