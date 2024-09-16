import { ApolloProvider } from '@apollo/client';
import { DefaultSeo } from 'next-seo';
import { RecoilRoot } from 'recoil';
import Main from '@/screens/app/components/main';
import useApollo from '@/graphql/useApollo';
import { useWindowOrigin } from '@/hooks/use_window';
import { useApp } from '@/screens/app/hooks';

// Sphinx-specific configuration
const SPHINX_CONFIG = {
  title: 'Sphinx Network',
  description:
    'POWERING PROFITS, FUELING FUTURES. Step into the future of trading with Sphinx. Our platform offers 24/7 access to global energy and commodity markets, making trading faster, easier, and more accessible. No more delays or high-costs just a seamless, secure way to trade whenever you want, from wherever you are.',
  url: 'https://www.sphx.io',
  twitter: '@SphinxProtocol',
};

// SEO configuration
const SEO_CONFIG = {
  openGraph: {
    type: 'website',
    locale: 'en_US',
    site_name: 'Sphinx Network',
  },
  twitter: {
    handle: SPHINX_CONFIG.twitter,
    site: SPHINX_CONFIG.twitter,
    cardType: 'summary_large_image',
  },
  additionalLinkTags: [
    { rel: 'icon', href: '/favicon.ico' },
    { rel: 'canonical', href: SPHINX_CONFIG.url },
  ],
  additionalMetaTags: [
    { name: 'application-name', content: 'Sphinx Network Explorer' },
    { name: 'keywords', content: 'Sphinx, blockchain, trading, energy, commodity, markets' },
  ],
};

function MyApp({ Component, pageProps }) {
  useApp();
  const apolloClient = useApollo(pageProps.initialApolloState);
  const { location } = useWindowOrigin();

  return (
    <RecoilRoot>
      <DefaultSeo
        titleTemplate={`%s | ${SPHINX_CONFIG.title}`}
        title="Sphinx Network Explorer"
        description={SPHINX_CONFIG.description}
        openGraph={{
          title: `Sphinx Network Explorer | ${SPHINX_CONFIG.title}`,
          description: SPHINX_CONFIG.description,
          url: location || SPHINX_CONFIG.url,
          ...SEO_CONFIG.openGraph,
        }}
        twitter={SEO_CONFIG.twitter}
        additionalLinkTags={SEO_CONFIG.additionalLinkTags}
        additionalMetaTags={SEO_CONFIG.additionalMetaTags}
      />
      <ApolloProvider client={apolloClient}>
        <Main Component={Component} pageProps={pageProps} />
      </ApolloProvider>
    </RecoilRoot>
  );
}

export default MyApp;
