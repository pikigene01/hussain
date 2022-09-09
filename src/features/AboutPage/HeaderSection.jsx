import { chakra, Text } from '@chakra-ui/react';
import React from 'react';

import * as images from 'images';

export default function HeaderSection() {
  return (
    <chakra.section
      bg={`#bbbbbb url(${images.aboutBg})`}
      bgPos="center"
      bgSize="cover"
      backgroundBlendMode="multiply"
      color="onPrimary"
      py="20"
    >
      <Text fontSize="4xl" fontWeight="600" textAlign="center">About us</Text>
    </chakra.section>
  );
}
