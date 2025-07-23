import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  background: #F4F4F4;
  padding: 4rem 1rem 2rem;
  color: #1F1F1F;
`;

export const Top = styled.div`
  max-width: 1200px;
  margin: 0.5rem 1rem 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 8rem;
  justify-content: space-between;
`;

export const Logo = styled.img`
  height: 25px;         
  width: auto;
  cursor: pointer;
`;

export const Column = styled.div`
  flex: 1 1 180px;
  min-width: 150px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const ColTitle = styled.h4`
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
`;

export const LinkItem = styled.a`
  font-size: 0.875rem;
  color: #4B5563;
  text-decoration: none;
  &:hover {
    color: #111827;
  }
`;

export const Socials = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-bottom: 0.75rem;

  a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    background: #FACC15;
    color: #111827;
    border-radius: 9999px;
    font-size: 1rem;
    transition: background 0.2s;
    &:hover {
      background: #EAB308;
    }
  }
`;

export const Divider = styled.hr`
  max-width: 1200px;
  margin: 2rem auto;
  border: none;
  border-top: 1px solid #000000;
`;

export const Bottom = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  font-size: 0.75rem;
  color: #6B7280;
  line-height: 1.4;
  text-align: center;
`;
