import { useState } from 'react';

import Layout from '@/components/Layout';
import PostCard from '@/components/PostCard';
import Header from '@/components/Header';

import { getAllPosts } from '@/libs/posts';

export default function Home({ posts }) {
  const [renderedPosts, setRenderedPosts] = useState(posts);

  return (
    <Layout title='' meta={{ title: 'Blog personal de Juan Pablo Addeo' }}>
      <div className='mb-auto mx-auto w-5xl'>
        <Header
          initialPosts={posts}
          callbackSearch={(newPosts) => setRenderedPosts(newPosts)}
        />
        <div className='space-y-4'>
          {renderedPosts.map(({ slug, meta }) => (
            <PostCard key={slug} slug={slug} meta={meta} />
          ))}
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = await getAllPosts();
  return {
    props: {
      posts,
      initialPosts: posts,
    },
  };
}
