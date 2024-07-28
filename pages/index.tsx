import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Next.js TypeScript Vercel Project</title>
        <meta name="description" content="A Next.js project with TypeScript deployed on Vercel" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Welcome to Next.js!</h1>
        <p>This is a Next.js project using TypeScript, ready to be deployed on Vercel.</p>
      </main>
    </div>
  )
}

export default Home
