import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import PortfolioStack from '@/components/PortfolioStack';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Work | HH Studio Design Archive',
  description: 'Explore the design archive of HH Studio. A premium portfolio of volumetric spatial operating systems, interactive configurators, and brand identity systems.',
};

export default function WorkPage() {
  return (
    <>
      <Navbar />
      <div style={{ paddingTop: 'calc(var(--header-height) + 40px)' }}>
        <PortfolioStack />
      </div>
      <Footer />
    </>
  );
}
