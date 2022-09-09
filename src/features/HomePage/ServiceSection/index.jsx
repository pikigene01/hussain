import {
  Box, chakra, Flex, Link, Text,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import React from 'react';

import Container from 'components/Container';
import MyButton from 'components/MyButton';
import services from './services';
import ServiceTile from './ServiceTile';

export default function ServiceSection() {
  return (
    <chakra.section bgColor="surface" px="5">
      <Container py="20">
        <Text fontSize="3xl" textAlign="center" mb="12">What We Do</Text>
        <Box d={{ md: 'flex' }} flexWrap="wrap" mx="-2.5">
          {services.map((service) => (
            <Box px="2.5" w={{ md: "33.33%" }} mb="16">
              {ServiceTile(service)}
            </Box>
          ))}
        </Box>
        <Flex flexDir={{ base: 'column', md: 'row' }} justifyContent="center">
          <NextLink href="/services/residential" passHref>
            <Link>
              <MyButton onClick={() => { }} size="sm">Residential Services</MyButton>
            </Link>
          </NextLink>
          <Box h={{ base: '5', md: 'none' }} w={{ md: '16' }} />
          <NextLink href="/services/commercial" passHref>
            <Link>
              <MyButton onClick={() => { }} size="sm">Commercial Services</MyButton>
            </Link>
          </NextLink>
        </Flex>
      </Container>
    </chakra.section>
  );
}
