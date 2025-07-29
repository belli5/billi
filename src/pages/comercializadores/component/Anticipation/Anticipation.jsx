// src/components/Anticipation/Anticipation.jsx
import React, { useState } from 'react';
import {
  Section,
  Container,
  Left,
  Right
} from './Anticipation.styles';

export default function Anticipation() {
  const [form, setForm] = useState({
    comercializadora: '',
    nome: '',
    email: '',
    phone: '',
    website: '',
    cnpj: '',
    carteira: '',
    integracao: ''
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

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
              <select
                name="comercializadora"
                value={form.comercializadora}
                onChange={handleChange}
                data-filled={!!form.comercializadora}
              >
                <option value="" disabled>Selecione</option>
                <option>Equatorial Nordeste S/A</option>
                <option>Outra</option>
              </select>
            </div>
            <div>
              <label>Nome</label>
              <input
                name="nome"
                type="text"
                placeholder="Seu nome"
                value={form.nome}
                onChange={handleChange}
                data-filled={!!form.nome}
              />
            </div>
          </div>

          <div className="row">
            <div>
              <label>E-mail</label>
              <input
                name="email"
                type="email"
                placeholder="seu@exemplo.com"
                value={form.email}
                onChange={handleChange}
                data-filled={!!form.email}
              />
            </div>
            <div>
              <label>Celular / Whatsapp</label>
              <input
                name="phone"
                type="tel"
                placeholder="DDD + número"
                value={form.phone}
                onChange={handleChange}
                data-filled={!!form.phone}
              />
            </div>
          </div>

          <div className="row">
            <div>
              <label>Website</label>
              <input
                name="website"
                type="text"
                placeholder="site.com.br"
                value={form.website}
                onChange={handleChange}
                data-filled={!!form.website}
              />
            </div>
            <div>
              <label>CNPJ</label>
              <input
                name="cnpj"
                type="text"
                placeholder="00.000.000/0000-00"
                value={form.cnpj}
                onChange={handleChange}
                data-filled={!!form.cnpj}
              />
            </div>
          </div>

          <div className="row">
            <div>
              <label>Tamanho da carteira</label>
              <input
                name="carteira"
                type="number"
                placeholder="número"
                value={form.carteira}
                onChange={handleChange}
                data-filled={!!form.carteira}
              />
            </div>
            <div>
              <label>Integração ERP/Gestão?</label>
              <select
                name="integracao"
                value={form.integracao}
                onChange={handleChange}
                data-filled={!!form.integracao}
              >
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
