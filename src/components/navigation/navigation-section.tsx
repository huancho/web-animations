import { TypographyH2 } from '../typography/typography-h2';
import BubbleNav from './bubble-nav/bubble-nav';
import ActiveTabs from './active-tabs/active-tabs';

export default function NavigationSection() {
  return (
    <section className="max-w-screen-md mx-auto flex flex-col gap-4">
      <TypographyH2>Navigation</TypographyH2>
      <div className="flex flex-col gap-6 items-start">
        <BubbleNav />
        <ActiveTabs />
      </div>
    </section>
  );
}
