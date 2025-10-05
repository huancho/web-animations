import React from 'react';
import { TypographyH2 } from '../typography/typography-h2';
import ServiceModal from './service-modals.tsx/service-modal';

export default function ModalsSection() {
  return (
    <section className="max-w-screen-md mx-auto flex flex-col gap-4">
      <TypographyH2>Modals</TypographyH2>
      <div className="flex flex-col gap-6 items-start">
        <ServiceModal />
      </div>
    </section>
  );
}
