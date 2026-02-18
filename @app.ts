import type { AppConfig } from '@/types';

export const appConfig: AppConfig = {
  website: {
    name: 'Lyttle Builder',
    description: 'A low-code builder for React applications.',
    url: 'https://builder.lyttle.dev',
  },
  pages: {
    home: {
      path: '/',
      title: 'Lyttle Builder - Build React Apps with Ease',
      description:
        'Lyttle Builder is a low-code platform that allows you to create React applications quickly and easily. With our intuitive drag-and-drop interface, you can design your app visually and export clean, production-ready code.',
      keywords: [
        'low-code',
        'react builder',
        'drag-and-drop',
        'visual development',
        'react applications',
      ],
      content: [
        {
          type: 'hero',
          title: 'Build React Apps with Ease',
          subtitle:
            'Lyttle x is a low-code platform that allows you to create React applications quickly and easily.',
          cta: {
            text: 'Get Started',
            link: '/get-started',
          },
        },
        {
          type: 'features',
          title: 'Features',
          items: [
            {
              icon: 'drag-and-drop',
              title: 'Drag-and-Drop Interface',
              description:
                'Design your app visually with our intuitive drag-and-drop interface.',
            },
            {
              icon: 'code-export',
              title: 'Clean Code Export',
              description:
                'Export clean, production-ready React code for your projects.',
            },
            {
              icon: 'components-library',
              title: 'Components Library',
              description:
                'Access a library of pre-built components to speed up your development process.',
            },
          ],
        },
      ],
    },
    about: {
      path: '/about',
      title: 'About Lyttle Builder',
      description:
        'Learn more about Lyttle Builder, our mission, and the team behind this innovative low-code platform for building React applications.',
      keywords: [
        'about Lyttle Builder',
        'team',
        'mission',
        'low-code platform',
      ],
    },
    contact: {
      path: '/contact',
      title: 'Contact Lyttle Builder',
      description:
        'Get in touch with the Lyttle Builder team for support, inquiries, or feedback about our low-code platform for building React applications.',
      keywords: [
        'contact Lyttle Builder',
        'support',
        'inquiries',
        'feedback',
      ],
    },
  },
};

