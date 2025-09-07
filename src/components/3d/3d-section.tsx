import { TypographyH2 } from '../typography/typography-h2';
import Planet3D from './3d-planet/3d-planet';
import Cube from './cube/cube';
import Helix from './helix/helix';
import YingYang from './ying-yang/ying-yang';

export default function Section3D() {
  return (
    <section className="max-w-screen-md mx-auto flex flex-col gap-4">
      <TypographyH2>3D Transforms</TypographyH2>
      <div className="flex flex-col gap-10 items-start">
        <Planet3D />
        <YingYang />
        <Cube />
        <Helix />
      </div>
    </section>
  );
}
