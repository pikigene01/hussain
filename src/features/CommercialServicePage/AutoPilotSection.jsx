import {
  Box, chakra, Flex, Text,
} from '@chakra-ui/react';
import React from 'react';

import Container from 'components/Container';

export default function AutoPilotSection() {
  return (
    <chakra.section px="5" py="16">
      <Container>
        <Text fontSize="3xl" textAlign="center" mb="3">
          Put Your Property’s Exterior Cleaning on Autopilot
        </Text>
        <LinkBlock />
        <Text textAlign="center">
          Struggling to keep your properties clean? Sign up for exterior cleaning service with Page Pressure Washing. Choose the plan that works for you: Weekly, monthly or seasonal service plans available.
        </Text>
      </Container>
    </chakra.section>
  );
}

function LinkBlock() {
  return (
    <Flex justifyContent="center" mb="3">
      <Text color="primary" px="5">Window Washing</Text>
      <Box w="1px" bgColor="onBackground" />
      <Text color="primary" px="5">Gutter Cleaning</Text>
      <Box w="1px" bgColor="onBackground" />
      <Text color="primary" px="5">Pressure Washing</Text>
    </Flex>
  );
}
