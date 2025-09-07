import Header from '@/components/header/header';
import ButtonSection from '@/components/buttons/button-section';
import Section3D from '@/components/3d/3d-section';

export default function Home() {
  return (
    <>
      <Header />
      <main className="space-y-16">
        <ButtonSection />
        <Section3D />
      </main>
    </>
  );
}
