// src/components/CreditForm/SimulateCreditForm.styles.js
import styled from 'styled-components'

export const Section = styled.section`
  display: flex;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 1rem;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 2rem 1rem;
  }
`

export const Left = styled.div` flex: 1; `
export const Right = styled.div` flex: 1; `

export const Heading = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: #111;
`

export const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

export const FeatureItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  margin-bottom: 1rem;
  line-height: 2;
  color: #444;
  font-weight: 400;
`

export const IconWrapper = styled.div`
  margin-top: 0.2rem;
  font-size: 1.25rem;
  color: #facc15;
`

export const IntroText = styled.p`
  font-size: 1.2rem;
  color: #1F1F1F;
  margin-bottom: 1.5rem;
  font-weight: 500;
`

export const Form = styled.form`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;

  .wide {
    grid-column: 1 / -1;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`

export const Label = styled.label`
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
  color: #333;
`

const baseInput = `
  width: 100%;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  border-radius: 0.375rem;
  transition: border-color 0.2s;
  &:focus {
    outline: none;
    border-color: #facc15;
  }
`

export const Input = styled.input`
  ${baseInput}
  border: 1px solid ${({ $filled }) => ($filled ? '#facc15' : '#ccc')};
`

export const Select = styled.select`
  ${baseInput}
  background: #fff;
  border: 1px solid ${({ $filled }) => ($filled ? '#facc15' : '#ccc')};
`

export const CheckboxWrapper = styled.div`
  grid-column: 1 / -1;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1rem;
`

export const Checkbox = styled.input`
  width: 1rem;
  height: 1rem;
  accent-color: #facc15;
`

export const Button = styled.button`
  display: inline-block;
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  padding: 0.75rem 2rem;
  background: #facc15;
  color: #111827;
  border: none;
  border-radius: 9999px;
  text-decoration: none;
  cursor: pointer;
  transition: background 0.2s;
  align-self: flex-start;

  &:hover {
    background: #eab308;
  }
`
