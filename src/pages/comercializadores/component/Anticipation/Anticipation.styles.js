// src/components/Anticipation/Anticipation.styles.js
import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  background-image:
    linear-gradient(
      to right,
      rgba(0,0,0,0.8) 50%,
      rgba(0,0,0,0) 100%
    ),
    url('/assets/imagens/ca17d813bcf8dc3001a050b465d79da623738656.png');
  background-size: cover;
  background-position: center;
  color: #fff;
  padding: 6rem 1rem;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  h2 {
    font-size: 2.5rem;
    font-weight: 700;
    line-height: 1.2;
  }

  p {
    font-size: 1rem;
    line-height: 1.6;
    max-width: 500px;
  }

  .highlight {
    color: #FACC15;
    font-weight: 600;
  }
`;

export const Right = styled.form`
  background: rgba(0,0,0,0.8);
  padding: 2rem;
  border-radius: 8px;

  display: grid;
  gap: 0.75rem;

  label {
    display: block;
    font-size: 0.875rem;
    margin-bottom: 0.25rem;
    color: #fff;
  }

  /* estilos base para todos os inputs e selects */
  input,
  select {
    width: 100%;
    height: 40px;
    background: rgba(255,255,255,0.1);
    border: 1px solid rgba(255,255,255,0.4);
    border-radius: 6px;
    color: #fff;
    font-size: 1rem;
    transition: border-color 0.2s;

    &::placeholder {
      color: rgba(255,255,255,0.7);
    }

    &:focus {
      outline: none;
      border-color: #FACC15;
    }
  }

  /* quando existir valor, troca a borda para amarelo */
  input[data-filled="true"],
  select[data-filled="true"] {
    border-color: #FACC15;
  }

  .row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 1.5rem;
    row-gap: 1.25rem;

    @media (max-width: 480px) {
      grid-template-columns: 1fr;
      row-gap: 1rem;
    }
  }

  .checkbox {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.875rem;
    color: #fff;

    input {
      width: auto;
      margin: 0;
    }
  }

  button {
    margin-top: 1rem;
    height: 48px;
    background: #FACC15;
    color: #111;
    border: none;
    border-radius: 9999px;
    font-size: 1rem;
    cursor: pointer;
    transition: background 0.2s;

    &:hover {
      background: #EAB308;
    }
  }
`;
