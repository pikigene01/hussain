import { chakra } from '@chakra-ui/react';
import React from 'react';

import Container from 'components/Container';
import EstimateForm from 'components/EstimateForm';
import MainContent from './MainContent';

export default function ContentSection() {
  return (
    <chakra.section py="16" px="5">
      <Container d={{ lg: 'flex' }}>
        <chakra.main
          mb={{ base: '10', lg: 'none' }}
          pr={{ base: 'none', lg: '2.5' }}
          w={{ lg: '70%' }}
        >
          <MainContent />
        </chakra.main>
        <chakra.aside w={{ lg: '30%' }} pl={{ base: 'none', lg: '2.5' }}>
          <EstimateForm />
        </chakra.aside>
      </Container>
    </chakra.section>
  );
}
