import { Image, Link } from '@chakra-ui/react';
import NextLink from 'next/link';
import React from 'react';

import * as images from 'images';

export default function Logo() {
  return (
    <NextLink href="/" passHref>
      <Link>
        <Image src={images.logo} height="50px" />
      </Link>
    </NextLink>
  );
}
