import {
  FooterWrapper,
  Top,
  Logo,
  Column,
  ColTitle,
  LinkItem,
  Socials,
  Divider,
  Bottom
} from './footer.styles';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

import logoImg from '../../../public/assets/imagens/Billi_logo.png';

export default function Footer() {
  return (
    <FooterWrapper>
      <Top>
        {/* Logo */}
        <Logo src={logoImg} alt="Billi" />

        {/* Coluna “Billi_” */}
        <Column>
          <ColTitle>Billi_</ColTitle>
          <LinkItem href="#sobre">Sobre nós</LinkItem>
          <LinkItem href="#parceiro-gerador">Seja um parceiro gerador</LinkItem>
          <LinkItem href="#parceiro-lojista">Seja um parceiro lojista</LinkItem>
          <LinkItem href="#comercializadora">Seja uma comercializadora parceira</LinkItem>
        </Column>

        {/* Coluna “Produtos” */}
        <Column>
          <ColTitle>Produtos</ColTitle>
          <LinkItem href="#credito-facilitado">Crédito Facilitado</LinkItem>
          <LinkItem href="#financiamento-obras">Financiamento de Obras</LinkItem>
          <LinkItem href="#quitacao-debitos">Quitação de Débitos</LinkItem>
        </Column>

        {/* Coluna “Siga nossas redes” */}
        <Column>
          <ColTitle>siga nossas redes</ColTitle>
          <Socials>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <FaYoutube />
            </a>
          </Socials>
          <div style={{ fontSize: '0.875rem', color: '#4B5563' }}>
            Central de Relacionamento:<br/>
            (11) 31495-8395
          </div>
        </Column>
      </Top>

      <Divider/>

      <Bottom>
        Billi Tecnologia LTDA · CNPJ nº 54.837.101/0001-40<br/>
        Rua Dr Guilherme Bannitz 126 Conj 81 e 1º, Itaim Bibi, São Paulo - SP, 04532-060<br/>
        © Billi 2025 - Todos os direitos reservados
      </Bottom>
    </FooterWrapper>
  );
}
