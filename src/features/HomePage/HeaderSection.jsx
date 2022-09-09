import { chakra, Text, useDisclosure } from '@chakra-ui/react';
import React from 'react';

import Container from 'components/Container';
import ModelEstimateForm from 'components/ModelEstimateForm';
import MyButton from 'components/MyButton';
import * as images from 'images';

export default function HeaderSection() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <chakra.section
        bg={`#bbbbbb url(${images.homeCover})`}
        bgBlendMode="multiply"
        bgSize="cover"
        bgPosition="center"
        px="5"
      >
        <Container color="onPrimary" pt="28" pb="96" textAlign="center">
          <Text fontSize="4xl" mb="3">Cleaning up Page, AZ</Text>
          <Text fontSize="2xl" mb="10">Residential and Commercial Services Available</Text>
          <MyButton onClick={onOpen} variant="secondary">REQUEST A CONTACT</MyButton>
        </Container>
      </chakra.section>
      <ModelEstimateForm isOpen={isOpen} onClose={onClose} />
    </>
  );
}
