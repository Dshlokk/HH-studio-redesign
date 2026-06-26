import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import ServicesGrid from '@/components/ServicesGrid';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Marketing Services — Brand, SEO, Performance, Content & Web | HH Studio',
  description: 'Explore HH Studio\'s full suite of marketing services — branding, SEO, Google & Meta Ads, social media, content production, web design, and growth systems. Measurable results guaranteed.',
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
