import Link from 'next/link';
import type { HeroContent } from '@/types';

interface HeroSectionProps {
  data: HeroContent;
}

export default function HeroSection({ data }: HeroSectionProps) {
  return (
    <section className="w-full py-24 md:py-32 lg:py-40 px-4 md:px-6 bg-linear-to-b from-slate-50 to-white">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900">
            {data.title}
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
            {data.subtitle}
          </p>
        </div>
        <div className="flex justify-center">
          <Link
            href={data.cta.link}
            className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-200"
          >
            {data.cta.text}
          </Link>
        </div>
      </div>
    </section>
  );
}

