import { Box } from '@chakra-ui/react';
import React, { useState } from 'react';

const VARIANT_DARK = 'dark';

export default function IconLink({
  href, Icon, color, variant,
}) {
  const bgColor = variant === VARIANT_DARK ? 'surfaceDark' : 'backgroundDark';
  const [isHovered, setHovered] = useState(false);
  return (
    <Box
      as="a"
      bgColor={isHovered ? color : bgColor}
      borderRadius="50%"
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      padding="1.5"
    >
      <Icon color="white" />
    </Box>
  );
}
