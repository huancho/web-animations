import { TypographyH2 } from '../typography/typography-h2';
import BallDrag from './ball-drag/ball-drag';

export default function DragSection() {
  return (
    <section className="max-w-screen-md mx-auto flex flex-col gap-4">
      <TypographyH2>Drag</TypographyH2>
      <div className="flex flex-col gap-6 items-start">
        <BallDrag />
      </div>
    </section>
  );
}
