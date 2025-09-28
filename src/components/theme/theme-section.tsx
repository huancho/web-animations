import { TypographyH2 } from '../typography/typography-h2';
import ThemeSwitch from './theme-switch/theme-switch';

export default function ThemeSection() {
  return (
    <section className="max-w-screen-md mx-auto flex flex-col gap-4">
      <TypographyH2>Theme</TypographyH2>
      <div className="flex flex-col gap-6 items-start">
        <ThemeSwitch />
      </div>
    </section>
  );
}
