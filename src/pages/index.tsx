import { Inter } from 'next/font/google'

import Head from 'next/head'

import { ThemeProvider } from '@/components/theme-provider'

import { Header } from '@/components/common/header'
import { Footer } from '@/components/common/footer'
import { Hero } from '@/components/sections/hero'

import { DATA } from '@/data'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: DATA.name,
    template: `%s - ${DATA.name}`
  },
  description: DATA.description,
  keywords: DATA.keywords,
  openGraph: {
    title: `${DATA.name}`,
    description: DATA.description,
    url: DATA.url,
    siteName: `${DATA.name}`,
    locale: 'en_US',
    type: 'website'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      'index': true,
      'follow': true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  twitter: {
    title: `${DATA.name}`,
    card: 'summary_large_image'
  },
  verification: {
    google: '',
    yandex: ''
  }
}

export default function Home() {
  return (
    <ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
      <div className={inter.className}>
        <Head>
          <title>{metadata.title.default}</title>
          <meta name='description' content={metadata.description} />
          <meta name='keywords' content={metadata.keywords.join(', ')} />
          <meta property='og:title' content={metadata.openGraph.title} />
          <meta property='og:description' content={metadata.openGraph.description} />
          <meta property='og:url' content={metadata.openGraph.url} />
          <meta property='og:site_name' content={metadata.openGraph.siteName} />
          <meta property='og:locale' content={metadata.openGraph.locale} />
          <meta property='og:type' content={metadata.openGraph.type} />
          <meta name='robots' content='index, follow' />
          <meta
            name='googlebot'
            content='index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1'
          />
          <meta name='twitter:title' content={metadata.twitter.title} />
          <meta name='twitter:card' content={metadata.twitter.card} />
          <meta name='google-site-verification' content={metadata.verification.google} />
          <meta name='yandex-verification' content={metadata.verification.yandex} />
        </Head>

        <Header />
        <Hero />
        <Footer />
      </div>
    </ThemeProvider>
  )
}
