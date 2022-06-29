import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

import Layout from '@/components/Layout';
import Tag from '@/components/Tag';

import { getAllPosts } from '@/libs/posts';

export default function Home({ posts }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (ev) => {
    ev.preventDefault();
    setSearchQuery(ev.target.value);
  };

  return (
    <Layout title='' meta={{ title: 'Blog personal de Juan Pablo Addeo' }}>
      <div className='mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0'>
        <main className='mb-auto'>
          <div className='space-y-2 pt-6 pb-8 md:space-y-5'>
            <h1 className='text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14'>
              JPA's Blog
            </h1>
            <div className='relative max-w-lg'>
              <input
                aria-label='Search articles'
                type='text'
                onChange={handleSearch}
                placeholder='Search articles'
                className='block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100'
              />
              <svg
                className='absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                />
              </svg>
            </div>
          </div>
          <ul className='space-y-4'>
            {posts.map(({ slug, meta }) => (
              <li
                key={slug}
                className='py-4 px-4 border-2 border-transparent border-gray-700 hover:border-white hover:border-dashed rounded-lg cursor-pointer'
              >
                <Link
                  href={`/${slug}`}
                  className='text-gray-900 dark:text-gray-100'
                >
                  <article>
                    <div className='space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0"'>
                      <dl>
                        <dt className='sr-only'>Published on</dt>
                        <dd className='text-base font-medium leading-6 text-gray-500 dark:text-gray-400'>
                          <time dateTime={meta.date}>
                            {new Intl.DateTimeFormat().format(
                              new Date(meta.date)
                            )}
                          </time>
                        </dd>
                      </dl>
                      <div className='space-y-3 xl:col-span-3'>
                        <div>
                          <h3 className='text-2xl font-bold leading-8 tracking-tight'>
                            {meta.title}
                          </h3>
                          <div className='flex flex-wrap'>
                            {meta.tags?.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        </div>
                        <div className='prose max-w-none text-gray-500 dark:text-gray-400'>
                          {meta.description}
                        </div>
                      </div>
                    </div>
                  </article>
                </Link>
              </li>
            ))}
          </ul>
        </main>
      </div>
    </Layout>
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
