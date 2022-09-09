import { Box, Icon as ChakraIcon, Text } from '@chakra-ui/react';
import React from 'react';

export default function ProcessTile({ description, Icon, title }) {
  return (
    <Box textAlign="center" mx="2.5">
      <ChakraIcon as={Icon} color="secondary" fontSize="70px" mb="5" />
      <Text fontSize="xl" fontWeight="600" mb="3">{title}</Text>
      <Text fontSize="xs" maxWidth="200px" mx="auto">{description}</Text>
    </Box>
  );
}
