import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { Wrapper } from './FloatingWhatsApp.styles';

// Link no formato wa.me/55<DDD><número>
const WHATSAPP_LINK = 'https://wa.me/5511999999999';

export default function FloatingWhatsApp() {
  return (
    <Wrapper
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chamar no WhatsApp"
    >
      <FaWhatsapp size={28} color="#fff" />
    </Wrapper>
  );
}
