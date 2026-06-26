import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import StudioShowcase from '@/components/StudioShowcase';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Showcase | HH Studio Lab',
  description: 'Inside the creative systems laboratory of HH Studio. Explore our brand strategy models, design system tokens, and telemetry configurations.',
};

export default function ShowcasePage() {
  return (
    <>
      <Navbar />
      <div style={{ paddingTop: 'calc(var(--header-height) + 40px)' }}>
        <StudioShowcase />
      </div>
      <Footer />
    </>
  );
}
