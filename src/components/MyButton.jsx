import { Box, Text } from '@chakra-ui/react';
import React from 'react';

export default function MyButton({
  children, variant, onClick, size,
}) {
  const bgColor = variant === 'secondary' ? 'secondaryDark' : 'primary';
  const bgColorHover = variant === 'secondary' ? 'secondary' : 'primaryLight';
  const bgColorState = onClick ? bgColor : 'gray.400';
  const bgColorHoverState = onClick ? bgColorHover : 'gray.400';
  return (
    <Box
      bgColor={bgColorState}
      color={variant === 'secondary' ? 'onSecondary' : 'onPrimary'}
      display="inline-block"
      padding={size !== 'sm' ? '14' : '6'}
      paddingY={size !== 'sm' ? '4' : '3'}
      transition="background-color 250ms"
      onClick={onClick}
      whiteSpace="nowrap"
      _hover={{
        bgColor: bgColorHoverState,
        cursor: 'pointer',
      }}
    >
      <Text fontWeight="semibold" fontSize="14px" textAlign="center">{children}</Text>
    </Box>
  );
}
