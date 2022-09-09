import {
  Center, chakra, Input, Select, Text,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

import MyButton from 'components/MyButton';
import * as repository from 'services/repository';

export default function EstimateForm({ onSubmitted }) {
  const [formData, setFormData] = useState({});
  const [isSubmitEnabled, setSubmitEnabled] = useState({});
  const [isReference, setReference] = useState(false);

  useEffect(() => {
    const isFormValid = formData.name && formData.email && formData.phone && formData.address
      && formData.reference;
    if (isFormValid) {
      setSubmitEnabled(true);
    } else {
      setSubmitEnabled(false);
    }
  }, [formData]);

  return (
    <chakra.form bgColor="surface" p="5">
      <Text fontSize="xl" mb="5">Schedule A Free Estimate</Text>
      <Input
        bgColor="background"
        mb="5"
        onChange={(event) => setFormData({ ...formData, name: event.target.value })}
        placeholder="Name*"
      />
      <Input
        bgColor="background"
        mb="5"
        onChange={(event) => setFormData({ ...formData, email: event.target.value })}
        placeholder="Email*"
      />
      <Input
        bgColor="background"
        mb="5"
        onChange={(event) => setFormData({ ...formData, phone: event.target.value })}
        placeholder="Phone*"
      />
      <Input
        bgColor="background"
        mb="5"
        onChange={(event) => setFormData({ ...formData, address: event.target.value })}
        placeholder="Service Address*"
      />
      <Select
        bgColor="background"
        mb="5"
        onChange={(event) => {
          if (event.target.value !== 'Someone I Know') {
            setFormData({ ...formData, reference: event.target.value });
          } else {
            setFormData({ ...formData, reference: null });
          }
          setReference(event.target.value === 'Someone I Know');
        }}
        placeholder="How did you hear about us?*"
      >
        <option>Google Search</option>
        <option>Online Advertisement</option>
        <option>Someone I Know</option>
        <option>Event / Show</option>
        <option>Email</option>
        <option>Social Media</option>
        <option>Other</option>
      </Select>
      {
        isReference
          ? (
            <Input
              bgColor="background"
              mb="5"
              onChange={(event) => setFormData({ ...formData, reference: event.target.value })}
              placeholder="Who referred you?*"
            />
          )
          : null
      }
      <Center>
        <MyButton
          onClick={
            isSubmitEnabled
              ? async () => {
                setSubmitEnabled(false);
                await repository.createEstimate(formData);
                if (onSubmitted) {
                  onSubmitted();
                }
              }
              : null
          }
          size="sm"
        >
          SCHEDULE A FREE ESTIMATE
        </MyButton>
      </Center>
    </chakra.form>
  );
}
