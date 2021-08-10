import { MDXRemote } from 'next-mdx-remote';
import MDXComponents from '../components/MDXComponents';
import { getFileBySlug, getFiles } from '../utils/mdx';

function Post({ source, frontmatter }) {
  return <MDXRemote {...source} components={MDXComponents} />;
}

export default Post;

export async function getStaticProps({ params }) {
  const { source, frontmatter } = await getFileBySlug(params.slug);
  return {
    props: {
      source,
      frontmatter,
    },
  };
}

export async function getStaticPaths() {
  const posts = await getFiles();
  const paths = posts.map((post) => ({
    params: {
      slug: post.replace('.mdx', ''),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}
