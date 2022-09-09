import { Box, Link } from '@chakra-ui/react';
import NextLink from 'next/link';
import React from 'react';

export default function NaveMenuVertical({ menu }) {
  return (
    <Box marginLeft="5">
      {
        menu.map((menuItem) => (
          <>
            <Box py="1">
              <NextLink href={menuItem.link} passHref>
                <Link>{menuItem.name}</Link>
              </NextLink>
            </Box>
            {
              menuItem.menu
                ? (
                  <NaveMenuVertical menu={menuItem.menu} />
                ) : null
            }
          </>
        ))
      }
    </Box>
  );
}
