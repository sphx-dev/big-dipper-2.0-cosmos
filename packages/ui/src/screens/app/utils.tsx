import chainConfig from '@/chainConfig';

const { basePath, previewImage } = chainConfig();

const TWITTER_IMAGE =
  'https://pbs.twimg.com/profile_images/1844043984324190208/ttenYxQY_400x400.jpg';

export const OPEN_GRAPH_SEO = {
  type: 'website',
  locale: 'en_US',
  site_name: 'Sphinx Network',
  images: [
    {
      url: previewImage ?? TWITTER_IMAGE,
      width: 260,
      height: 260,
      alt: 'Sphinx Network',
    },
  ],
};

export const TWITTER_SEO = {
  handle: '@SphinxProtocol',
  site: '@SphinxProtocol',
  cardType: 'summary_large_image',
  description: 'Powering Profits, Fueling Futures. Tap into energy markets with Sphinx.',
  image: TWITTER_IMAGE,
};

export const ADDITIONAL_LINK_TAGS_SEO = [
  {
    rel: 'apple-touch-icon',
    href: `${basePath}/icons/apple-touch-icon.png`,
    sizes: '180x180',
  },
  {
    rel: 'icon',
    type: 'image/png',
    href: `${basePath}/icons/favicon-32x32.png`,
    sizes: '32x32',
  },
  {
    rel: 'icon',
    type: 'image/png',
    href: `${basePath}/icons/favicon-16x16.png`,
    sizes: '16x16',
  },
  {
    rel: 'manifest',
    href: `${basePath}/icons/site.webmanifest`,
  },
  {
    rel: 'mask-icon',
    href: `${basePath}/icons/safari-pinned-tab.svg`,
    color: '#137dbe',
  },
  {
    rel: 'shortcut icon',
    href: `${basePath}/icons/favicon.ico`,
  },
  { rel: 'canonical', href: 'https://explorer.sphx.dev/' },
];

export const ADDITIONAL_META_TAGS = [
  {
    property: 'msapplication-TileColor',
    content: '#137dbe',
  },
  {
    name: 'msapplication-config',
    content: `${basePath}/icons/browserconfig.xml`,
  },
  { name: 'application-name', content: 'Sphinx Network Explorer' },
  { name: 'keywords', content: 'Sphinx, blockchain, trading, energy, commodity, markets' },
];
