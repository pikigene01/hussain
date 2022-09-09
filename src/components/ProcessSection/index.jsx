import { Box, chakra, Text } from '@chakra-ui/react';
import React from 'react';

import Container from 'components/Container';
import processes from './processes';
import ProcessTile from './ProcessTile';

export default function ProcessSection() {
  return (
    <chakra.section px="5">
      <Container py="16">
        <Box mx="-2.5">
          <Text fontSize="3xl" fontWeight="500" mb="20" textAlign="center">How It Works</Text>
          <Box d={{ md: 'flex' }}>
            {processes.map((process) => (
              <Box w={{ md: `${100 / processes.length}%` }} mb={{ base: '10', md: 'none' }}>
                {ProcessTile(process)}
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </chakra.section>
  );
}
