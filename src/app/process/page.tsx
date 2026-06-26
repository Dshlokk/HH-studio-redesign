import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import ProcessGraph from '@/components/ProcessGraph';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Process | HH Studio Process Network',
  description: 'Understand the HH Studio process network. An engineered, metrics-driven workflow governing creative strategy, interface design, systems builds, and performance cycles.',
};

export default function ProcessPage() {
  return (
    <>
      <Navbar />
      <div style={{ paddingTop: 'calc(var(--header-height) + 40px)' }}>
        <ProcessGraph />
      </div>
      <Footer />
    </>
  );
}
