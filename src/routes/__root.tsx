import {
  HeadContent,
  Scripts,
  createRootRoute,
} from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'

import Header from '../components/Header'
import Footer from '../components/Footer'
import { BackgroundAnimation } from '../components/BackgroundAnimation'
import NotFound from '../components/NotFound'

import appCss from '../styles.css?url'

const SITE_URL = 'https://khanmdtaufik.dev'

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${SITE_URL}/#person`,
      name: 'Md Taufik Khan',
      url: SITE_URL,
      jobTitle: 'Full Stack Developer',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Dhaka',
        addressCountry: 'BD',
      },
      sameAs: [
        'https://github.com/kmdtaufik',
        'https://www.linkedin.com/in/khanmdtaufik/',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: 'Md Taufik Khan — Full Stack Developer',
      publisher: { '@id': `${SITE_URL}/#person` },
    },
  ],
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'Md Taufik Khan — Full Stack Developer' },
      {
        name: 'description',
        content:
          'Portfolio of Md Taufik Khan — Full Stack Developer from Dhaka, Bangladesh. Building performant web apps with TanStack Start, Hono, Drizzle ORM, and modern TypeScript.',
      },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'Md Taufik Khan' },
      {
        property: 'og:title',
        content: 'Md Taufik Khan — Full Stack Developer',
      },
      {
        property: 'og:description',
        content:
          'Building performant web apps with TanStack Start, Hono, Drizzle ORM, and modern TypeScript.',
      },
      { property: 'og:url', content: SITE_URL },
      { property: 'og:image', content: `${SITE_URL}/avatar.jpg` },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
    links: [
      { rel: 'stylesheet', href: appCss },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossOrigin: 'anonymous',
      },
      { rel: 'canonical', href: SITE_URL },
      { rel: 'icon', href: '/favicon.ico' },
      { rel: 'manifest', href: '/manifest.json' },
    ],
  }),

  shellComponent: RootDocument,
  notFoundComponent: NotFound,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <BackgroundAnimation />
        <Header />
        <main className="relative z-10">{children}</main>
        <Footer />
        <TanStackDevtools
          config={{
            position: 'bottom-right',
          }}
          plugins={[
            {
              name: 'Tanstack Router',
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
        <Scripts />
      </body>
    </html>
  )
}
