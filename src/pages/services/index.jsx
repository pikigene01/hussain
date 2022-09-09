import React from 'react';

import MainLayout from 'components/MainLayout';
import ServicePage from 'features/ServicePage';

export default function Home() {
  return (
    <MainLayout>
      <ServicePage />
    </MainLayout>
  );
}
