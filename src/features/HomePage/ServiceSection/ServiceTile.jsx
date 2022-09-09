import {
  Box, Center, Flex, Icon as ChakraIcon, Text,
} from '@chakra-ui/react';
import React from 'react';

export default function ServiceTile({
  description, Icon, title,
}) {
  return (
    <Flex>
      <Box mr="4">
        <Center bgColor="primary" borderRadius="50%" h="60px" w="60px">
          <ChakraIcon as={Icon} color="onPrimary" fontSize="35px" />
        </Center>
      </Box>
      <Box>
        <Text fontSize="xl" fontWeight="600" mb="2">{title}</Text>
        <Text fontSize="sm" mb="3">{description}</Text>
      </Box>
    </Flex>
  );
}
