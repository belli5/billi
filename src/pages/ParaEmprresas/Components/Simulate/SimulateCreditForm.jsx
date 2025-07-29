// src/components/CreditForm/CreditForm.jsx
import React, { useState } from 'react'
import {
  Section,
  Left,
  Right,
  Heading,
  FeaturesList,
  FeatureItem,
  IconWrapper,
  IntroText,
  Form,
  FieldGroup,
  Label,
  Input,
  Select,
  CheckboxWrapper,
  Checkbox,
  Button
} from './SimulateCreditForm.styles'
import {
  FaRegCalendarAlt,
  FaRegClock,
  FaLock,
  FaThumbsUp
} from 'react-icons/fa'

export default function CreditForm() {
  const [form, setForm] = useState({
    companyName: '',
    cnpj: '',
    responsible: '',
    email: '',
    phone: '',
    commercial: '',
    consumption: ''
  })

  const handleChange = e => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  return (
    <Section id="simular">
      <Left>
        <Heading>Simule sua liberação de crédito:</Heading>
        <FeaturesList>
          <FeatureItem>
            <IconWrapper><FaRegCalendarAlt/></IconWrapper>
            Antecipe até 36 meses da sua economia com energia
          </FeatureItem>
          <FeatureItem>
            <IconWrapper><FaRegClock/></IconWrapper>
            Dinheiro em até 2 dias úteis após aprovação
          </FeatureItem>
          <FeatureItem>
            <IconWrapper><FaLock/></IconWrapper>
            Sem custo, sem dívida
          </FeatureItem>
          <FeatureItem>
            <IconWrapper><FaThumbsUp/></IconWrapper>
            A Billi cuida de tudo: contrato, cobrança e segurança
          </FeatureItem>
        </FeaturesList>
      </Left>

      <Right>
        <IntroText>Preencha o formulário e receba sua proposta personalizada</IntroText>
        <Form>
          <FieldGroup>
            <Label>Nome da Empresa</Label>
            <Input
              name="companyName"
              value={form.companyName}
              onChange={handleChange}
              $filled={!!form.companyName}
              type="text"
              placeholder="Razão Social"
            />
          </FieldGroup>

          <FieldGroup>
            <Label>CNPJ</Label>
            <Input
              name="cnpj"
              value={form.cnpj}
              onChange={handleChange}
              $filled={!!form.cnpj}
              type="text"
              placeholder="00.000.000/0000-00"
            />
          </FieldGroup>

          <FieldGroup>
            <Label>Nome do Responsável</Label>
            <Input
              name="responsible"
              value={form.responsible}
              onChange={handleChange}
              $filled={!!form.responsible}
              type="text"
              placeholder="Nome"
            />
          </FieldGroup>

          <FieldGroup>
            <Label>Email</Label>
            <Input
              name="email"
              value={form.email}
              onChange={handleChange}
              $filled={!!form.email}
              type="email"
              placeholder="E-mail"
            />
          </FieldGroup>

          <FieldGroup>
            <Label>Celular/Whatsapp</Label>
            <Input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              $filled={!!form.phone}
              type="tel"
              placeholder="DDD + número de telefone"
            />
          </FieldGroup>

          <FieldGroup>
            <Label>Comercializadora Atual</Label>
            <Input
              name="commercial"
              value={form.commercial}
              onChange={handleChange}
              $filled={!!form.commercial}
              type="text"
              placeholder="Ex: CEO"
            />
          </FieldGroup>

          <FieldGroup className="wide">
            <Label>Consumo Médio Mensal (kWh)</Label>
            <Select
              name="consumption"
              value={form.consumption}
              onChange={handleChange}
              $filled={!!form.consumption}
            >
              <option value="">selecione</option>
              <option>até 1 000</option>
              <option>1 001 – 5 000</option>
              <option>5 001 – 10 000</option>
            </Select>
          </FieldGroup>

          <CheckboxWrapper>
            <Checkbox type="checkbox" id="lgpd" />
            <Label htmlFor="lgpd">
              Autorizo o uso dos meus dados pela Billi, conforme LGPD.
            </Label>
          </CheckboxWrapper>

          <Button type="submit">Avançar</Button>
        </Form>
      </Right>
    </Section>
  )
}
