import Head from 'next/head'
import { Inter } from 'next/font/google'
import Layout from '@/components/Layout'
import { ReactElement } from 'react'
import Feed from '@/components/home/Feed'
import { getAllPosts } from '@/util/markdown'
import { GetStaticProps } from 'next'

const inter = Inter({ subsets: ['latin'] })

interface BlogIndexProps {
  posts: BlogPost[];
}

export default function Home({ posts }: BlogIndexProps) {
  return (
    <>
      <Head>
        <title>Plotless Thoughts</title>
        <meta name="description" content="My ramblings for no apparent reason" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
        <div className='m-4'>
        <div className='mx-auto max-w-md'>
       <h1 className='text-4xl font-bold text-center mb-6'>Plotless Thoughts</h1>
       <Feed posts={posts} />
       </div>
       </div>
      </main>
    </>
  )
}


Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}


export const getStaticProps: GetStaticProps<BlogIndexProps> = async () => {
  const posts = getAllPosts();

  return {
    props: {
      posts,
    },
  };
};