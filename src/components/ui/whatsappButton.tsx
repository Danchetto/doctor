import React from 'react';
import Image from 'next/image';

const WhatsappButton: React.FC = () => {
  const url = 'https://wa.me/34641749828';

  return (
    <a aria-label="Chat on WhatsApp" href={url}>
      <button className="rounded-xl">
        <Image src="/images/whatsapp.svg" alt="Whatsapp Logo" height={38} width={164} />
      </button>
    </a>
  );
};

export default WhatsappButton;
