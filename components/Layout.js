import { useState } from 'react';

import Head from 'next/head';
import Link from 'next/link';

export default function Layout({ children, meta }) {
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name='description' content={meta.description} />

        <meta content={meta.description} name='description' />
        <meta property='og:type' content='website' />
        <meta property='og:site_name' content={`Blog_${meta.title}`} />
        <meta property='og:description' content={meta.description} />
        <meta property='og:title' content={meta.title} />
        {meta.image && <meta property='og:image' content={meta.image} />}
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='https://blog.jpaddeo.work' />
        <meta name='twitter:title' content={meta.title} />
        <meta name='twitter:description' content={meta.description} />
        {meta.image && <meta name='twitter:image' content={meta.image} />}
        <link
          rel='preload'
          href='https://unpkg.com/prismjs@0.0.1/themes/prism-okaidia.css'
          as='script'
        />
        <link
          href={`https://unpkg.com/prismjs@0.0.1/themes/prism-okaidia.css`}
          rel='stylesheet'
        />
      </Head>
      <article
        className='prose lg:prose-xl px-8 m-auto my-4 sm:my-16'
        dangerouslySetInnerHTML={{ __html: children }}
      />
    </>
  );
}
