import { ContactFormType } from '@typedef/components/Contact/contact.types';
import React from 'react';
import { useCallback } from 'react';
import { useState } from 'react';
import Contact from '../Contact';

const initialForm: ContactFormType = {
  title: '',
  company: '',
  name: '',
  tel: '',
  email: '',
  file: null,
  description: '',
};

const ContactContainer = () => {
  const [contactForm, setContactForm] = useState<ContactFormType>(initialForm);

  const onValueChanged = useCallback(
    (key: keyof ContactFormType, value: string | File | null) => {
      setContactForm({ ...contactForm, [key]: value });
    },
    [contactForm],
  );

  const onSubmitClicked = useCallback(() => {
    setContactForm(initialForm);
  }, []);

  return (
    <Contact
      contactForm={contactForm}
      onValueChanged={onValueChanged}
      onSubmitClicked={onSubmitClicked}
    />
  );
};

export default ContactContainer;
