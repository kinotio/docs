import Link from 'next/link'
import { DocsThemeConfig } from 'nextra-theme-docs'

import { Kinotio } from '@/components/icons/kinotio'

import { getCurrentYear } from '@/lib/utils'

import { DATA } from '@/data'

const config: DocsThemeConfig = {
  logo: function Logo() {
    return <Kinotio width={100} height={100} />
  },
  project: {
    link: DATA.repo
  },
  chat: {
    link: DATA.social_url.discord
  },
  docsRepositoryBase: DATA.doc_repo,
  footer: {
    content: (
      <span>
        {`Copyright © ${getCurrentYear()} Developed by `}
        <Link href={'https://kinotio.io'} target={'_blank'}>
          Kinotio
        </Link>
        .
      </span>
    )
  }
}

export default config
