import { Box, Text } from '@chakra-ui/react';
import React from 'react';

export default function DoneStep() {
  return (
    <Box py="5">
      <Text fontSize="5xl" textAlign="center">Thank You!</Text>
      <Text mb="8" textAlign="center">Our team will reach out to you soon!</Text>
      <Box bgColor="surfaceDark" h="1px" mb="5" />
    </Box>
  );
}
