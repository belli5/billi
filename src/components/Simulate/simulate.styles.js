// src/components/Simulate/simulate.styles.js
import styled from 'styled-components';

export const Section = styled.section`
  padding: 4rem 1rem;
  background-color: #F7F7F7;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 2.5rem;
  color: #111827;
  margin-bottom: 0.5rem;
`;

export const Subtitle = styled.p`
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 1.5;
  color: #1F1F1F;
  margin-bottom: 2rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;          /* aumenta o espaçamento vertical entre R ows */
`;

export const Row = styled.div`
  display: flex;
  gap: 1rem;
  /* margin-bottom removido, agora gerenciado pelo gap do Form */

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Group = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-family: 'Montserrat', sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: #111827;
`;

export const Input = styled.input`
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  padding: 0.75rem 1rem;
  padding-right: 2.5rem;         
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  transition: border-color 0.2s, background-image 0.2s;

  &:focus {
    outline: none;
    border-color: #facc15;
  }

  /* quando o placeholder some (usuário digitou) */
  &:not(:placeholder-shown) {
    border-color: #facc15;
    background-image: url('/imagens/check.svg');
    background-repeat: no-repeat;
    background-position: right 1rem center;
    background-size: 1rem 1rem;
  }
`;

export const Select = styled.select`
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  padding: 0.75rem 1rem;
  padding-right: 2.5rem;          /* espaço para o ícone customizado */
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  appearance: none;
  background: 
    url("data:image/svg+xml,%3Csvg fill='none' stroke='%2373747A' stroke-width='2' viewBox='0 0 24 24'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")
    no-repeat right 1rem center;
  background-size: 1rem;

  &:focus {
    outline: none;
    border-color: #facc15;
  }

  /* quando tiver valor selecionado (diferente do primeiro option) */
  &:not([value=""]) {
    border-color: #facc15;
    /* se quiser check aqui também, substitua o background acima por check.svg */
  }
`;

export const CheckboxRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
`;

export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  margin: 0;
  margin-right: 0.5rem;
  width: 1rem;
  height: 1rem;
`;

export const CheckboxLabel = styled.label`
  font-family: 'Montserrat', sans-serif;
  font-size: 0.875rem;
  color: #6b7280;
`;

export const SimulateButton = styled.button`
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  padding: 0.75rem 2rem;
  background: #facc15;
  color: #111827;
  border: none;
  border-radius: 9999px;
  cursor: pointer;
  transition: background 0.2s;
  align-self: flex-start;

  &:hover {
    background: #eab308;
  }
`;
