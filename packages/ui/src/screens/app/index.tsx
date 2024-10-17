import { ApolloProvider } from '@apollo/client';
import { DefaultSeo } from 'next-seo';
import { RecoilRoot } from 'recoil';
import Main from '@/screens/app/components/main';
import useApollo from '@/graphql/useApollo';
import { useWindowOrigin } from '@/hooks/use_window';
import { useApp } from '@/screens/app/hooks';
import {
  ADDITIONAL_LINK_TAGS_SEO,
  ADDITIONAL_META_TAGS,
  OPEN_GRAPH_SEO,
  TWITTER_SEO,
} from './utils';

// Sphinx-specific configuration
const SPHINX_CONFIG = {
  title: 'Visualize data on the Sphinx Network',
  description:
    'Powering profits, fueling futures. Step into the future of trading with Sphinx. Our platform offers 24/7 access to global energy and commodity markets, making trading faster, easier, and more accessible. No more delays or high-costs just a seamless, secure way to trade whenever you want, from wherever you are.',
  url: 'https://www.sphx.io',
  twitter: '@SphinxProtocol',
};

function MyApp({ Component, pageProps }) {
  useApp();
  const apolloClient = useApollo(pageProps.initialApolloState);
  const { location } = useWindowOrigin();

  return (
    <RecoilRoot>
      <DefaultSeo
        titleTemplate={`%s | ${SPHINX_CONFIG.title}`}
        title="Sphinx Explorer"
        description={SPHINX_CONFIG.description}
        openGraph={{
          title: `Sphinx Explorer | ${SPHINX_CONFIG.title}`,
          description: SPHINX_CONFIG.description,
          url: location || SPHINX_CONFIG.url,
          ...OPEN_GRAPH_SEO,
        }}
        twitter={TWITTER_SEO}
        additionalLinkTags={ADDITIONAL_LINK_TAGS_SEO}
        additionalMetaTags={ADDITIONAL_META_TAGS}
      />
      <ApolloProvider client={apolloClient}>
        <Main Component={Component} pageProps={pageProps} />
      </ApolloProvider>
    </RecoilRoot>
  );
}

export default MyApp;
