import { TypographyH2 } from '../typography/typography-h2';
import Planet3D from './3d-planet/3d-planet';

export default function Section3D() {
  return (
    <section className="max-w-screen-md mx-auto flex flex-col gap-4">
      <TypographyH2>3D Transforms</TypographyH2>
      <div className="flex flex-col gap-6 items-start">
        <Planet3D />
      </div>
    </section>
  );
}
