import {
  Box, Flex, Link, Stack, Text,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import React from 'react';
import { GrFacebookOption, GrLinkedinOption, GrTwitter } from 'react-icons/gr';

import Container from 'components/Container';
import IconLink from './IconLink';
import links from './links';
import LinkTile from './LinkTile';

const VARIANT_DARK = 'dark';

export default function FooterSection({ variant }) {
  const isDark = variant === VARIANT_DARK;
  return (
    <Box px="10" bgColor={isDark ? 'surfaceLight' : ''}>
      <Container as="footer" pb="5" pt="14">
        <Flex flexWrap="wrap" fontSize="sm" pb={{ lg: '16' }} display={{ base: 'block', md: 'flex' }}>
          <LinkTileList />
          <LinkListGroup />
          <Contacts />
        </Flex>
        <CopyrightBlock />
      </Container>
    </Box>
  );
}

function LinkListGroup() {
  const widths = [
    { md: '50%', lg: '33%' },
    { md: '50%', lg: '36%' },
  ];
  return links.map(({ label, href, subLinks }, index) => (
    <Stack pb={{ md: '8' }} align="flex-start" d={{ base: 'none', md: 'flex' }} w={widths[index]}>
      <NextLink href={href} passHref>
        <Text as="a" fontWeight="600" py="2" _hover={{ color: 'primary' }}>
          {label}
        </Text>
      </NextLink>
      {subLinks.map((subLink) => (
        <Text as="a" href={subLink.link} _hover={{ color: 'primary' }}>{subLink.label}</Text>
      ))}
    </Stack>
  ));
}

function LinkTileList() {
  return (
    <Box display={{ md: 'none' }}>
      {links.map(({ href, label }) => (
        <LinkTile link={{ href, label }} />
      ))}
      <Box bgColor="surface" h="1px" />
    </Box>
  );
}

function Contacts() {
  return (
    <Stack w={{ md: '50%', lg: '25%' }} pb={{ md: '8' }} py={{ base: '10', md: '0' }}>
      <NextLink href="/contact" passHref>
        <Link fontWeight="600" py="2" _hover={{ color: 'primary' }}>CONTACTS</Link>
      </NextLink>
      <Link
        color="primary"
        cursor="pointer"
        fontWeight="600"
        href="mailto:pagepressurewashing928@gmail.com"
      >
        pagepressurewashing928@gmail.com
      </Link>
      <Link href="tel:+19286602108">+1 928 660 2108</Link>
    </Stack>
  );
}

function CopyrightBlock({ variant }) {
  return (
    <Flex justify="space-between" align={{ base: 'flex-start', md: 'center' }}>
      <Box align={{ md: 'center' }} display={{ base: 'block', md: 'flex' }}>
        <Text fontSize="sm" color={variant === VARIANT_DARK ? 'black' : 'surfaceDark'}>
          &copy;
          {` ${new Date().getFullYear()} Page Pressure Washing`}
        </Text>
      </Box>
    </Flex>
  );
}
