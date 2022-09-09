import { Box, chakra, Text } from '@chakra-ui/react';
import React from 'react';

import questions from './questions';

export default function AboutSection() {
  return (
    <chakra.section px="5" py="16">
      <Box maxWidth="600" mx="auto">
        {
          questions.map((q, index) => (
            <>
              <Text fontSize="2xl" fontWeight="600" mb="5">
                {`Q${index + 1}. ${q.question}`}
              </Text>
              <Text mb="10">{q.answer}</Text>
            </>
          ))
        }
      </Box>
    </chakra.section>
  );
}
