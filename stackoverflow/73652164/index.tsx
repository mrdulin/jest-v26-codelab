import React, { useEffect, useState } from 'react';

type Contact = any;
interface ContactProps {
  contact: Contact;
}

const initialState = false;
const IndividualContact = ({ contact }: ContactProps) => {
  const [isDesktop, setIsDesktop] = useState(initialState);

  const updateMedia = () => {
    setIsDesktop(window.innerWidth > 799);
  };

  useEffect(() => {
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  });

  return (
    <div>
      {isDesktop && <span className="contact__email">{contact.email}</span>}
      {isDesktop && <span className="contact__phoneNumber">{contact.phoneNumber}</span>}
    </div>
  );
};

export default IndividualContact;
