import FeaturedSection from '@/app/components/featuredSection';
import AboutUS from '@/app/components/aboutUs';

export default function Home() {
  return (
    <main className="lg:px-[120px]  md:px-[40px] px-[21px]">
      <AboutUS />
      <FeaturedSection />
    </main>
  );
}
