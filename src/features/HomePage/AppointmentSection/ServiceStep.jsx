import {
  Box, Flex, Text, Select,
} from '@chakra-ui/react';
import React, { useState } from 'react';

import MyButton from 'components/MyButton';

export default function ServiceStep({ initialValue, onSubmit }) {
  const [submitEnabled, setSubmitEnabled] = useState(Boolean(initialValue));
  const [selection, setSelection] = useState(initialValue);
  return (
    <Box pt="5" pb="8">
      <Text fontSize="sm" fontWeight="600" mb="7" textAlign="center">Please select a service:</Text>
      <Select
        placeholder="Select Service"
        mb="8"
        onChange={(event) => {
          setSelection(event.target.value);
          setSubmitEnabled(Boolean(event.target.value));
        }}
        value={selection}
      >
        <option>Window Cleaning</option>
        <option>Gutter Cleaning</option>
        <option>Pressure Washing</option>
        <option>Other</option>
      </Select>
      <Box bgColor="surfaceDark" h="1px" mb="5" />
      <Flex justifyContent="flex-end">
        <MyButton
          onClick={
            submitEnabled
              ? () => {
                setSubmitEnabled(false);
                onSubmit(selection);
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
