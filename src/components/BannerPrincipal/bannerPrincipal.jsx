import { useState, useCallback } from 'react';
import { useCarouselAutoPlay } from '../../hooks/useCarouselAutoPlay';
import {
  CarouselContainer,
  CarouselTrack,
  Slide,
  Overlay,
  Content,
  SmallText,
  Heading,
  Highlight,
  Description,
  ButtonGroup,
  PrimaryButton,
  SecondaryButton,
  DotsContainer,
  Dot
} from './bannerPrincipal.styles';

const slides = [
  {
    background: '/imagens/backgrounHome.png',        // note o “/” no início
    smallText: 'Serviços Digitais',
    heading: 'Antecipamos até',
    highlight: '36 meses da sua economia.',
    description: 'Aproveite as melhores condições de crédito facilitado através da nossa plataforma.',
    primaryLabel: 'Acessar',
    secondaryLabel: 'Saiba mais',
    primaryHref: '#',
    secondaryHref: '#'
  },
  {
    background: '/imagens/background2.png',
    smallText: 'Mais Economia',
    heading: 'Obtenha descontos',
    highlight: 'na sua conta de energia',
    description: 'Com a Billi você pode ter até 40% OFF na conta de luz',
    primaryLabel: 'Acessar',
    secondaryLabel: 'Saiba mais',
    primaryHref: '#',
    secondaryHref: '#'
  },
  {
    background: '/imagens/background3.png',
    smallText: 'Crédito Facilitado',
    heading: 'Receba parte da sua economia futura',
    highlight: 'sem esperar o ciclo completo',
    description: 'Por que esperar mais tempo se com Billi você pode antecipar?',
    primaryLabel: 'Acessar',
    secondaryLabel: 'Saiba mais',
    primaryHref: '#',
    secondaryHref: '#'
  },
  {
    background: '/imagens/background4.png',
    smallText: 'Prêmio pela Portabilidade',
    heading: 'Ao optar por uma comercializadora parceira,',
    highlight: 'você recebe um bônus financeiro direto.',
    description: 'Temos uma rede de parceiros que garantem os benefícios',
    primaryLabel: 'Acessar',
    secondaryLabel: 'Saiba mais',
    primaryHref: '#',
    secondaryHref: '#'
  }
];

export default function BannerPrincipal() {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  // Cria uma versão estável de nextSlide para o hook
  const nextSlide = useCallback(
    () => setCurrent(c => (c === length - 1 ? 0 : c + 1)),
    [length]
  );

  // dispara o autoplay a cada 5s (pode passar outro valor)
  useCarouselAutoPlay(nextSlide, length, 5000);

  return (
    <CarouselContainer>
      <CarouselTrack current={current}>
        {slides.map((slide, idx) => (
          <Slide key={idx} background={slide.background}>
            <Overlay />
            <Content>
              <SmallText>{slide.smallText}</SmallText>
              <Heading>
                {slide.heading}
                <Highlight>{slide.highlight}</Highlight>
              </Heading>
              <Description>{slide.description}</Description>
              <ButtonGroup>
                <PrimaryButton href={slide.primaryHref}>
                  {slide.primaryLabel}
                </PrimaryButton>
                <SecondaryButton href={slide.secondaryHref}>
                  {slide.secondaryLabel}
                </SecondaryButton>
              </ButtonGroup>
            </Content>
          </Slide>
        ))}
      </CarouselTrack>

      <DotsContainer>
        {slides.map((_, idx) => (
          <Dot
            key={idx}
            active={idx === current}
            onClick={() => setCurrent(idx)}
            aria-label={`Slide ${idx + 1}`}
          />
        ))}
      </DotsContainer>
    </CarouselContainer>
  );
}
