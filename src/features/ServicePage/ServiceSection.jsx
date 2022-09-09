import { Box, chakra, Text } from '@chakra-ui/react';
import React from 'react';

import Container from 'components/Container';
import ServiceGrid from 'components/ServiceGrid';
import services from './services';

export default function ServiceSection() {
  return (
    <chakra.section px="5">
      <Container py="16">
        <Text fontSize="3xl" mb="12" textAlign="center">
          Residential Property Cleaning Services
        </Text>
        <ServiceGrid services={services.residential} />
        <Box bgColor="secondary" h="1px" mx="auto" my="12" w="90%" />
        <Text fontSize="3xl" mb="12" textAlign="center">
          Commercial Property Cleaning Services
        </Text>
        <ServiceGrid services={services.commercial} />
      </Container>
    </chakra.section>
  );
}
