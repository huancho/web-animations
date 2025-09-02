import { TypographyH2 } from '../typography/typography-h2';
import ScaleButton from './scale-button/scale-button';

export default function ButtonSection() {
  return (
    <section className="max-w-screen-md mx-auto flex flex-col gap-4">
      <TypographyH2>Buttons</TypographyH2>
      <div className="flex flex-col gap-6 items-start">
        <ScaleButton />
      </div>
    </section>
  );
}
