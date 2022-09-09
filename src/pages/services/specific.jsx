import React from 'react';

import MainLayout from 'components/MainLayout';
import SpecificServicePage from 'features/SpecificServicePage';

export default function Home() {
  return (
    <MainLayout>
      <SpecificServicePage />
    </MainLayout>
  );
}
