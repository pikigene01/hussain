import { chakra, Text } from '@chakra-ui/react';
import React from 'react';

import Container from 'components/Container';
import ServiceGrid from 'components/ServiceGrid';
import services from './services';

export default function ServiceSection() {
  return (
    <chakra.section px="5" py="16">
      <Container>
        <Text fontSize="3xl" mb="10" textAlign="center">
          Exterior Residential Property Cleaning Services
        </Text>
        <Text mb="10" textAlign="center">
          What is one of the biggest financial investments you will ever make? Your house! It’s your home, you’re your castle, where your kids grow up. Maintaining the exterior will make it last longer, become more livable, and increase its future value. We can take care of all those hard-to-clean surfaces like your driveway, walkways, fences, garage bays, windows and even the house itself. Give us a call today or request a contact! Let us know what we can do for you!
        </Text>
        <ServiceGrid services={services} />
      </Container>
    </chakra.section>
  );
}
