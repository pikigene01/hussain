import React from 'react';

import FooterSection from 'components/FooterSection';
import ProcessSection from 'components/ProcessSection';
import HeaderSection from './HeaderSection';
import ServiceSection from './ServiceSection';

export default function ResidentialServicePage() {
  return (
    <>
      <HeaderSection />
      <ServiceSection />
      <ProcessSection />
      <FooterSection />
    </>
  );
}
