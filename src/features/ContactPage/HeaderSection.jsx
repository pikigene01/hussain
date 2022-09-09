import { chakra, Text } from '@chakra-ui/react';
import React from 'react';

import * as images from 'images';

export default function HeaderSection() {
  return (
    <chakra.section
      bg={`#bbbbbb url(${images.contactBg})`}
      bgBlendMode="multiply"
      bgPos="center"
      bgSize="cover"
      color="onPrimary"
      py="20"
    >
      <Text fontSize="4xl" fontWeight="600" textAlign="center">Contact</Text>
    </chakra.section>
  );
}
