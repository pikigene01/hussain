import { chakra, Input, Textarea } from '@chakra-ui/react';
import React, { useState } from 'react';

import MyButton from 'components/MyButton';

export default function ContactForm() {
  const [formData, setFormData] = useState({});
  const enabled = formData.name && formData.number && formData.email && formData.message;

  return (
    <chakra.form bgColor="surface" p="5">
      <Input
        bgColor="background"
        placeholder="Name"
        mb="5"
        onChange={(event) => setFormData({ ...formData, name: event.target.value })}
      />
      <Input
        bgColor="background"
        placeholder="Contact Number"
        mb="5"
        onChange={(event) => setFormData({ ...formData, number: event.target.value })}
      />
      <Input
        bgColor="background"
        placeholder="Email Address"
        mb="5"
        onChange={(event) => setFormData({ ...formData, email: event.target.value })}
      />
      <Textarea
        bgColor="background"
        mb="5"
        minHeight="200px"
        onChange={(event) => setFormData({ ...formData, message: event.target.value })}
        placeholder="Message"
      />
      <MyButton size="sm" onClick={enabled ? () => { } : null}>Submit</MyButton>
    </chakra.form>
  );
}
