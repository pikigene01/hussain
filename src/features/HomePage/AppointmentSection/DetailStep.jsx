import {
  Box, chakra, Flex, Input, Text, Textarea,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

import MyButton from 'components/MyButton';

export default function DetailStep({ date, onBack, onSubmit }) {
  const [nextEnabled, setNextEnabled] = useState(false);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    if (formData.name && formData.phone && formData.email) {
      setNextEnabled(true);
    } else {
      setNextEnabled(false);
    }
  }, [formData]);

  return (
    <Box fontSize="sm" py="5">
      <Text textAlign="center" mb="5">
        You selected a booking for&nbsp;
        <chakra.span fontWeight="600">Window Cleaning</chakra.span>
        &nbsp;at&nbsp;
        <chakra.span fontWeight="600">
          {date.toLocaleTimeString('en-us', { hour: '2-digit', minute: '2-digit' })}
        </chakra.span>
        &nbsp;on&nbsp;
        <chakra.span fontWeight="600">
          {date.toLocaleDateString('en-us', { year: 'numeric', month: 'long', day: 'numeric' })}
        </chakra.span>
        . Please provide your details in the form below to proceed with booking.
      </Text>
      <chakra.form mb="8">
        <Box d={{ sm: 'flex' }} mb="5" mx="-1.5">
          <Box w={{ sm: '33.33%' }} px="1.5">
            <Text color="secondary" fontWeight="600" mb="1" textAlign="center">Name*</Text>
            <Input
              onChange={(event) => setFormData({ ...formData, name: event.target.value })}
            />
          </Box>
          <Box w={{ sm: '33.33%' }} px="1.5">
            <Text color="secondary" fontWeight="600" mb="1" textAlign="center">Phone*</Text>
            <Input
              onChange={(event) => setFormData({ ...formData, phone: event.target.value })}
            />
          </Box>
          <Box w={{ sm: '33.33%' }} px="1.5">
            <Text color="secondary" fontWeight="600" mb="1" textAlign="center">Email*</Text>
            <Input
              onChange={(event) => setFormData({ ...formData, email: event.target.value })}
              type="email"
            />
          </Box>
        </Box>
        <Text color="secondary" fontWeight="600" mb="1" textAlign="center">
          Your Address & Anything else you&apos;d like us to know before coming?
        </Text>
        <Textarea onChange={(event) => setFormData({ ...formData, message: event.target.value })} />
      </chakra.form>
      <Box bgColor="surfaceDark" h="1px" mb="5" />
      <Flex justifyContent="space-between">
        <MyButton onClick={onBack} size="sm">Back</MyButton>
        <MyButton
          onClick={
            nextEnabled
              ? () => {
                setNextEnabled(false);
                onSubmit(formData);
              }
              : null
          }
          size="sm"
        >
          Next
        </MyButton>
      </Flex>
    </Box>
  );
}
