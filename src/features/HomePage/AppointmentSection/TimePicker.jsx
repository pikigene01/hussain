import { Box, Text } from '@chakra-ui/react';
import React from 'react';

export default function TimePicker({ value, onChange }) {
  return (
    <Box
      borderLeft="1px solid #aeaeae"
      borderRight="1px solid #aeaeae"
      borderTop="1px solid"
      cursor="pointer"
    >
      <Text bgColor="#f0f0f0" py="1" textAlign="center">Time</Text>
      {Array.from({ length: 9 }, (_, index) => {
        const time = new Date();
        time.setHours(index + 7);
        time.setMinutes(0);
        time.setSeconds(0);
        return (
          <Box
            bgColor={index + 7 === value ? 'primaryLight' : null}
            color={index + 7 === value ? 'onPrimary' : null}
            borderBottom="1px solid #aeaeae"
            onClick={() => onChange(index + 7)}
            px="1"
            py="1"
            _hover={{ bgColor: 'gray.100', color: 'onBackground' }}
          >
            <Text textAlign="center">
              {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </Text>
          </Box>
        );
      })}
    </Box>
  );
}
