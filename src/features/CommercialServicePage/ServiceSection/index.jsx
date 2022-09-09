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
          Exterior Commercial Property Cleaning Services
        </Text>
        <Text mb="10" textAlign="center">
          What’s the very first thing customers see when the walk up to your business? The storefront! A clean and well-maintained facility could determine whether they walk right on by staring at the mess on the ground or become distracted by what’s in your windows. Pressure washing removes nasty stains, rust, grease, gum, and anything else that might make your property unattractive. Not to mention any grease that could cause a slip and a lawsuit. We also do windows! Maintenance packages are available to keep your business looking strong all year long. Give us a call TODAY to get a free estimate and improve your image in Page.
        </Text>
        <ServiceGrid services={services} />
      </Container>
    </chakra.section>
  );
}
