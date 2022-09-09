import {
  Box, Flex, Icon, Text,
} from '@chakra-ui/react';
import React from 'react';
import { AiFillCaretRight } from 'react-icons/ai';

export default function LinkTile({ link }) {
  return (
    <Box as="a" href={link.href} _hover={{ color: 'primary' }}>
      <Box bgColor="backgroundDark" h="1px" />
      <Flex align="center">
        <Text display="block" flexGrow="1" fontWeight="600" py="2">{link.label}</Text>
        <Icon as={AiFillCaretRight} color="backgroundDark" />
      </Flex>
    </Box>
  );
}
