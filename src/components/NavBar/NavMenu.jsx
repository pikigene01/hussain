import { Flex, Link } from '@chakra-ui/react';
import React from 'react';
import NextLink from 'next/link';

import navGraph from './nav_graph';
import MenuTab from './MenuTab';
import NavTab from './NavTab';

export default function NavMenu({ dark, activeTab, onMouseEnterTab }) {
  return (
    <Flex
      as="nav"
      justify="space-between"
      align="stretch"
      fontSize="xs"
      color={dark ? 'onBackground' : 'onPrimary'}
      paddingRight="5"
      display={{ base: 'none', xl: 'flex' }}
    >
      {navGraph.menu.map((menuItem, index) => (
        menuItem.menu
          ? (
            <MenuTab
              active={index === activeTab}
              onMouseEnter={() => onMouseEnterTab(index)}
              menu={menuItem.menu}
            >
              <NextLink href={menuItem.link} passHref>
                <Link _hover={{ textDecoration: 'none' }}>{menuItem.name}</Link>
              </NextLink>
            </MenuTab>
          ) : (

            <NavTab
              active={index === activeTab}
              onMouseEnter={() => onMouseEnterTab(index)}
            >
              <NextLink href={menuItem.link} passHref>
                <Link _hover={{ textDecoration: 'none' }}>{menuItem.name}</Link>
              </NextLink>
            </NavTab>
          )
      ))}
    </Flex>
  );
}
