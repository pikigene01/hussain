import { Box, Link } from '@chakra-ui/react';
import NextLink from 'next/link';
import { CgMenuLeft } from 'react-icons/cg';
import React, { useState } from 'react';

import Container from 'components/Container';
import MyButton from 'components/MyButton';
import Logo from 'components/Logo';
import NavMenu from './NavMenu';
import navGraph from './nav_graph';
import NavMenuVertical from './NavMenuVertical';

const NO_ACTIVE_TAB = -1;

export default function NavBar({ elevated }) {
  const [activeTab, setActiveTab] = useState(NO_ACTIVE_TAB);
  const isElevated = elevated || activeTab !== NO_ACTIVE_TAB;

  const [expanded, setExpanded] = useState(false);

  return (
    <Box
      backgroundColor={isElevated ? 'background' : ''}
      transition="background-color 250ms"
      boxShadow={isElevated ? 'rgba(0, 0, 0, 0.05) 0px 5px 17px 0px' : ''}
      onMouseLeave={() => setActiveTab(NO_ACTIVE_TAB)}
      py={{ base: '3', xl: '0' }}
    >
      {NavBarContent({
        activeTab, isElevated, onExpand: () => setExpanded(!expanded), setActiveTab,
      })}
      {
        expanded
          ? <NavMenuVertical menu={navGraph.menu} />
          : null
      }
    </Box>
  );
}

function NavBarContent({
  activeTab, isElevated, onExpand, setActiveTab,
}) {
  return (
    <Container paddingX={{ base: '5', xl: '0' }} display="flex" alignItems="center">
      <Logo isElevated={isElevated} />
      <Box flexGrow="1" />
      <NavMenu
        activeTab={activeTab}
        dark={isElevated}
        onMouseEnterTab={(index) => setActiveTab(index)}
      />
      <Box display={{ base: 'none', md: 'block' }}>
        <NextLink href="/contact" passHref>
          <Link>
            <MyButton onClick={() => { }} size="sm">CONTACT US</MyButton>
          </Link>
        </NextLink>
      </Box>
      <ExpandButton onExpand={onExpand} />
    </Container>
  );
}

function ExpandButton({ onExpand }) {
  return (
    <Box
      as="button"
      backgroundColor="primary"
      borderRadius="50%"
      _hover={{ cursor: 'pointer' }}
      onClick={onExpand}
      padding="3"
      marginLeft="7"
      display={{ xl: 'none' }}
    >
      <CgMenuLeft color="white" size="24px" />
    </Box>
  );
}
