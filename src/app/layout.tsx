import './globals.css'
import { Metadata } from 'next'
import { headers } from 'next/headers'

import Footer from '@/components/Footer'
import GoogleAnalytics from '@/components/GoogleAnalytics'
import ThemeRegistry from '@/theme/ThemeRegistry'
import pageDict from '@/utils/pageConfig'


export async function generateMetadata(): Promise<Metadata> {
  const headersList = headers()
  const hostname = headersList.get('host') ?? 'test.localhost:3000'

  return pageDict[hostname].metadata
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const headersList = headers()
  const hostname = headersList.get('host') ?? 'test.localhost:3000'

  return (
    <html lang='en'>
      <body>
        <GoogleAnalytics />
        <ThemeRegistry options={{ key: 'mui' }} hostname={hostname}>
          {children}
          <Footer />
        </ThemeRegistry>
      </body>
    </html>
  )
}
