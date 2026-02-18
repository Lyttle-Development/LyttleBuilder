import { ReactNode } from 'react';
import type { FeaturesContent } from '@/types';

interface FeaturesSectionProps {
  data: FeaturesContent;
}

const getIconComponent = (iconName: string): ReactNode => {
  const iconMap: Record<string, ReactNode> = {
    'drag-and-drop': (
      <svg
        className="w-12 h-12 text-blue-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 15l-2 5m0 0l-2-5m2 5v-5m0-5l2-5m0 0l2 5m-2-5v5"
        />
      </svg>
    ),
    'code-export': (
      <svg
        className="w-12 h-12 text-blue-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10 20l4-16m4 4l4 4m0 0l-4 4m4-4H3"
        />
      </svg>
    ),
    'components-library': (
      <svg
        className="w-12 h-12 text-blue-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.5a2 2 0 00-1 .268V5a2 2 0 10-4 0v5.732A2 2 0 009.5 11H7"
        />
      </svg>
    ),
  };

  return iconMap[iconName] || null;
};

export default function FeaturesSection({ data }: FeaturesSectionProps) {
  return (
    <section className="w-full py-24 md:py-32 px-4 md:px-6 bg-white">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
            {data.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.items.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-start space-y-4 p-8 rounded-lg border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all duration-200"
            >
              <div className="shrink-0">
                {getIconComponent(feature.icon)}
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-slate-900">
                  {feature.title}
                </h3>
                <p className="text-base text-slate-600">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

