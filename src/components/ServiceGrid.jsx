import { Box } from '@chakra-ui/react';
import React from 'react';

import ServiceTile from 'components/ServiceTile';

export default function ServiceGrid({ services }) {
  return (
    <Box d={{ md: 'flex' }} flexWrap="wrap" my="-9">
      {services.map((service) => (
        <Box w={{ md: services.length < 4 ? `${100 / services.length}%` : '25%' }}>
          {ServiceTile(service)}
        </Box>
      ))}
    </Box>
  );
}
