import {
  Box, chakra, Image, Text,
} from '@chakra-ui/react';
import React from 'react';

import Container from 'components/Container';
import * as images from 'images';
import ContactForm from './ContactForm';

export default function FormSection() {
  return (
    <chakra.section px="5" py="20">
      <Container>
        <Box d={{ md: 'flex' }}>
          <Box mb={{ base: '16', md: '0' }} pr={{ md: '5' }} w={{ md: '50%' }}>
            <ContactForm />
          </Box>
          <Box pl={{ md: '5' }} w={{ md: '50%' }}>
            <Image alt="Service Map" mb="5" src={images.ppwMap} w="100%" />
            <Text>
              We focus our services in Page and its surrounding areas. Feel free to call if you require services at a greater distance.
            </Text>
          </Box>
        </Box>
      </Container>
    </chakra.section>
  );
}
