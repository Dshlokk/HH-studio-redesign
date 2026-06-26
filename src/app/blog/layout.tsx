import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Marketing Intelligence Blog — SEO, Branding & Growth | HH Studio',
  description: 'Read HH Studio\'s blog for expert insights on brand strategy, SEO, performance marketing, content strategy, and digital growth.',
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
