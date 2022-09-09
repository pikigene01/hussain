import { Center, chakra, Text } from '@chakra-ui/react';
import React from 'react';

import Container from 'components/Container';
import MyButton from 'components/MyButton';

export default function HeaderSection() {
  return (
    <chakra.section bgColor="gray.700" px="5" py="16">
      <Container color="onPrimary">
        <Text fontSize="4xl" fontWeight="600" textAlign="center" maxWidth="700px" mb="10" mx="auto">
          Specific Cleaning Services
        </Text>
        <Center>
          <MyButton variant="secondary">Get Free Estimate</MyButton>
        </Center>
      </Container>
    </chakra.section>
  );
}
