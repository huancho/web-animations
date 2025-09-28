import Header from '@/components/header/header';
import ButtonSection from '@/components/buttons/button-section';
import Section3D from '@/components/3d/3d-section';
import ImagesSection from '@/components/images/images-section';
import NavigationSection from '@/components/navigation/navigation-section';
import ThemeSection from '@/components/theme/theme-section';

export default function Home() {
  return (
    <>
      <Header />
      <main className="space-y-16 mb-20 px-4 sm:px-0">
        <ButtonSection />
        <Section3D />
        <ImagesSection />
        <NavigationSection />
        <ThemeSection />
      </main>
    </>
  );
}
