import React from 'react';
import {
  Section,
  Overlay,
  Content,
  Left,
  Tag,
  Title,
  Highlight,
  Right,
  PrimaryButton,
  SecondaryButton,
  ArrowIcon
} from './vemserbilli.styles';

export default function VemSerBilli() {
  return (
    <Section id="vem-ser-billi">
      <Overlay />
      <Content>
        <Left>
          <Tag>#VemSerBilli</Tag>
          <Title>
            Garanta acesso a um ecossistema de <Highlight>benefícios para você e seu negócio.</Highlight>
          </Title>
        </Left>

        <Right>
          <PrimaryButton onClick={() => {/* navegação */}}>
            Sou um gerador GD <ArrowIcon size={20}/>
          </PrimaryButton>
          <SecondaryButton onClick={() => {/* navegação */}}>
            Sou uma comercializadora <ArrowIcon size={20}/>
          </SecondaryButton>
          <SecondaryButton onClick={() => {/* navegação */}}>
            Sou um parceiro lojista <ArrowIcon size={20}/>
          </SecondaryButton>
        </Right>
      </Content>
    </Section>
  );
}
