import styled from 'styled-components';

export const CarouselContainer = styled.section`
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

export const CarouselTrack = styled.div`
  display: flex;
  height: 100%;
  transition: transform 0.5s ease-in-out;
  transform: translateX(-${props => props.$current * 100}%);
`;

export const Slide = styled.div`
  flex: 0 0 100%;
  height: 100%;
  background-image: url(${props => props.$background});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 70% 0%;
  position: relative;
`;

export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.5);
`;

export const Content = styled.div`
  position: relative;
  z-index: 1;
  max-width: 700px;
  margin: 0 auto 0 10rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #fff;
`;

export const SmallText = styled.span`
  font-weight: 400;
  font-size: 1.8rem;
  line-height: 1.2;
  letter-spacing: 0.05em;
  color: #E7BB0D;
  opacity: 0.9;
  margin-bottom: 0.75rem;
`;

export const Heading = styled.h1`
  font-weight: 700;
  font-size: 48px;
  line-height: 1.15;
  margin: 0 0 0.5rem;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

export const Highlight = styled.span`
  display: block;
  font-weight: 700;
  font-size: 48px;
  line-height: 1.15;
  color: #FACC15;
  margin-top: 0.25rem;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

export const Description = styled.p`
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1.2;
  margin-top: 0.5rem;
  max-width: 600px;
  color: #FFFFFF;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
`;

export const PrimaryButton = styled.a`
  padding: 1rem 1.5rem;
  background: #FACC15;
  color: #111827;
  border-radius: 9999px;
  text-decoration: none;
  font-weight: 500;

  &:hover {
    background: #EAB308;
  }
`;

export const SecondaryButton = styled.a`
  padding: 1rem 1.5rem;
  border: 2px solid #FACC15;
  color: #FACC15;
  border-radius: 9999px;
  text-decoration: none;
  font-weight: 600;

  &:hover {
    background: rgba(250,204,21,0.1);
  }
`;

export const DotsContainer = styled.div`
  position: absolute;
  bottom: 1.5rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.5rem;
  z-index: 2;
`;

export const Dot = styled.button`
  height: 0.75rem;
  width: ${props => (props.$active ? '1.5rem' : '0.75rem')};
  border-radius: 0.375rem;
  border: none;
  background: ${props => (props.$active ? '#FACC15' : 'rgba(255,255,255,0.6)')};
  cursor: pointer;
  transition: width 0.3s ease, background 0.3s ease;

  &:hover {
    background: #FACC15;
  }
`;
