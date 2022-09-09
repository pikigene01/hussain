import React from 'react';

import FooterSection from 'components/FooterSection';
import HeaderSection from './HeaderSection';
import AutoPilotSection from './AutoPilotSection';
import ServiceSection from './ServiceSection';

export default function CommercialServicePage() {
  return (
    <>
      <HeaderSection />
      <ServiceSection />
      <AutoPilotSection />
      <FooterSection />
    </>
  );
}
