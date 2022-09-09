import { Box, Text } from '@chakra-ui/react';
import React from 'react';

export default function NavTab({ children, active, onMouseEnter }) {
  return (
    <Box>
      <Box paddingX="5" paddingY="8">
        <Text
          color={active ? 'primary' : ''}
          fontWeight="600"
          onMouseEnter={onMouseEnter}
          _hover={{ cursor: 'pointer' }}
        >
          {children}
        </Text>
      </Box>
      <TabIndicator active={active} />
    </Box>
  );
}

function TabIndicator({ active }) {
  return (
    <Box
      backgroundColor="primary"
      height="0.5"
      transition={active ? 'transform 250ms' : ''}
      transform={active ? 'scaleX(1)' : 'scaleX(0)'}
      width="100%"
    />
  );
}
