import React from 'react';
import {
  Section,
  Container,
  Title,
  Subtitle,
  Form,
  Row,
  Group,
  Label,
  Input,
  Select,
  CheckboxRow,
  Checkbox,
  CheckboxLabel,
  SimulateButton
} from './simulate.styles';

export default function Simulate() {
  return (
    <Section id="simulate-section">
      <Container>
        <Title>Simule sua liberação de crédito</Title>
        <Subtitle>
          Descubra o quanto você pode transformar da sua economia de energia em capital de giro,
          financiamento de obras ou crédito direto no seu negócio.
        </Subtitle>

        <Form onSubmit={(e) => { e.preventDefault(); /* lógica de simulação aqui */ }}>
          <Row>
            <Group>
              <Label htmlFor="name">Seu nome</Label>
              <Input id="name" placeholder="Nome ou Razão Social" />
            </Group>
            <Group>
              <Label htmlFor="consumo">Consumo médio mensal (kWh)</Label>
              <Input id="consumo" placeholder="kWh/mês" />
            </Group>
          </Row>

          <Row>
            <Group>
              <Label htmlFor="cep">CEP</Label>
              <Input id="cep" placeholder="00000-000" />
            </Group>
            <Group>
              <Label htmlFor="whatsapp">WhatsApp / Celular</Label>
              <Input id="whatsapp" placeholder="(DDD) 9XXXX-XXXX" />
            </Group>
          </Row>

          <Row>
            <Group>
              <Label htmlFor="email">E-mail</Label>
              <Input id="email" type="email" placeholder="nome@exemplo.com" />
            </Group>
            <Group>
              <Label htmlFor="distribuidora">Distribuidora</Label>
              <Select id="distribuidora">
                <option value="">Selecione</option>
                <option value="eletrobras">Eletrobras</option>
                <option value="cpfl">CPFL</option>
                <option value="enel">Enel</option>
                {/* etc */}
              </Select>
            </Group>
          </Row>

          <CheckboxRow>
            <Checkbox id="lgpd" />
            <CheckboxLabel htmlFor="lgpd">
              Autorizo o uso dos meus dados pela Billi, conforme LGPD.
            </CheckboxLabel>
          </CheckboxRow>

          <SimulateButton type="submit">Simular</SimulateButton>
        </Form>
      </Container>
    </Section>
  );
}
