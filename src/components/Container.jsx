import { Box } from '@chakra-ui/react';
import React from 'react';

export default function Container(props) {
  return (
    <Box maxWidth="1200px" marginX="auto" {...props} />
  );
}
