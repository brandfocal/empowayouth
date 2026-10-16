import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'EmpowaYouth — INSPIRED | CONNECTED | TRANSFORMED',
    short_name: 'EmpowaYouth',
    description:
      'Connecting ambitious young South Africans aged 18 to 34 to the mentors, networks, and skills that turn potential into lasting economic power.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0B0F0E',
    theme_color: '#E85D04',
    icons: [
      {
        src: '/logo/empowayouth-icon-32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: '/logo/empowayouth-icon.png',
        sizes: '600x600',
        type: 'image/png',
      },
      {
        src: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  };
}
