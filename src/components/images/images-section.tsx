import { TypographyH2 } from '../typography/typography-h2';
import ImageSlider from './image-slider/image-slider';

export default function ImagesSection() {
  return (
    <section className="max-w-screen-md mx-auto flex flex-col gap-4">
      <TypographyH2>Images</TypographyH2>
      <div className="flex flex-col gap-6 items-start">
        <ImageSlider />
      </div>
    </section>
  );
}
