import {
  Box, Center, Icon as ChakraIcon, Text,
} from '@chakra-ui/react';
import React from 'react';

export default function ServiceTile({ Icon, title }) {
  return (
    <Box py="9">
      <Center borderRadius="50%" bgColor="primary" h="90px" mb="7" mx="auto" w="90px">
        <ChakraIcon as={Icon} color="onPrimary" fontSize="60px" />
      </Center>
      <Text fontSize="sm" fontWeight="600" textAlign="center">{title}</Text>
    </Box>
  );
}
