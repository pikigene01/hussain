import {
  Center, chakra, Text, useDisclosure,
} from '@chakra-ui/react';
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
        bg={`#bbbbbb url(${images.commercialBg})`}
        bgBlendMode="multiply"
        bgPos="center"
        bgSize="cover"
        px="5"
        py="16"
      >
        <Container color="onPrimary">
          <Text
            fontSize="4xl"
            fontWeight="600"
            textAlign="center"
            maxWidth="700px"
            mb="10"
            mx="auto"
          >
            Exterior Commercial Property Cleaning Services
          </Text>
          <Center>
            <MyButton variant="secondary" onClick={onOpen}>REQUEST A CONTACT</MyButton>
          </Center>
        </Container>
      </chakra.section>
      <ModelEstimateForm isOpen={isOpen} onClose={onClose} />
    </>
  );
}
