import { Box } from '@chakra-ui/react';
import React from 'react';

import FooterSection from 'components/FooterSection';
import ProcessSection from 'components/ProcessSection';
import HeaderSection from './HeaderSection';
import ServiceSection from './ServiceSection';
import AppointmentSection from './AppointmentSection';

export default function HomePage() {
  return (
    <>
      <HeaderSection />
      <Box mt="-180px">
        <AppointmentSection />
      </Box>
      <ServiceSection />
      <ProcessSection />
      <FooterSection />
    </>
  );
}
