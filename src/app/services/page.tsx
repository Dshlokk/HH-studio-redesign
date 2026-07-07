import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import ServicesGrid from '@/components/ServicesGrid';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: '360 Degree Marketing & Creative Services | HH Studio',
  description: 'Explore HH Studio\'s comprehensive suite of 360 degree marketing services, including branding, SEO, Google and Meta Ads, social media, content production, web design, and growth systems with guaranteed results.',
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <div style={{ paddingTop: 'calc(var(--header-height) + 40px)' }}>
        <ServicesGrid />
      </div>
      <Footer />
    </>
  );
}
