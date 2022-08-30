import Layout from '@/components/Layout';
import markdownToHtml from '@/libs/markdown';
import { getAllPosts, getPostBySlug } from '@/libs/posts';

export default function Post({ meta, content }) {
  return (
    <Layout meta={meta}>
      <article
        className='max-w-md md:max-w-xl lg:max-w-2xl xl:max-w-5xl prose lg:prose-xl px-8 m-auto my-4 sm:my-16'
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug);
  const content = await markdownToHtml(post.content || '');

  return {
    props: {
      ...post,
      content,
    },
  };
}

export async function getStaticPaths() {
  const posts = await getAllPosts();
  const paths = posts.map((post) => {
    return {
      params: {
        slug: post.slug,
      },
    };
  });

  return {
    paths,
    fallback: 'blocking',
  };
}
