import { TypographyH2 } from '../typography/typography-h2';
import HeightDrawer from './height-drawer/height-drawer';

export default function TestingSection() {
  return (
    <section className="max-w-screen-md mx-auto flex flex-col gap-4">
      <TypographyH2>Testing</TypographyH2>
      <div className="flex flex-col gap-6 items-start">
        <HeightDrawer />
      </div>
    </section>
  );
}
