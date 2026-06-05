import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  sidebar: [
    'overview',
    'getting-started',
    'architecture',
    {
      type: 'category',
      label: 'Guide',
      items: ['guides/index'],
    },
    {
      type: 'category',
      label: 'Componenti',
      items: ['components/index'],
    },
    {
      type: 'category',
      label: 'Utility',
      items: ['utils/index'],
    },
    'configuration',
  ],
};

export default sidebars;
