import Head from 'next/head';
import Link from 'next/link';

import { getAllPosts } from '@/libs/posts';

export default function Home({ posts }) {
  return (
    <div className='container'>
      <Head>
        <title>JPA Blog</title>
        <meta name='description' content='Blog personal de Juan Pablo Addeo' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        {posts.map((post) => (
          <Link key={post.slug} href={`/${post.slug}`} className=''>
            <a>
              <h2>{post.meta.title} &rarr;</h2>
              <p>{post.meta.date}</p>
            </a>
          </Link>
        ))}
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const posts = await getAllPosts();

  return {
    props: {
      posts,
    },
  };
}
