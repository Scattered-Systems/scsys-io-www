
import * as Lucide from 'lucide-react';

type PageRoute = {
  icon?: any;
  href: string;
  title: string;

  [key: string]: any;
}
export const sitemap = {
  pages: [
    {
      href: '/',
      icon: Lucide.Home,
      title: 'Home',
      description: 'The home page of Scattered-Systems.',
      keywords: [
        'scsys',
        'scattered-systems',
        'software',
        'development',
        'technology',
      ],
      template: '%s | scsys',
    },
    {
      href: '/about',
      icon: Lucide.Info,
      title: 'About',
    },
  ],
};

export default sitemap;