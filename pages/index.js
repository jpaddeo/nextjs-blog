import Head from 'next/head';
import Link from 'next/link';

import { getAllPosts } from '@/libs/posts';

const BlogTitle = () => {
  return (
    <div className='divide-y divide-gray-200 dark:divide-gray-700'>
      <div className='space-y-2 pt-6 pb-8 md:space-y-5'>
        <h1 className='text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14'>
          Latest
        </h1>
        <p className='text-lg leading-7 text-gray-500 dark:text-gray-400'>
          Blog personal de Juan Pablo Addeo
        </p>
      </div>
    </div>
  );
};

export default function Home({ posts }) {
  return (
    <div className='mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0'>
      <Head>
        <title>JPA Blog</title>
        <meta name='description' content='Blog personal de Juan Pablo Addeo' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='mb-auto'>
        <BlogTitle />
        <ul className='divide-y divide-gray-200 dark:divide-gray-700'>
          {posts.map(({ slug, title, description, meta }) => (
            <li key={slug}>
              <article>
                <div className='space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0"'>
                  <dl>
                    <dt className='sr-only'>Published on</dt>
                    <dd className='text-base font-medium leading-6 text-gray-500 dark:text-gray-400'>
                      <time dateTime={meta.date}>
                        {new Intl.DateTimeFormat().format(new Date(meta.date))}
                      </time>
                    </dd>
                  </dl>
                  <div className='space-y-5 xl:col-span-3'>
                    <div className='space-y-6'>
                      <div>
                        <h2 className='text-2xl font-bold leading-8 tracking-tight'>
                          <Link
                            href={`/${slug}`}
                            className='text-gray-900 dark:text-gray-100'
                          >
                            <a>{title}</a>
                          </Link>
                        </h2>
                      </div>
                      <div className='prose max-w-none text-gray-500 dark:text-gray-400'>
                        {description}
                      </div>
                    </div>
                    <div className='text-base font-medium leading-6'>
                      <Link
                        href={`/${slug}`}
                        className='text-primary-500 hover:text-primary-600 dark:hover:text-primary-400'
                        aria-label={`Read "${title}"`}
                      >
                        <a>Read more &rarr;</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>
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
