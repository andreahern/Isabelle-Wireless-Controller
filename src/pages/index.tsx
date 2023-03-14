import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Isabelle Wireless Controller</title>
        <meta name="description" content="Wireless controller for the Isabelle robot." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1>
      </main>
    </>
  )
}
