import Head from 'next/head'

import Loading from './loading'

export default function Home() {
  return (
    <>
      <Head>
        <title>Instituto Ubuntu</title>
        <link rel='manifest' href='/manifest.json' />
      </Head>
      <Loading />
    </>
  )
}
