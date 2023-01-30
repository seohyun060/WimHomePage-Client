import React, { useCallback, useState } from 'react';
import ContactDetail from '../components/ContactDetail';
import { ContactFormType } from '@typedef/components/Contact/contact.types';

const initialForm: ContactFormType = {
  title: '',
  company: '',
  name: '',
  tel: '',
  email: '',
  file: null,
  description: '',
};
const ContactDetailContainer = () => {
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
    <ContactDetail
      contactForm={contactForm}
      onValueChanged={onValueChanged}
      onSubmitClicked={onSubmitClicked}
    />
  );
};

export default ContactDetailContainer;
