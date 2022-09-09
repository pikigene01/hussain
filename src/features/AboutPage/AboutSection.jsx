import { Box, chakra, Text } from '@chakra-ui/react';
import React from 'react';

export default function AboutSection() {
  return (
    <chakra.section px="5" py="16">
      <Box maxWidth="600" mx="auto">
        <Text fontSize="2xl" fontWeight="600" mb="5">About Us</Text>
        <Text py="16" textAlign="center">
          Coming soon
        </Text>
      </Box>
    </chakra.section>
  );
}
