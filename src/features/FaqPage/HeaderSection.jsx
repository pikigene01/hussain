import { chakra, Text } from '@chakra-ui/react';
import React from 'react';

import * as images from 'images';

export default function AboutPage() {
  return (
    <chakra.section
      bg={`#bbbbbb url(${images.faqBg})`}
      bgBlendMode="multiply"
      bgPos="center"
      bgSize="cover"
      color="onPrimary"
      py="20"
    >
      <Text fontSize="4xl" fontWeight="600" textAlign="center">
        Frequently Asked Questions
      </Text>
    </chakra.section>
  );
}
